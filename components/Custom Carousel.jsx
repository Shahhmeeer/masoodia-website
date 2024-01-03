"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import services from "@/app/data/services";

export default function CustomCarousel() {
  return (
    <Carousel
      className="h-full w-full relative"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="relative h-full">
        {services.map((service, index) => (
          <CarouselItem key={index} style={{ backgroundColor: "red", height: "400px" }}>
            <Image alt={service.name} src={service.relatedImage} fill={true} quality={30}></Image>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
