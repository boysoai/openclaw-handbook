import { Metadata } from 'next'
import HomePageClient from './page-client'

export const metadata: Metadata = {
  title: 'OpenClaw Handbook - Complete Guide & Skills Marketplace',
  description: 'From installation to mastery, build your AI assistant. Official docs, skills marketplace, and community.',
}

export default function HomePage() {
  return <HomePageClient />
}
