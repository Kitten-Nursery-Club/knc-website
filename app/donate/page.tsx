import { Button } from "@/components/button"
import { fetchPageHtml } from "@/lib/api/fetch-page-html"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kitten Nursery Club | Donate"
}

export const revalidate = 300

const DONATE_PAGE_SLUG = "donate"

type CmsContentProps = {
  html: string | null
}

function CmsContent({ html }: CmsContentProps) {
  if (!html) {
    return (
      <div className="text-white">
        <p>Donate information is not available right now.</p>
      </div>
    )
  }

  return (
    <div
      className="text-white [&_p:first-of-type]:mt-8 [&_p]:mt-4 [&_figure]:mt-8 wrap-break-word [&>h1]:text-4xl [&>h1]:leading-12 [&_hr]:my-8 [&_figure]:border-2 [&_figure]:border-[#d1d1d1] leading-8 [&_*.has-text-align-center]:text-center [&>h1]:py-8 [&>h3]:mt-8 [&>h2]:text-2xl text-lg font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function DonatePage() {
  const html = await fetchPageHtml(DONATE_PAGE_SLUG, "donate page")

  return (
    <main className="px-8 pb-20 min-h-screen space-y-10">
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          className="block cursor-pointer"
          href="https://checkout.shelterluv.com/donate/knc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-8 bg-red-300">DONATE HERE!</Button>
        </a>
      </div>
      <CmsContent html={html} />
    </main>
  )
}
