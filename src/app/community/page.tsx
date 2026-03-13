import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-paper py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8">Community</h1>
        <p className="text-gray-600 text-lg">
          Join the OpenClaw community. Coming soon...
        </p>
      </div>
    </div>
  )
}
