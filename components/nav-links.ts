export type NavLink = {
  href: string
  label: string
}

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { href: "/adoption", label: "Adopt" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support" },
] as const
