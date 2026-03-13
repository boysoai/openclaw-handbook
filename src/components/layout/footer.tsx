'use client'

import Link from 'next/link'
import { useTranslations } from '@/lib/i18n/client'

export function Footer() {
  const { t } = useTranslations('common')
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦞</span>
              <span className="font-serif text-xl font-bold">OpenClaw Handbook</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              {t('footer.tagline')}
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/docs/" className="hover:text-white transition-colors">{t('nav.docs')}</Link></li>
              <li><Link href="/skills/" className="hover:text-white transition-colors">{t('nav.skills')}</Link></li>
              <li><a href="https://openclaw.ai" target="_blank" className="hover:text-white transition-colors">Official</a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.community')}</h3>
            <div className="flex gap-4">
              <a href="https://github.com/openclaw" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com/openclaw" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
