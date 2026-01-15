import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
  }
>

const baseButtonClasses =
  "inline-flex font-heading items-center cursor-pointer justify-center bg-[#d1d1d1] p-2 text-black shadow-[-2px_-2px_0px_#d1d1d1,2px_2px_2px_#000] hover:bg-gray-100 transition-all duration-200"

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
