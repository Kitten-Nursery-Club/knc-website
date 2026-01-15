"use client"

import { MobileMenuToggle, mobileMenuSurfaceClasses } from "@/components/mobile-menu-toggle"
import { NAV_LINKS } from "@/components/nav-links"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#9b7cb0] border-2 border-[#d1d1d1] text-black">
      <div className="m-auto max-w-6xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/KNC Logo.png"
                alt="KNC Logo"
                width={120}
                height={48}
                priority
                className="h-16 w-16"
              />
              <span className="hidden text-lg font-heading md:inline">KNC</span>
            </Link>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-heading md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative md:hidden">
            <MobileMenuToggle open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />

            {menuOpen ? (
              <div
                className={`absolute right-0 top-full mt-2 min-w-[180px] ${mobileMenuSurfaceClasses}`}
              >
                <nav className="flex flex-col divide-y divide-black/10 font-heading text-sm">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 hover:bg-black/10"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ) : null}
          </div>
        </div>

      </div>
    </header>
  )
}
