import Image from "next/image";
import masoodia from "../public/hero-image.jpg";
import "./globals.css";
import Link from "next/link";

import styles from "./home.module.css";
import services from "./data/services";
import details from "./data/details";
import partners from "./data/partners";
import CustomCarousel from "@/components/Custom Carousel";

const customStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100dvh",
  backgroundColor: "red",
};

const customTextStyle = {
  fontSize: "3.5rem",
  lineHeight: "1.625",
  fontWeight: "700",
  maxWidth: "40rem",
  backgroundColor: "red",
  marginInline: "auto",
};

export default function Home() {
  const serviceImages = ["/coal.jpg", "/solar.jpg", "/bio-mass.jpg", "/event-management.jpg", "/IT-solutions.jpg", "minerals.jpg", "solar.jpg"];
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="relative">
          <div className={styles.constrainedLayout} style={customStyles}>
            <CustomCarousel />
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
      <section id="services" className={styles.constrainedLayout}>
        <section>
          <h1 className={styles.imageText} style={customTextStyle}>
            Agriculture Products Exporter in Pakistan
          </h1>
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className={styles.card} style={{ backgroundImage: `url('${serviceImages[index]}')` }}>
                <div className={styles.overlay}>
                  <div className={styles.cardContent}>
                    <h1 className="font-bold text-3xl">{service.name}</h1>
                    <p className=" text-sm leading-relaxed mb-4">{service.description}</p>
                    <Link href={service.ctaLink} className={styles.btn}>
                      {service.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex items-center justify-center" style={{ minHeight: "600px" }}>
          <div className="flex flex-1 items-start flex-col justify-center space-y-4">
            <h1 className="font-bold text-2xl">About Masoodia</h1>
            <p className="max-w-md text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod eos et. Quasi, mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, incidunt! officiis. Aliquid illo tempore veritatis. Voluptas.
            </p>
            <button className={styles.btn}>More about us</button>
          </div>
          <div className="flex-1">
            <Image src={masoodia} alt="Masoodia Image" className="aspect-video rounded-2xl" quality={70}></Image>
          </div>
        </section>
      </section>
      {/* Main Section End */}

      <div className="my-5"></div>

      <section className="bg-blue-300 flex items-center justify-center" style={{ minHeight: "380px" }}>
        <div className={styles.constrainedLayout}>
          <div className="grid grid-cols-3 gap-x-6 gap-y-14">
            {details.map((detail, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div>
                  <Image src={detail.iconPath} alt={detail.altText} width={100} height={100}></Image>
                </div>
                <div>
                  <h2 className="font-bold text-2xl">{detail.numbers}</h2>
                  <p className="text-sm text-gray-600">{detail.detailName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.constrainedLayout}>
        <section className="w-full flex items-center justify-center flex-col" style={{ minHeight: "300px" }}>
          <h1 className="font-semibold text-xl text-center py-8">Our Premium Partners</h1>
          <div className="flex justify-between w-full">
            {partners.map((partner, index) => (
              <div key={index}>
                <Image src={partner} alt="Partners" width={200} height={100} className="aspect-video rounded-md"></Image>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section style={{ minHeight: "300px" }} className="bg-blue-200 flex items-center justify-center">
        <section className={styles.constrainedLayout}>
          <h1 className="font-bold text-xl text-center">Get in Touch</h1>
          <p className="my-4">Please feel free to contact us for any further information.</p>
          <div className="flex justify-center">
            <button className={styles.btn}>Contact Us</button>
          </div>
        </section>
      </section>
    </main>
  );
}
