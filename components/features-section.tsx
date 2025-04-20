import { Trophy, Award, Share } from "lucide-react"

const features = [
  {
    icon: <Trophy className="h-10 w-10 text-white" />,
    title: "Conveniently participate in Esports Tournaments online",
  },
  {
    icon: <Award className="h-10 w-10 text-white" />,
    title: "Win money and prizes playing their favorite video games",
  },
  {
    icon: <Share className="h-10 w-10 text-white" />,
    title: "Share achievements with other gamers who share the same interests",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Original Mission Section */}
        <div className="text-center mb-6 bg-purple-800/60 backdrop-blur-md p-4 rounded-xl border-2 border-purple-700/60 shadow-lg mx-auto transform hover:scale-[1.02] transition-transform">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1 inline-block">
            Gamers love the Etourney platform because:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-800/50 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:bg-purple-700/60 transition-all relative border border-purple-700/50"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-0.5">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
