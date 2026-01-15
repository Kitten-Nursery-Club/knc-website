import type { ComponentPropsWithRef } from "react"

export function Icon(props: ComponentPropsWithRef<"span">) {
  return (
    <span
      {...props}
      className={`material-symbols-rounded ${props.className ?? ""}`} />
  )
}
