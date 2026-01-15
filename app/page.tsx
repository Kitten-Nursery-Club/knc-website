import { HomeSlider } from "@/components/home-slider"
import apiClient from "@/lib/api/client"

export const revalidate = 300

// Rendering trusted CMS HTML for home page content
interface WordpressPage {
  slug: string
  content?: {
    rendered?: string
  }
}

const HOME_PAGE_SLUG = "home-page"

async function fetchHomePageHtml(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL

  if (!baseUrl) {
    return null
  }

  try {
    const baseURL = baseUrl.replace(/\/$/, "")
    const response = await apiClient.get<WordpressPage[]>("/pages", {
      baseURL,
      params: { slug: HOME_PAGE_SLUG },
    })

    const page = response.data.find((entry) => entry.slug === HOME_PAGE_SLUG)
    const html = page?.content?.rendered

    if (!html) {
      return null
    }

    return html
  } catch (error) {
    console.error("Failed to load home page content", error)
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
        <p>Home page content is not available right now.</p>
      </div>
    )
  }

  return (
    <div
      className="text-white text-shadow-lg [&>p]:mt-4 wrap-break-word [&>h1]:text-4xl [&>h1]:leading-12 [&>h1]:py-8 [&>h2]:text-2xl text-lg font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function Home() {
  const html = await fetchHomePageHtml()

  return (
    <main className="px-8 pb-20 space-y-10">
      <div className="mt-8">
        <HomeSlider />
      </div>
      <CmsContent html={html} />
    </main>
  )
}
