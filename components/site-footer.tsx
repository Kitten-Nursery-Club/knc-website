import { NAV_LINKS } from "@/components/nav-links"
import Link from "next/link"
import { Icon } from "./icon"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-[#d1d1d1] pt-4 bg-primary text-black">
      <div className="m-auto max-w-md w-full p-4">
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col-reverse w-full items-center justify-center gap-4">
            <nav className="md:hidden flex gap-4 md:mt-4 w-full text-sm font-semibold">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex items-center justify-center w-full h-8 text-center hover:underline">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="md:hidden h-px w-full bg-black/50 mt-6" />
            <div className="grid grid-cols-2 grid-rows-2 md:flex md:flex-row justify-around w-full md:gap-8 gap-12 [&_a]:flex-col">
              <a
                className="flex items-center gap-2 md:text-sm font-semibold hover:opacity-75"
                href="https://linktr.ee/Kittennurseryclub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-2xl">public</Icon>
                <span>Linktree</span>
              </a>
              <a
                className="flex items-center gap-2 md:text-sm font-semibold hover:opacity-75"
                href="https://instagram.com/kittennurseryclub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-2xl">photo_camera</Icon>
                <span>Instagram</span>
              </a>
              <a
                className="flex items-center gap-2 md:text-sm font-semibold hover:opacity-75"
                href="https://www.petfinder.com/member/us/ca/canoga-park/kitten-nursery-club-ca2872/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-2xl">pets</Icon>
                <span>Petfinder</span>
              </a>
              <a
                className="flex items-center gap-2 md:text-sm font-semibold hover:opacity-75"
                href="https://www.adoptapet.com/adoption_rescue/186087-kitten-nursery-club-canoga-park-california#featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-2xl">pets</Icon>
                <span className="no-wrap">Adopt-A-Pet</span>
              </a>
            </div>
          </div>
          <p className="text-sm font-heading mt-4 text-center">Kitten Nursery Club &copy; {year}</p>
        </div>
      </div>
    </footer>
  )
}
