import { Metadata } from 'next'
import { getLocaleFromHeaders, getTranslations } from '@/lib/i18n/server'
import { Search, Filter, Star, Download, MessageSquare, Github } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromHeaders()
  const common = await getTranslations(locale, 'common')
  return {
    title: common.nav.skills,
  }
}

// 模拟技能数据
const skills = [
  {
    id: 'frontend-design-ultimate',
    name: 'Frontend Design Ultimate',
    description: 'Create production-grade static sites with React + Tailwind CSS',
    descriptionZh: '使用 React + Tailwind CSS 创建生产级静态网站',
    author: 'kesslerio',
    category: 'Frontend',
    installs: 1250,
    rating: 4.8,
    reviews: 45,
    tags: ['react', 'tailwind', 'shadcn'],
  },
  {
    id: 'free-web-search',
    name: 'Free Web Search',
    description: 'Free web search using DuckDuckGo, no API key needed',
    descriptionZh: '免费网页搜索，使用 DuckDuckGo，无需 API Key',
    author: 'community',
    category: 'Tools',
    installs: 890,
    rating: 4.6,
    reviews: 32,
    tags: ['search', 'api', 'free'],
  },
  {
    id: 'twitter-api-client',
    name: 'Twitter API Client',
    description: 'Twitter/X API client with search and user data',
    descriptionZh: 'Twitter/X API 客户端，支持搜索和用户数据',
    author: 'community',
    category: 'Social',
    installs: 567,
    rating: 4.5,
    reviews: 28,
    tags: ['twitter', 'social', 'api'],
  },
  {
    id: 'pdf-processor',
    name: 'PDF Processor',
    description: 'Process PDF files with text extraction and manipulation',
    descriptionZh: '处理 PDF 文件，支持文本提取和操作',
    author: 'openclaw-team',
    category: 'Tools',
    installs: 2340,
    rating: 4.9,
    reviews: 89,
    tags: ['pdf', 'document', 'tools'],
  },
  {
    id: 'image-generator',
    name: 'AI Image Generator',
    description: 'Generate images using Flux and Stable Diffusion',
    descriptionZh: '使用 Flux 和 Stable Diffusion 生成图像',
    author: 'ai-tools',
    category: 'AI/ML',
    installs: 3420,
    rating: 4.7,
    reviews: 156,
    tags: ['ai', 'image', 'flux'],
  },
  {
    id: 'github-integration',
    name: 'GitHub Integration',
    description: 'Full GitHub API integration for repository management',
    descriptionZh: '完整的 GitHub API 集成，用于仓库管理',
    author: 'dev-tools',
    category: 'Developer',
    installs: 1890,
    rating: 4.8,
    reviews: 67,
    tags: ['github', 'git', 'developer'],
  },
]

const categories = [
  { id: 'all', name: 'All', nameZh: '全部' },
  { id: 'frontend', name: 'Frontend', nameZh: '前端' },
  { id: 'backend', name: 'Backend', nameZh: '后端' },
  { id: 'tools', name: 'Tools', nameZh: '工具' },
  { id: 'social', name: 'Social', nameZh: '社交' },
  { id: 'ai-ml', name: 'AI/ML', nameZh: 'AI/ML' },
  { id: 'developer', name: 'Developer', nameZh: '开发者' },
]

export default async function SkillsPage() {
  const locale = await getLocaleFromHeaders()
  const isZh = locale === 'zh'
  
  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            {isZh ? '技能市场' : 'Skills Marketplace'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {isZh 
              ? '发现社区创作的 OpenClaw 技能，扩展你的 AI 助手能力。'
              : 'Discover community-created OpenClaw skills to extend your AI assistant.'}
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={isZh ? '搜索技能...' : 'Search skills...'}
              className="w-full pl-12 pr-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            <span>{isZh ? '筛选' : 'Filter'}</span>
          </button>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 border hover:bg-gray-50'
              }`}
            >
              {isZh ? cat.nameZh : cat.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-white rounded-2xl border p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl">
                  🧩
                </div>
                <button className="text-gray-400 hover:text-accent transition-colors">
                  <Star className="w-5 h-5" />
                </button>
              </div>
              
              {/* Content */}
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {isZh ? skill.descriptionZh : skill.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {skill.installs.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {skill.reviews}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">{skill.rating}</span>
                </div>
              </div>
              
              {/* Author */}
              <div className="mt-4 flex items-center gap-2">
                <Github className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">@{skill.author}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border rounded-xl hover:bg-gray-50 transition-colors">
            {isZh ? '加载更多' : 'Load More'}
          </button>
        </div>
      </div>
    </div>
  )
}
