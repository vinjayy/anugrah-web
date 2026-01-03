"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Layanan", href: "/layanan" },
    { name: "Kontak", href: "/kontak" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-18 w-18">
            <Image
              src="/anugrah.png"
              alt="Anugrah Web"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <div className="text-lg font-bold text-slate-950">
              PT. Anugrah Cipta Equipment
            </div>
            <div className="text-xs text-slate-600">
              Heavy equipment & Labor services
            </div>
          </div>

          <div className="sm:hidden">
            <div className="text-base font-bold text-slate-950">
              Anugrah Cipta Equipment
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-amber-600",
                pathname === item.href ? "text-amber-600" : "text-slate-700",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold">
            <a
              href="https://wa.me/6282114412026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200">
          <div className="space-y-1 px-6 pb-6 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-semibold transition-colors",
                  pathname === item.href
                    ? "bg-amber-50 text-amber-600"
                    : "text-slate-700 hover:bg-slate-50",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4">
              <Button className="w-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold">
                <a
                  href="https://wa.me/6282114412026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
