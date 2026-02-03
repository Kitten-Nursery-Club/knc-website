import { getProducts } from "@/lib/api/woocommerce"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store | Kitten Nursery Club",
  description: "Support our kittens by purchasing merchandise",
}

export default async function StorePage() {
  const products = await getProducts()

  return (
    <div className="min-h-[calc(100vh-5rem)] px-4 py-8">
      <h1 className="mb-8 font-heading text-3xl">Store</h1>
      <p className="mb-8">
        Support our kittens! All proceeds go towards caring for homeless kittens.
      </p>
      {products.length === 0 ? (
        <p>No products available at this time.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
