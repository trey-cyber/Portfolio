'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Post {
  slug: string
  title: string
  date: string
  content: string
}

export default function BlogPost({ post }: { post: Post }) {
  return (
    <div className="min-h-screen pt-16 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="text-terminal-green/60 hover:text-terminal-green mb-8 inline-block transition-all"
        >
          <span className="text-terminal-cyan">←</span> Back to blog
        </Link>

        <motion.article
          className="border border-terminal-green/30 bg-terminal-bg/80 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-terminal-green text-glow-sm">
            {post.title}
          </h1>
          <p className="text-terminal-green/60 text-sm mb-8">
            <span className="text-terminal-cyan">$</span> date: {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <div
            className="prose prose-invert max-w-none prose-headings:text-terminal-green prose-headings:text-glow-sm prose-p:text-terminal-green/80 prose-a:text-terminal-cyan prose-a:hover:text-terminal-green prose-strong:text-terminal-green prose-code:text-terminal-green prose-code:bg-terminal-bg prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-terminal-bg prose-pre:border prose-pre:border-terminal-green/30"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </div>
    </div>
  )
}

