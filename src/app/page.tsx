'use client'

import Link from 'next/link'
import { useTranslations } from '@/lib/i18n/client'
import { ArrowRight, BookOpen, Puzzle, Users, Sparkles } from 'lucide-react'

export default function HomePage() {
  const { t } = useTranslations('home')
  const { t: tc } = useTranslations('common')
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </div>
          
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
            <span className="text-accent"> {t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/docs/"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-light transition-all hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t('hero.primaryCta')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/skills/"
              className="flex items-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl hover:bg-primary/5 transition-all"
            >
              <Puzzle className="w-5 h-5" />
              <span>{t('hero.secondaryCta')}</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-paper rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{t('features.docs.title')}</h3>
              <p className="text-gray-600">{t('features.docs.description')}</p>
            </div>
            
            {/* Feature 2 */}
            <div className="group p-8 bg-paper rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Puzzle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{t('features.skills.title')}</h3>
              <p className="text-gray-600">{t('features.skills.description')}</p>
            </div>
            
            {/* Feature 3 */}
            <div className="group p-8 bg-paper rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{t('features.community.title')}</h3>
              <p className="text-gray-600">{t('features.community.description')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">{t('stats.docs')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('stats.skills')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('stats.users')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('stats.sync')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
