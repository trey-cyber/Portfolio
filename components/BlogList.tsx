'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="min-h-screen pt-16 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-4 text-terminal-green text-glow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-terminal-cyan">[root@korax]</span># cat blog/
        </motion.h1>
        <motion.p
          className="text-terminal-green/80 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Security research, pentesting writeups, and cybersecurity insights.
        </motion.p>

        {posts.length === 0 ? (
          <motion.div
            className="border border-terminal-green/30 bg-terminal-bg/80 p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-terminal-green/60">
              <span className="text-terminal-cyan">$</span> ls blog/
            </p>
            <p className="text-terminal-green/60 mt-2">No posts found. Coming soon...</p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="border border-terminal-green/30 bg-terminal-bg/80 p-6 hover:border-terminal-green/60 transition-all hover:bg-terminal-green/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-terminal-cyan text-2xl font-bold mb-2 hover:text-terminal-green transition-all">
                    {post.title}
                  </h2>
                  <p className="text-terminal-green/60 text-sm mb-3">
                    <span className="text-terminal-cyan">$</span> date: {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-terminal-green/80">{post.excerpt}</p>
                  <p className="text-terminal-green/60 text-sm mt-4 flex items-center gap-2">
                    Read more <span className="text-terminal-cyan">→</span>
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

