import { Button } from "@/components/button"
import { fetchPageHtml } from "@/lib/api/fetch-page-html"
import type { Metadata } from "next"
export const revalidate = 300

export const metadata: Metadata = {
  title: "Kitten Nursery Club | Contact"
}

const CONTACT_PAGE_SLUG = "contact"

type CmsContentProps = {
  html: string | null
}

function CmsContent({ html }: CmsContentProps) {
  if (!html) {
    return (
      <div className="text-white">
        <p>Contact information is not available right now.</p>
      </div>
    )
  }

  return (
    <div
      className="text-white [&>p]:mt-4 wrap-break-word [&>h1]:text-4xl [&>h1]:leading-12 [&_figure]:mt-8 [&_hr]:my-8 [&_figure]:border-2 [&_figure]:border-[#d1d1d1] leading-8 [&_ol]:px-4 [&_ol]:md:px-8 [&>ol]:m-auto [&_li]:mt-4 [&_*.has-text-align-center]:text-center [&>ol>li]:leading-10 [&>ol]:list-decimal [&>h1]:py-8 [&>h3]:mt-8 [&>h2]:text-2xl text-lg font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function ContactPage() {
  const html = await fetchPageHtml(CONTACT_PAGE_SLUG, "contact page")

  return (
    <main className="px-8 pb-20 min-h-screen space-y-10">
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          className="block cursor-pointer"
          href="mailto:kittennurseryclubsfv@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-8 bg-amber-200">EMAIL US!</Button>
        </a>
      </div>
      <CmsContent html={html} />
    </main>
  )
}
