import { Button } from "@/components/button"
import apiClient from "@/lib/api/client"

export const revalidate = 300

interface WordpressPage {
  slug: string
  content?: {
    rendered?: string
  }
}

const VOLUNTEER_PAGE_SLUG = "volunteer"

async function fetchVolunteerPageHtml(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL

  if (!baseUrl) {
    return null
  }

  try {
    const baseURL = baseUrl.replace(/\/$/, "")
    const response = await apiClient.get<WordpressPage[]>("/pages", {
      baseURL,
      params: { slug: VOLUNTEER_PAGE_SLUG },
    })

    const page = response.data.find((entry) => entry.slug === VOLUNTEER_PAGE_SLUG)
    const html = page?.content?.rendered

    if (!html) {
      return null
    }

    return html
  } catch (error) {
    console.error("Failed to load volunteer page content", error)
    return null
  }
}

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
      className="text-white text-shadow-lg [&>p]:mt-4 wrap-break-word [&>h1]:text-4xl [&>h1]:leading-12 [&_hr]:my-8 [&_figure_img]:object-cover [&_figure_img]:w-full [&_figure]:max-w-sm [&_figure]:my-12 [&_figure]:m-auto [&_figure]:border-2 [&_figure]:border-[#d1d1d1] leading-8 [&_ol]:px-4 [&_ol]:md:px-8 [&>ol]:m-auto [&_li]:mt-4 [&_*.has-text-align-center]:text-center [&>ol>li]:leading-10 [&>ol]:list-decimal [&>h1]:py-8 [&>h3]:mt-8 [&>h2]:text-2xl text-lg font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function VolunteerPage() {
  const html = await fetchVolunteerPageHtml()

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
