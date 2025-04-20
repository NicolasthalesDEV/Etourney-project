import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesSectionDuplicate2() {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mx-auto bg-purple-800/60 backdrop-blur-md p-4 rounded-xl border-2 border-purple-700/60 shadow-xl">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 bg-purple-900/80 p-4 rounded-md inline-block">
            Questions?
          </h2>

          {/* Description */}
          <p className="text-lg text-white font-medium mb-4 leading-relaxed">
            Join thousands of game developers who are already using Etourney to power their esports tournaments and
            increase player engagement
          </p>

          {/* Button */}
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-500 to-purple-700 hover:from-fuchsia-600 hover:to-purple-800 text-white font-bold py-2 px-6 rounded-lg text-lg shadow-lg transform transition-transform hover:scale-105"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
