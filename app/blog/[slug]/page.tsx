import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'
import BlogPost from '@/components/BlogPost'

async function getPost(slug: string) {
  try {
    const filePath = join(process.cwd(), 'content/blog', `${slug}.md`)
    const fileContents = await readFile(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()
    return {
      slug,
      title: data.title,
      date: data.date,
      content: contentHtml,
    }
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const postsDirectory = join(process.cwd(), 'content/blog')
  try {
    const files = await readdir(postsDirectory)
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({
        slug: file.replace('.md', ''),
      }))
  } catch {
    return []
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}

