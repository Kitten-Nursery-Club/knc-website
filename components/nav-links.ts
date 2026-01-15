export type NavLink = {
  href: string
  label: string
}

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { href: "/adoption", label: "Adopt" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
] as const
