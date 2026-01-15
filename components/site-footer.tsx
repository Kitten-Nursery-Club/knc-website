import { NAV_LINKS } from "@/components/nav-links"
import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-[#d1d1d1] bg-primary text-black">
      <div className="m-auto flex max-w-6xl items-center flex-col gap-6 px-6 py-6">
        <nav className="flex flex-wrap items-center gap-4 text-xs font-heading md:gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs font-heading">Kitten Nursery Club &copy; {year}</p>
      </div>
    </footer>
  )
}
