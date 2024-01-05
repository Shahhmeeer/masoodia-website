"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import services from "@/app/data/services";

export default function CustomCarousel() {
  const carouselImages = ["/coal.jpg", "/solar.jpg", "/bio-mass.jpg", "/event-management.jpg", "/IT-solutions.jpg", "/minerals.jpg", "/social-welfare.jpg"];
  return (
    <Carousel
      className="w-full relative overflow-hidden"
      style={{ height: "100dvh" }}
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="relative" style={{ height: "100dvh" }}>
        {carouselImages.map((carouselImage, index) => (
          <CarouselItem key={index}>
            <div className="bg-green-400 h-full relative bg-no-repeat bg-cover" style={{ backgroundImage: `url("${carouselImage}")` }}>
              <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className="h-full w-full text-white flex items-center justify-center flex-col">
                <h1 className="font-semibold text-3xl">{services[index].name}</h1>
                <p className="max-w-xl">{services[index].description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
