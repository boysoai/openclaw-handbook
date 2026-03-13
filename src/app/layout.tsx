import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getLocaleFromHeaders, getTranslations } from '@/lib/i18n/server'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromHeaders()
  const common = await getTranslations(locale, 'common')
  
  return {
    title: {
      default: common.meta.siteName,
      template: `%s | ${common.meta.siteName}`,
    },
    description: common.meta.siteDescription,
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocaleFromHeaders()
  const common = await getTranslations(locale, 'common')
  const home = await getTranslations(locale, 'home')
  
  const translations = { common, home }
  
  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__TRANSLATIONS__ = ${JSON.stringify(translations)};`,
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
