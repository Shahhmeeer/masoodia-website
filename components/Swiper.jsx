// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import services from "@/app/data/services";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function CustomSwiper({ carouselImages }) {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {carouselImages.map((carouselImage, index) => (
          <SwiperSlide key={index}>
            <div className="bg-no-repeat bg-cover bg-center text-white h-[70dvh] md:h-[100dvh]" style={{ backgroundImage: `url("${carouselImage}")`,  }}>
              <div className="h-full w-full flex items-center justify-center flex-col" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
                <h1 className="font-semibold text-2xl md:text-5xl lg:text-7xl mb-4">{services[index].name}</h1>
                <p className="mx-8 sm:mx-0 md:max-w-5xl md:text-justify text-xs font-bold">{services[index].description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
