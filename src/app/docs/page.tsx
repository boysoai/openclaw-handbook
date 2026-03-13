import { Metadata } from 'next'
import { getLocaleFromHeaders, getTranslations } from '@/lib/i18n/server'
import { BookOpen, Terminal, Settings, Puzzle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromHeaders()
  const common = await getTranslations(locale, 'common')
  return {
    title: common.nav.docs,
  }
}

const docSections = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    titleZh: '入门指南',
    items: [
      { title: 'What is OpenClaw', titleZh: '什么是 OpenClaw', href: '/docs/intro/' },
      { title: 'Installation', titleZh: '安装指南', href: '/docs/install/' },
      { title: 'Quick Start', titleZh: '快速开始', href: '/docs/quickstart/' },
    ],
  },
  {
    icon: Terminal,
    title: 'Core Concepts',
    titleZh: '核心概念',
    items: [
      { title: 'Architecture', titleZh: '架构设计', href: '/docs/architecture/' },
      { title: 'Skills System', titleZh: 'Skills 系统', href: '/docs/skills-system/' },
      { title: 'Memory', titleZh: 'Memory 机制', href: '/docs/memory/' },
    ],
  },
  {
    icon: Settings,
    title: 'Configuration',
    titleZh: '配置',
    items: [
      { title: 'Basic Config', titleZh: '基础配置', href: '/docs/config/' },
      { title: 'Environment', titleZh: '环境变量', href: '/docs/env/' },
      { title: 'Gateway', titleZh: 'Gateway 配置', href: '/docs/gateway/' },
    ],
  },
  {
    icon: Puzzle,
    title: 'Development',
    titleZh: '开发',
    items: [
      { title: 'Create Skill', titleZh: '创建 Skill', href: '/docs/create-skill/' },
      { title: 'Best Practices', titleZh: '最佳实践', href: '/docs/best-practices/' },
    ],
  },
]

export default async function DocsPage() {
  const locale = await getLocaleFromHeaders()
  const isZh = locale === 'zh'
  
  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            {isZh ? '文档' : 'Documentation'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {isZh 
              ? '从安装到精通，完整的 OpenClaw 学习指南。'
              : 'Complete guide for OpenClaw, from installation to mastery.'}
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {docSections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-xl font-bold">
                  {isZh ? section.titleZh : section.title}
                </h2>
              </div>
              
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-primary">
                        {isZh ? item.titleZh : item.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Quick Start CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">
            {isZh ? '准备好开始了吗？' : 'Ready to get started?'}
          </h3>
          <p className="mb-6 opacity-90">
            {isZh ? '5 分钟快速上手 OpenClaw' : 'Get started with OpenClaw in 5 minutes'}
          </p>
          <Link 
            href="/docs/quickstart/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {isZh ? '快速开始' : 'Quick Start'}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
