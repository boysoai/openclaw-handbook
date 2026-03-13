import { Locale, defaultLocale } from '@/config/languages'

export async function getLocaleFromHeaders(): Promise<Locale> {
  const { headers } = await import('next/headers')
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || '/'
  
  const locale = pathname.split('/')[1]
  if (['en', 'zh'].includes(locale)) {
    return locale as Locale
  }
  
  return defaultLocale
}

export async function getTranslations(locale: Locale, namespace: string) {
  try {
    const content = await import(`@/content/${locale}/${namespace}.json`)
    return content.default
  } catch (error) {
    const defaultContent = await import(`@/content/${defaultLocale}/${namespace}.json`)
    return defaultContent.default
  }
}
