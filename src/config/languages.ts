export const locales = ['en', 'zh'] as const
export const defaultLocale = 'en' as const

export type Locale = (typeof locales)[number]

export const languageNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
}

export const languageLabels: Record<Locale, string> = {
  en: 'EN',
  zh: '中',
}
