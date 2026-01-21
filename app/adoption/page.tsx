import { Button } from "@/components/button"
import { fetchPageHtml } from "@/lib/api/fetch-page-html"
import type { Metadata } from "next"

export const revalidate = 300

export const metadata: Metadata = {
  title: "Kitten Nursery Club | Adoption"
}

const ADOPTION_PAGE_SLUG = "kncs-adoption-process"

type CmsContentProps = {
  html: string | null
}

function CmsContent({ html }: CmsContentProps) {
  if (!html) {
    return (
      <div className="text-white">
        <p>Adoption information is not available right now.</p>
      </div>
    )
  }

  return (
    <div
      className="text-white [&>p]:mt-4 wrap-break-word [&>h1]:text-4xl [&>h1]:leading-12 [&_hr]:my-8 [&_figure]:border-2 [&_figure]:border-[#d1d1d1] leading-8 [&_ol]:px-4 [&_ol]:md:px-8 [&>ol]:m-auto [&_li]:mt-4 [&_*.has-text-align-center]:text-center [&>ol>li]:leading-10 [&>ol]:list-decimal [&>h1]:py-8 [&>h3]:mt-8 [&>h2]:text-2xl text-lg font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function AdoptionPage() {
  const html = await fetchPageHtml(ADOPTION_PAGE_SLUG, "adoption page")

  return (
    <main className="px-8 pb-20 min-h-screen space-y-10">
      <div className="flex flex-col md:flex-row mt-8 items-center justify-center gap-4 [&_a]:block">
        <a href="https://www.petfinder.com/member/us/ca/canoga-park/kitten-nursery-club-ca2872/" target="_blank" rel="noopener noreferrer">
          <Button className="px-8 bg-blue-200">PETFINDER PAGE!</Button>
        </a>

        <a href="https://www.adoptapet.com/adoption_rescue/186087-kitten-nursery-club-canoga-park-california#featured" target="_blank" rel="noopener noreferrer">
          <Button className="px-8 bg-yellow-200">ADOPT-A-PET PAGE!</Button>
        </a>
      </div>
      <CmsContent html={html} />
      <div className="mt-4 flex justify-center items-center">
        <a className="block cursor-pointer" href="https://www.shelterluv.com/matchme/adopt/KNC/Cat" target="_blank" rel="noopener noreferrer">
          <Button className="px-8">ADOPTION APPLICATION</Button>
        </a>
      </div>
    </main>
  )
}
