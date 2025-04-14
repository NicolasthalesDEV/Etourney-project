"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
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
        </div>

        {/* Desktop Links - Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
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

function NavDropdown({ title }: { title: string }) {
  return (
    <div className="relative group">
      <button className="flex items-center text-white/80 hover:text-white transition-colors font-medium">
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
    </div>
  )
}
