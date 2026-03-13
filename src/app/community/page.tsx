import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl font-bold mb-8">Join the Community</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Connect with developers worldwide building the future of AI assistants.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'GitHub', desc: 'Star the repo and contribute' },
            { name: 'Twitter', desc: 'Follow for updates' },
            { name: 'Discord', desc: 'Join the discussion' },
          ].map((channel) => (
            <div key={channel.name} className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-2">{channel.name}</h3>
              <p className="text-gray-600">{channel.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
