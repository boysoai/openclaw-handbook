'use client'

import Link from 'next/link'
import { useTranslations, useChangeLocale } from '@/lib/i18n/client'
import { useLocale, languageLabels } from '@/lib/i18n/client'
import { Menu, X, BookOpen, Puzzle, Users } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { t } = useTranslations('common')
  const locale = useLocale()
  const { changeLocale } = useChangeLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { href: '/docs/', icon: BookOpen, label: t('nav.docs') },
    { href: '/skills/', icon: Puzzle, label: t('nav.skills') },
    { href: '/community/', icon: Users, label: t('nav.community') },
  ]
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="font-serif text-xl font-bold text-primary">
              OpenClaw
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          
          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              {(['en', 'zh'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => changeLocale(l)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    locale === l
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {languageLabels[l]}
                </button>
              ))}
            </div>
            
            <button className="hidden sm:block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-sm">
              {t('nav.login')}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-3 border-t">
              {(['en', 'zh'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    changeLocale(l)
                    setIsMenuOpen(false)
                  }}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    locale === l
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {languageLabels[l]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
