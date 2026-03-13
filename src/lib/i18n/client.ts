'use client'

import { useParams, usePathname } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { Locale, defaultLocale, locales } from '@/config/languages'

export function useLocale(): Locale {
  const pathname = usePathname()
  const locale = pathname.split('/')[1]
  
  if (locales.includes(locale as Locale)) {
    return locale as Locale
  }
  
  return defaultLocale
}

export function useTranslations(namespace: string) {
  const locale = useLocale()
  
  const translations = useMemo(() => {
    if (typeof window === 'undefined') return {}
    return (window as any).__TRANSLATIONS__?.[namespace] || {}
  }, [namespace])
  
  const t = useCallback(
    (key: string) => {
      const keys = key.split('.')
      let value: any = translations
      
      for (const k of keys) {
        value = value?.[k]
      }
      
      return typeof value === 'string' ? value : key
    },
    [translations]
  )
  
  return { t, locale }
}

export function useChangeLocale() {
  const pathname = usePathname()
  const currentLocale = useLocale()
  
  const changeLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    
    let newPath: string
    
    if (currentLocale === defaultLocale) {
      newPath = `/${newLocale}${pathname}`
    } else if (newLocale === defaultLocale) {
      newPath = pathname.replace(`/${currentLocale}`, '') || '/'
    } else {
      newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    }
    
    window.location.href = newPath
  }
  
  return { changeLocale, currentLocale }
}
