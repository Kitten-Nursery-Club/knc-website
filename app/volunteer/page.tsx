import { Button } from "@/components/button"
import { fetchPageHtml } from "@/lib/api/fetch-page-html"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kitten Nursery Club | Volunteer"
}

export const revalidate = 300

const VOLUNTEER_PAGE_SLUG = "volunteer"

type CmsContentProps = {
  html: string | null
}

function CmsContent({ html }: CmsContentProps) {
  if (!html) {
    return (
      <div className="text-white">
        <p>Volunteer information is not available right now.</p>
      </div>
    )
  }

  return (
    <div
      className="text-white [&>p]:mt-4 wrap-break-word [&>h1]:text-4xl [&>h1]:leading-12 [&_hr]:my-8 [&_figure_img]:object-cover [&_figure_img]:w-full [&_figure]:max-w-sm [&_figure]:my-12 [&_figure]:m-auto [&_figure]:border-2 [&_figure]:border-[#d1d1d1] leading-8 [&_ol]:px-4 [&_ol]:md:px-8 [&>ol]:m-auto [&_li]:mt-4 [&_*.has-text-align-center]:text-center [&>ol>li]:leading-10 [&>ol]:list-decimal [&>h1]:py-8 [&>h3]:mt-8 [&>h2]:text-2xl text-lg font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function VolunteerPage() {
  const html = await fetchPageHtml(VOLUNTEER_PAGE_SLUG, "volunteer page")

  return (
    <main className="px-8 pb-20 min-h-screen space-y-10">
      <CmsContent html={html} />
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <a
          className="block cursor-pointer"
          href="https://www.shelterluv.com/matchme/foster/KNC/cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-8">FOSTER APPLICATION</Button>
        </a>
      </div>
    </main>
  )
}
