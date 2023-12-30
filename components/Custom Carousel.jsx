"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";

export default function CustomCarousel() {
  return (
    <Carousel className="bg-blue-200 h-full w-full relative">
      <CarouselContent className="relative h-full">
        <CarouselItem className="bg-red-600 h-full">1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
