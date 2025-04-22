import type React from "react"
import Link from "next/link"
import { ArrowRight, ChevronUp, Gamepad2, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-purple-900/30 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-full">
                <Gamepad2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Etourney</span>
            </div>
            <p className="text-light-900 mb-4">
              Join us in revolutionizing the esports industry with our advanced platform for tournaments and
              competitions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-light-900 hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/landing"
                  className="text-light-900 hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  Become an Investor
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-light-900 hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-light-900 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-light-900 hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-light-900 hover:text-purple-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-900 text-sm">
            &copy; {new Date().getFullYear()} Etourney Esports Enablement. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-light-900 hover:text-purple-400 transition-colors"
            >
              Back to top
              <ChevronUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-purple-200 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="text-purple-200 hover:text-white transition-colors">
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  )
}
