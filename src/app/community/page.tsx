import { Metadata } from 'next'
import { getLocaleFromHeaders } from '@/lib/i18n/server'
import { Users, MessageCircle, Github, Twitter, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromHeaders()
  return {
    title: locale === 'zh' ? '社区' : 'Community',
  }
}

const stats = [
  { label: 'Community Members', labelZh: '社区成员', value: '1,000+' },
  { label: 'Contributors', labelZh: '贡献者', value: '100+' },
  { label: 'Skills Created', labelZh: '创建技能', value: '200+' },
  { label: 'GitHub Stars', labelZh: 'GitHub Stars', value: '240K+' },
]

const channels = [
  {
    icon: Github,
    name: 'GitHub',
    description: 'Star the repo, report issues, contribute code',
    descriptionZh: 'Star 仓库、提交问题、贡献代码',
    href: 'https://github.com/openclaw',
    color: 'bg-gray-900',
  },
  {
    icon: Twitter,
    name: 'Twitter / X',
    description: 'Follow for updates, tips, and community highlights',
    descriptionZh: '关注获取更新、技巧和社区亮点',
    href: 'https://twitter.com/openclaw',
    color: 'bg-blue-500',
  },
  {
    icon: MessageCircle,
    name: 'Discord',
    description: 'Join discussions, get help, share your projects',
    descriptionZh: '参与讨论、获取帮助、分享项目',
    href: 'https://discord.gg/openclaw',
    color: 'bg-indigo-500',
  },
]

export default async function CommunityPage() {
  const locale = await getLocaleFromHeaders()
  const isZh = locale === 'zh'
  
  return (
    <div className="min-h-screen bg-paper">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">
            {isZh ? '加入社区' : 'Join the Community'}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {isZh 
              ? '与全球开发者一起构建 AI 助手的未来。'
              : 'Build the future of AI assistants with developers worldwide.'}
          </p>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{isZh ? stat.labelZh : stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          {isZh ? '连接我们' : 'Connect With Us'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${channel.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <channel.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">{channel.name}</h3>
              <p className="text-gray-600 mb-4">
                {isZh ? channel.descriptionZh : channel.description}
              </p>
              <div className="flex items-center text-primary font-medium">
                <span>{isZh ? '加入' : 'Join'}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Contribute CTA */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-paper rounded-2xl p-8 md:p-12 text-center">
            <Heart className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold mb-4">
              {isZh ? '贡献你的力量' : 'Contribute'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {isZh 
                ? 'OpenClaw 是开源项目，欢迎各种形式的贡献：代码、文档、设计、翻译。'
                : 'OpenClaw is open source. We welcome contributions of all kinds: code, docs, design, translations.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://github.com/openclaw/openclaw/blob/main/CONTRIBUTING.md"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>{isZh ? '贡献指南' : 'Contributing Guide'}</span>
              </a>
              <Link 
                href="/docs/create-skill/"
                className="flex items-center gap-2 px-6 py-3 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span>{isZh ? '创建 Skill' : 'Create a Skill'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
