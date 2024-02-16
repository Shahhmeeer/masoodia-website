"use client";

import Image from "next/image";
import masoodia from "../public/coal.jpg";
import "./globals.css";
import Link from "next/link";

import styles from "./home.module.css";
import services from "./data/services";
import details from "./data/details";
import partners from "./data/partners";
import CustomCarousel from "@/components/Custom Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomSwiper from "@/components/Swiper";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const serviceImages = ["/coal.jpg", "/solar.jpg", "/bio-mass.jpg", "/event-management.jpg", "/IT-solutions.jpg", "/minerals.jpg"];

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="relative">
          <div>
            <CustomSwiper carouselImages={serviceImages} />
          </div>
          <div className="custom-shape-divider-bottom-1702067844">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Main Section */}
      <section id="services" className="mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <section>
          <h1 className="bg-no-repeat bg-clip-text mx-auto text-3xl md:text-5xl text-green-600 font-black text-center max-w-xs md:max-w-lg my-10">
            Agriculture Products Exporter in Pakistan
          </h1>
          <div className="my-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-xs mx-auto md:max-w-6xl">
            {services.map((service, index) => (
              <div data-aos="zoom-in" key={index} className={styles.card} style={{ backgroundImage: `url('${serviceImages[index]}')` }}>
                <div className={styles.overlay}>
                  <div className={styles.cardContent}>
                    <h1 className="font-black text-2xl md:text-3xl">{service.name}</h1>
                    {/* <p className=" text-sm leading-relaxed mb-4">{service.description}</p> */}
                    <Link href={service.ctaLink} className={styles.btn}>
                      {service.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* Main Section End */}

      <div className="my-28"></div>

      <section className="bg-green-800 text-white flex items-center justify-center" style={{ minHeight: "380px" }}>
        <div className="mx-auto md:max-w-5xl lg:max-w-7xl">
          <div className="py-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-6 gap-y-14">
            {details.map((detail, index) => (
              <div key={index} className="flex gap-3 items-center ml-6">
                <div>
                  <Image src={detail.iconPath} alt={detail.altText} width={80} height={80}></Image>
                </div>
                <div>
                  <h2 className="font-bold md:text-2xl text-lg">{detail.numbers}</h2>
                  <p className="text-xs md:text-sm text-gray-100">{detail.detailName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto md:max-w-5xl lg:max-w-7xl" id="partners">
        <section className="w-full flex items-center justify-center flex-col" style={{ minHeight: "400px" }}>
          <h1 className="font-black text-3xl text-center py-8">Our Premium Partners</h1>
          <div className="flex justify-between w-full">
            <CustomCarousel carouselImages={partners} isHero={false} />
          </div>
        </section>
      </section>
      <section style={{ minHeight: "300px" }} className="flex items-center" id="contact">
        <section className="mx-auto md:max-w-5xl lg:max-w-7xl text-black">
          <h1 className="font-bold text-xl text-center">Get in Touch</h1>
          <p className="my-4 mx-4 text-sm md:mx-0 md:text-base">Please feel free to contact us for any further information.</p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/923324884895"
              className="bg-green-500 transition duration-500 hover:bg-green-300 rounded-full font-semibold text-base text-black px-12 py-2"
              target="_blank"
            >
              Contact Us
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
