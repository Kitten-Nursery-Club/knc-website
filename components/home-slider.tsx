"use client"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useEffect } from "react"
import { Icon } from "./icon"

const SLIDES = [
  { src: "/home-page-slider/black-cat.avif", alt: "Black cat" },
  { src: "/home-page-slider/light-cat-duo.avif", alt: "Light cats duo" },
  { src: "/home-page-slider/orange-cat.avif", alt: "Orange cat" },
  { src: "/home-page-slider/twin-cats.avif", alt: "Twin cats" },
]

export function HomeSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

  useEffect(() => {
    if (!emblaApi) return
    const handle = () => {
      emblaApi.reInit()
    }
    emblaApi.on("resize", handle)
    return () => {
      emblaApi.off("resize", handle)
    }
  }, [emblaApi])

  return (
    <div className="mb-10">
      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {SLIDES.map((slide) => (
            <div key={slide.src} className="relative min-w-0 border-4 border-[#d1d1d1] flex-[0_0_100%]">
              <div className="flex gap-4 items-center justify-end h-10 bg-[#9b7cb0] px-4">
                <p className="font-heading">{"BABIES<3"}</p>
                <div className="h-6 w-6 bg-[#666] shadow-[-2px_-2px_0px_#d1d1d1,2px_2px_0px_black]">
                  <Icon>maximize</Icon>
                </div>
                <div className="h-6 w-6 bg-[#666] shadow-[-2px_-2px_0px_#d1d1d1,2px_2px_0px_black]">
                  <Icon>favorite</Icon>
                </div>
              </div>
              <div className="relative h-[320px] w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 800px, 100vw"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
