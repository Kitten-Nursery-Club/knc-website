import apiClient from "./client"

interface WordpressPage {
  slug: string
  content?: {
    rendered?: string
  }
}

export async function fetchPageHtml(
  slug: string,
  context: string = "page"
): Promise<string | null> {
  try {
    const response = await apiClient.get<WordpressPage[]>("pages", {
      params: { slug },
    })

    const page = response.data.find((entry) => entry.slug === slug)
    const html = page?.content?.rendered

    if (!html) {
      return null
    }

    return html
  } catch (error) {
    console.error(`Failed to load ${context} content`, error)
    return null
  }
}
