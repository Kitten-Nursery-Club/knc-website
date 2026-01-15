import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"
import { Press_Start_2P, Sofia_Sans } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Kitten Nursery Club",
  description: "A GRASSROOTS EFFORT SAVING HOMELESS & EUTHANIZATION-LISTED KITTENS FROM THE STREETS & SHELTERS  OF SoCAL",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=block" rel="stylesheet" />
      </head>
      <body className={`${sofiaSans.variable} ${pressStart.variable} antialiased`}>
        <Providers>
          <SiteHeader />
          <div className="border-2 border-[#d1d1d1] min-h-screen">
            <div className="m-auto max-w-3xl">
              {children}
            </div>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
