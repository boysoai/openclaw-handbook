'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, BookOpen, Puzzle, Users, Sparkles } from 'lucide-react'
import { en } from '@/content/en/home'
import { zh } from '@/content/zh/home'

const content: Record<string, any> = { en, zh }

export default function HomePageClient() {
  const [locale, setLocale] = useState('en')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    // 检测语言
    const saved = localStorage.getItem('locale')
    if (saved && content[saved]) {
      setLocale(saved)
    } else {
      const browser = navigator.language.split('-')[0]
      if (content[browser]) {
        setLocale(browser)
      }
    }
  }, [])
  
  const t = content[locale] || content.en
  const isZh = locale === 'zh'
  
  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en'
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
  }
  
  if (!mounted) {
    return <div className="min-h-screen bg-[#faf8f5]" />
  }
  
  return (
    <div className="min-h-screen">
      {/* Language Switcher */}
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={toggleLocale}
          className="px-4 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          {isZh ? 'English' : '中文'}
        </button>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/5 to-[#ff6b35]/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f]/10 rounded-full text-[#1e3a5f] text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.badge}</span>
          </div>
          
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            {t.hero.title}
            <span className="text-[#ff6b35]"> {t.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/docs/"
              className="flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white rounded-xl hover:bg-[#2d5a8a] transition-all hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/skills/"
              className="flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] rounded-xl hover:bg-[#1e3a5f]/5 transition-all"
            >
              <Puzzle className="w-5 h-5" />
              <span>{t.hero.secondaryCta}</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-[#faf8f5] rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{t.features.docs.title}</h3>
              <p className="text-gray-600">{t.features.docs.description}</p>
            </div>
            
            <div className="group p-8 bg-[#faf8f5] rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#ff6b35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Puzzle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{t.features.skills.title}</h3>
              <p className="text-gray-600">{t.features.skills.description}</p>
            </div>
            
            <div className="group p-8 bg-[#faf8f5] rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{t.features.community.title}</h3>
              <p className="text-gray-600">{t.features.community.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">{t.stats.docs}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t.stats.skills}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t.stats.users}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t.stats.sync}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
