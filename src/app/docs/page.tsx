import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-paper py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8">Documentation</h1>
        <p className="text-gray-600 text-lg">
          Complete guide for OpenClaw. Coming soon...
        </p>
      </div>
    </div>
  )
}
