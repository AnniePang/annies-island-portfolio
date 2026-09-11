"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Leaf } from "@/components/acnh/decor"

const NAV_LINKS = [
  { href: "#roles", label: "Roles" },
  { href: "#experience", label: "Experience" },
  { href: "#ai", label: "AI Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating island nav bar -- a rounded panel rather than a full-width band */}
        <div
          className={`flex justify-between items-center gap-4 rounded-full px-4 sm:px-6 transition-all duration-300 ${
            isScrolled
              ? "bg-cream/90 dark:bg-slate-900/90 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700 shadow-[0_4px_0_0_rgba(140,115,60,0.25)] py-2"
              : "bg-cream/70 dark:bg-slate-900/70 backdrop-blur-sm border-2 border-transparent py-3"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-slate-900 dark:text-white">
            <Leaf className="w-6 h-6 text-leaf-500" />
            Annie Pang
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full font-semibold text-slate-700 hover:text-leaf-700 hover:bg-leaf-100 dark:text-slate-200 dark:hover:text-leaf-300 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <div className="hidden md:flex gap-1">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/annie-pang" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/AnniePang" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:annytianqipang@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu -- Nook-phone style app grid */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3"
        >
          <div className="acnh-panel p-5">
            <div className="grid grid-cols-2 gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 px-3 py-3 font-display font-bold text-slate-800 dark:text-slate-100 hover:bg-leaf-100 dark:hover:bg-slate-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Leaf className="w-4 h-4 text-leaf-500 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-2 pt-4 justify-center">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/annie-pang" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/AnniePang" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:annytianqipang@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
