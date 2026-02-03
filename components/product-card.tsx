"use client"

import Image from "next/image"
import type { WooCommerceProduct } from "@/lib/api/woocommerce"

interface ProductCardProps {
  product: WooCommerceProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const price = product.sale_price || product.regular_price || product.price
  const image = product.images[0]

  return (
    <div className="border-2 flex flex-col justify-between border-[#d1d1d1] bg-white p-4">
      <div>
        {image ? (
          <div className="relative mb-4 aspect-square w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt || product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        ) : null}
        <h3 className="font-heading">{product.name}</h3>
        <p className="mb-4 font-mono text-xl font-bold">${price}</p>
      </div>
      <a
        href={product.permalink}
        target="_blank"
        className="block w-full bg-[#d1d1d1] py-2 text-center font-heading text-black hover:bg-gray-100"
      >
        Buy Now
      </a>
    </div>
  )
}
