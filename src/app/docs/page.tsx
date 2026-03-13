import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8">Documentation</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {['Getting Started', 'Core Concepts', 'Configuration', 'Development'].map((section) => (
            <div key={section} className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h2 className="font-bold text-xl mb-4">{section}</h2>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
