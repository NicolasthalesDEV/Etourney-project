import { Code, DollarSign, Users } from "lucide-react"

export default function DeveloperBenefitsSection() {
  const benefits = [
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Easy Integration",
      description: "They can easily enable their games for online eSports Tournaments",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-white" />,
      title: "Monetization",
      description: "Make money when throwing tournaments",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Player Engagement",
      description: "Increase player engagement by throwing special tournaments offering cash and prizes",
    },
  ]

  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-6 bg-purple-800/60 backdrop-blur-md p-4 rounded-xl border-2 border-purple-700/60 shadow-lg mx-auto transform hover:scale-[1.02] transition-transform">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1 inline-block">
            Game Developers Love The Etourney Platform Because:
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-purple-800/50 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:bg-purple-700/60 transition-all relative border border-purple-700/50"
            >
              <div className="mb-2">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-0.5">{benefit.title}</h3>
              <p className="text-white/90">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
