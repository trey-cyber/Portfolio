'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Terminal() {
  const [output, setOutput] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const commands = [
    'whoami',
    'cat about.txt',
    'ls -la skills/',
    'nmap -sV korax.digital',
  ]

  const handleCommand = (cmd: string) => {
    switch (cmd.toLowerCase()) {
      case 'whoami':
        return 'Philemon Sakpani (K0rh4cks) - Junior Penetration Tester'
      case 'cat about.txt':
        return 'Passionate cybersecurity professional specializing in penetration testing, bug bounty hunting, and security research.'
      case 'ls -la skills/':
        return 'web-pentesting/\nnetwork-pentesting/\nactive-directory/\nprivilege-escalation/\nbug-bounty/\npost-exploitation/'
      case 'nmap -sV korax.digital':
        return 'PORT     STATE SERVICE\n80/tcp   open  http\n443/tcp  open  https\nSecurity: Enhanced'
      default:
        return `Command not found: ${cmd}. Type 'help' for available commands.`
    }
  }

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < commands.length) {
        const cmd = commands[currentIndex]
        setInput(cmd)
        setTimeout(() => {
          setOutput((prev) => [...prev, `$ ${cmd}`, handleCommand(cmd)])
          setInput('')
          currentIndex++
        }, 2000)
      } else {
        clearInterval(interval)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border border-terminal-green/30 bg-terminal-bg/80 backdrop-blur-sm p-6 rounded-lg font-mono text-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-blue"></div>
        </div>
        <span className="text-terminal-green/60 ml-2">korax.digital</span>
      </div>
      <div className="space-y-1">
        {output.map((line, i) => (
          <div key={i} className="text-terminal-green">
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-terminal-cyan">root@korax</span>
          <span className="text-terminal-red">~</span>
          <span className="text-terminal-green">$</span>
          <span className="text-terminal-green">{input}</span>
          {showCursor && <span className="text-terminal-green animate-blink">█</span>}
        </div>
      </div>
    </div>
  )
}

