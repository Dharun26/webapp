"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "border-b border-gray-200 bg-white/80 backdrop-blur-md" : "bg-white",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold tracking-tight text-transparent">
            GetXCloud
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
          <NavLink href="/" active={activeLink === "/"}>
            Home
          </NavLink>

          <NavLink href="/services" active={activeLink === "/services"}>
            Services
          </NavLink>

          <NavLink href="/consulting" active={activeLink === "/consulting"}>
            Book a Free Consulting
          </NavLink>

          <NavLink href="/about" active={activeLink === "/about"}>
            About
          </NavLink>

          <NavLink href="/contact" active={activeLink === "/contact"}>
            Contact
          </NavLink>
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isMenuOpen ? "max-h-[400px]" : "max-h-0",
        )}
      >
        <div className="space-y-1 px-4 pb-5 pt-2 sm:px-3">
          <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavLink>

          <MobileNavLink href="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </MobileNavLink>

          <MobileNavLink href="/consulting" onClick={() => setIsMenuOpen(false)}>
            Book a Free Consulting
          </MobileNavLink>

          <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </MobileNavLink>

          <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </MobileNavLink>
        </div>
      </div>
    </header>
  )
}

// Desktop navigation link component
function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
        active ? "bg-gray-100 text-black" : "text-gray-700 hover:bg-gray-50 hover:text-black",
      )}
    >
      {children}
      {active && <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-1/2 bg-gray-900" />}
    </Link>
  )
}

// Mobile navigation link component
function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-black"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
