import axios from "axios"

const WC_API_URL = process.env.NEXT_PUBLIC_WP_BASE_URL?.replace(/\/$/, "") + "/wp-json/wc/v3"

interface WooCommerceProduct {
  id: number
  name: string
  price: string
  regular_price: string
  sale_price: string
  description: string
  short_description: string
  images: Array<{ src: string; alt: string }>
  permalink: string
  categories: Array<{ id: number; name: string }>
  stock_status: "instock" | "outofstock" | "onbackorder"
}

const wcClient = axios.create({
  baseURL: WC_API_URL,
  auth: {
    username: process.env.WC_CONSUMER_KEY ?? "",
    password: process.env.WC_CONSUMER_SECRET ?? "",
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

export async function getProducts(): Promise<WooCommerceProduct[]> {
  const response = await wcClient.get("/products", {
    params: { per_page: 20 },
  })
  return response.data
}

export async function getProduct(id: number): Promise<WooCommerceProduct> {
  const response = await wcClient.get(`/products/${id}`)
  return response.data
}

export type { WooCommerceProduct }
