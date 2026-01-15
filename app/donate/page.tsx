import { Button } from "@/components/button"
import apiClient from "@/lib/api/client"

export const revalidate = 300

interface WordpressPage {
  slug: string
  content?: {
    rendered?: string
  }
}

const DONATE_PAGE_SLUG = "donate"

async function fetchDonatePageHtml(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL

  if (!baseUrl) {
    return null
  }

  try {
    const baseURL = baseUrl.replace(/\/$/, "")
    const response = await apiClient.get<WordpressPage[]>("/pages", {
      baseURL,
      params: { slug: DONATE_PAGE_SLUG },
    })

    const page = response.data.find((entry) => entry.slug === DONATE_PAGE_SLUG)
    const html = page?.content?.rendered

    if (!html) {
      return null
    }

    return html
  } catch (error) {
    console.error("Failed to load donate page content", error)
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
        <p>Donate information is not available right now.</p>
      </div>
    )
  }

  return (
    <div
      className="text-white text-shadow-lg [&_p:first-of-type]:mt-8 [&_p]:mt-4 [&_figure]:mt-8 wrap-break-word [&>h1]:text-4xl [&>h1]:leading-12 [&_hr]:my-8 [&_figure]:border-2 [&_figure]:border-[#d1d1d1] leading-8 [&_*.has-text-align-center]:text-center [&>h1]:py-8 [&>h3]:mt-8 [&>h2]:text-2xl text-lg font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function DonatePage() {
  const html = await fetchDonatePageHtml()

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
