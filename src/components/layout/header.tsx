'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BookOpen, Puzzle, Users } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="font-serif text-xl font-bold text-[#1e3a5f]">OpenClaw</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/docs/" className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a5f]">
              <BookOpen className="w-4 h-4" />
              <span>Docs</span>
            </Link>
            <Link href="/skills/" className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a5f]">
              <Puzzle className="w-4 h-4" />
              <span>Skills</span>
            </Link>
            <Link href="/community/" className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a5f]">
              <Users className="w-4 h-4" />
              <span>Community</span>
            </Link>
          </nav>
          
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link href="/docs/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Docs</Link>
            <Link href="/skills/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link href="/community/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Community</Link>
          </div>
        </div>
      )}
    </header>
  )
}
