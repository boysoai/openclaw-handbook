import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills Marketplace',
}

export default function SkillsPage() {
  const skills = [
    { name: 'Frontend Design Ultimate', category: 'Frontend', installs: 1250 },
    { name: 'Free Web Search', category: 'Tools', installs: 890 },
    { name: 'Twitter API Client', category: 'Social', installs: 567 },
  ]
  
  return (
    <div className="min-h-screen bg-[#faf8f5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8">Skills Marketplace</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-xl flex items-center justify-center text-white text-xl mb-4">
                🧩
              </div>
              <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{skill.category}</p>
              <p className="text-sm text-gray-500">{skill.installs} installs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
