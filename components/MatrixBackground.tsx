'use client'

import { useEffect, useState } from 'react'

export default function MatrixBackground() {
  const [columns, setColumns] = useState<number[]>([])

  useEffect(() => {
    const columnCount = Math.floor(window.innerWidth / 20)
    setColumns(Array.from({ length: columnCount }, (_, i) => i))
  }, [])

  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      {columns.map((col) => (
        <div
          key={col}
          className="absolute top-0 text-terminal-green text-xs"
          style={{
            left: `${col * 20}px`,
            animation: `matrix ${5 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="opacity-0 animate-[fadeIn_0.1s_ease-in_forwards]"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'forwards',
              }}
            >
              {chars[Math.floor(Math.random() * chars.length)]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

