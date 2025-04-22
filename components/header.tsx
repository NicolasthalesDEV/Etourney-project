"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Gamepad2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50)
      }
    }

    // Executa no client
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // já aplica de imediato

      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-full">
              <Gamepad2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Etourney</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
          <Link
            href="/landing"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-5 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm"
          >
            Become an Investor
            <ChevronDown className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-900">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
              <Link
                href="/landing"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-5 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm"
              >
                Become an Investor
                <ChevronDown className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>

  )
}


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/80 hover:text-white transition-colors font-medium">
      {children}
    </Link>
  )
}
