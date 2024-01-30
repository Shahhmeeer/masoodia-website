"use client";

import styles from "../app/home.module.css";
import footerIcons from "@/app/data/footerIcons";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer style={{ minHeight: "500px" }} className="flex items-center justify-evenly flex-col relative bg-red-600 text-white">
      <section className="mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl" style={{ width: "100%" }}>
        <div className="flex flex-col md:flex-row mx-8 my-4 md:mx-0 md:my-0">
          <div className="flex-1">
            <h1 className="font-black text-4xl md:text-5xl pb-4">Masoodia</h1>
            <p className="max-w-xs">Masoodia® is an independent energy company Registered in 2012 and supplying Coal & Bio Mass to many Top Ranking Companies in Pakistan.</p>
          </div>
          <div className="flex-1 my-8 md:my-0">
            <h1 className="font-bold text-xl pb-4">Services</h1>
            <ul className="list-none space-y-2 text-sm">
              <li>Imported and Local Coal</li>
              <li>Solar Systems</li>
              <li>Bio Mass</li>
              <li>Event Management</li>
              <li>It Solutions</li>
              <li>Minerals</li>
              <li>Social and Welafare Projects</li>
            </ul>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-xl pb-4">Contact</h1>
            <ul className="list-none space-y-4">
              {footerIcons.map((footerIcon, index) => (
                <li key={index} className="flex items-center space-x-3 text-sm">
                  <Image src={footerIcon.IconPath} alt={footerIcon.alt} width={30} height={30}></Image>
                  <p>{footerIcon.IconDescription}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="my-8 w-full text-white bg-green-600 rounded-full flex items-center justify-between max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-7xl" style={{ minHeight: "70px" }}>
        <div className="ml-4">
          <button className="flex items-center" title="Go to top" onClick={toTop}>
            <Image src={"/up arrow.png"} alt="Go to top" width={50} height={50}></Image>
          </button>
        </div>
        <div className="font-bold mr-4">
          <h1>&copy; Masoodia {currentYear} </h1>
        </div>
      </section>
    </footer>
  );
}
