import type React from "react"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-purple-900/80 to-fuchsia-800/70 backdrop-blur-md text-white py-12 overflow-hidden border-t-2 border-purple-700/60">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L16.5 7.5M12 3L7.5 7.5M12 3V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M16 11L19 14L16 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 11L5 14L8 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="16" r="1.5" fill="currentColor" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">Etourney</span>
            </Link>
            <p className="mb-4 text-purple-200">Esports - Anyone, anywhere, anytime!</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 bg-purple-800/60 p-2 rounded-md inline-block">Quick links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home page</FooterLink>
              <FooterLink href="/contact">Contact us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 bg-purple-800/60 p-2 rounded-md inline-block">Get in touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-fuchsia-400" />
                <span className="text-purple-100">4014 148th Ave NE, Redmond, WA 98052</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-fuchsia-400" />
                <span className="text-purple-100">+1 (425) 371-2373</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-700/60 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-white font-bold bg-gradient-to-r from-fuchsia-500 to-purple-700 bg-clip-text text-transparent"
            >
              Etourney
            </Link>
          </div>
          <div>
            <p className="text-sm text-purple-200">
              &copy; {new Date().getFullYear()} Etourney, Inc. All rights reserved.
            </p>
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
