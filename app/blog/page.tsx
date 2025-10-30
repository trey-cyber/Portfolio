import { readdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import BlogList from '@/components/BlogList'

async function getPosts() {
  const postsDirectory = join(process.cwd(), 'content/blog')
  try {
    const files = await readdir(postsDirectory)
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith('.md'))
        .map(async (file) => {
          const filePath = join(postsDirectory, file)
          const { readFileSync } = await import('fs')
          const fileContents = readFileSync(filePath, 'utf8')
          const { data } = matter(fileContents)
          return {
            slug: file.replace('.md', ''),
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
          }
        })
    )
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return <BlogList posts={posts} />
}

