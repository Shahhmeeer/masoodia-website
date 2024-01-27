"use client";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import services from "@/app/data/services";
import Image from "next/image";

export default function CustomCarousel({ carouselImages, isHero }) {
  // const carouselImages = ["/coal.jpg", "/solar.jpg", "/bio-mass.jpg", "/event-management.jpg", "/IT-solutions.jpg", "/minerals.jpg", "/social-welfare.jpg"];
  return (
    <Carousel
      className="w-full relative overflow-hidden"
      style={{ height: isHero ? "100dvh" : "150px" }}
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      {isHero && (
        <CarouselContent className="relative" style={{ height: "100dvh" }}>
          {carouselImages.map((carouselImage, index) => (
            <CarouselItem key={index}>
              <div className="h-full relative bg-no-repeat bg-cover" style={{ backgroundImage: `url("${carouselImage}")` }}>
                <div style={{ backgroundColor: "rgba(0,0,0,0.75)" }} className="h-full w-full text-white flex items-center justify-center flex-col">
                  <h1 className="font-semibold text-2xl md:text-5xl lg:text-7xl mb-4">{services[index].name}</h1>
                  <p className="mx-8 sm:mx-0 md:max-w-xl md:text-justify text-sm">{services[index].description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      )}
      {isHero === false ? (
        <CarouselContent className="flex items-center">
          {carouselImages.map((carouselImage, index) => (
            <CarouselItem key={index} className="sm:basis-1/5 md:basis-1/6 basis-1/3">
              <Image alt="partners image" src={carouselImage} width={200} height={150} />
            </CarouselItem>
          ))}
        </CarouselContent>
      ) : (
        ""
      )}
    </Carousel>
  );
}
