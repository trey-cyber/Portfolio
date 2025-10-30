'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-terminal-green/20 mt-20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-terminal-green/60 text-sm mb-4 md:mb-0">
            © 2025 K0rh4cks | Security Researcher & Penetration Tester
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/trey-cyber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green/60 hover:text-terminal-green transition-all hover:text-glow-sm"
            >
              <span className="text-terminal-cyan">&gt;</span> GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/philemon-sakpani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green/60 hover:text-terminal-green transition-all hover:text-glow-sm"
            >
              <span className="text-terminal-cyan">&gt;</span> LinkedIn
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-terminal-green/40 text-xs">
          <p className="font-mono">[root@korax.digital]# whoami</p>
          <p className="mt-1">Junior Penetration Tester | Bug Bounty Hunter | Security Enthusiast</p>
        </div>
      </div>
    </footer>
  )
}

