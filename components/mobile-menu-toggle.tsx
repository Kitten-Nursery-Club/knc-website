import { Button, buttonBaseClasses } from "@/components/button"
import { Icon } from "@/components/icon"

export const mobileMenuSurfaceClasses = "bg-[#666] text-black shadow-[-2px_-2px_0px_#d1d1d1,2px_2px_2px_#000]"

export type MobileMenuToggleProps = {
  open: boolean
  onToggle: () => void
}

export function MobileMenuToggle({ open, onToggle }: MobileMenuToggleProps) {
  return (
    <Button
      type="button"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
      onClick={onToggle}
    >
      <Icon>{open ? "close" : "menu"}</Icon>
    </Button>
  )
}

export const mobileMenuButtonClasses = buttonBaseClasses
