import { HomeSlider } from "@/components/home-slider"
import { fetchPageHtml } from "@/lib/api/fetch-page-html"

export const revalidate = 300

const HOME_PAGE_SLUG = "home-page"

type CmsContentProps = {
  html: string | null
}

function CmsContent({ html }: CmsContentProps) {
  if (!html) {
    return (
      <div className="text-white">
        <p>Home page content is not available right now.</p>
      </div>
    )
  }

  return (
    <div
      className="text-white [&>p]:mt-4 [&>h1]:text-2xl [&>h1]:leading-10 [&>h1]:py-8 [&>h2]:text-xl text-lg font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function Home() {
  const html = await fetchPageHtml(HOME_PAGE_SLUG, "home page")

  return (
    <main className="px-8 pb-20 space-y-10">
      <div className="mt-8">
        <HomeSlider />
      </div>
      <CmsContent html={html} />
    </main>
  )
}
