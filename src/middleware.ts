import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './config/languages'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) {
    return NextResponse.next()
  }
  
  const locale = detectLocale(request)
  
  if (locale === defaultLocale) {
    return NextResponse.next()
  } else {
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }
}

function detectLocale(request: NextRequest): string {
  const localeCookie = request.cookies.get('NEXT_LOCALE')
  if (localeCookie && locales.includes(localeCookie.value as any)) {
    return localeCookie.value
  }
  
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',')[0].split('-')[0]
    if (locales.includes(preferred as any)) {
      return preferred
    }
  }
  
  return defaultLocale
}

export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
}
