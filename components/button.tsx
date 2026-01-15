import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
  }
>

const baseButtonClasses =
  "inline-flex items-center justify-center bg-[#666] p-2 text-black text-6xl shadow-[-2px_-2px_0px_#d1d1d1,2px_2px_2px_#000]"

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${baseButtonClasses}${className ? ` ${className}` : ""}`.trim()}
    >
      {children}
    </button>
  )
}

export const buttonBaseClasses = baseButtonClasses
