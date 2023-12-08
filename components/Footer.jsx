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
    <footer style={{ minHeight: "500px" }} className="flex items-center justify-center flex-col relative bg-blue-800 text-white">
      <section className={styles.constrainedLayout} style={{ width: "100%" }}>
        <div className="flex  w-full">
          <div className="flex-1">
            <h1 className="font-black text-5xl pb-4">Masoodia</h1>
            <p className="max-w-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, soluta ad. Pariatur ea rerum non cumque corporis mollitia quas cupiditate?</p>
          </div>
          <div className="flex-1">
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
            <ul className="list-none">
              {footerIcons.map((footerIcon, index) => (
                <li key={index} className="flex items-center gap-3 space-y-2 text-sm">
                  <Image src={footerIcon.IconPath} alt={footerIcon.alt} width={30} height={30}></Image>
                  <p>{footerIcon.IconDescription}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-blue-300 absolute bottom-4 w-full flex items-center justify-between max-w-7xl rounded-lg" style={{ minHeight: "70px" }}>
        <div>
          <button className="flex items-center" title="Go to top" onClick={toTop}>
            <Image src={"/up-icon.svg"} alt="Go to top" width={50} height={50}></Image>
          </button>
        </div>
        <div className="text-black font-bold">
          <h1>&copy; Masoodia {currentYear} </h1>
        </div>
        <div className="flex space-x-4">
          <Image src={"/facebook-icon.svg"} alt="Facebook Icon" width={40} height={40}></Image>
          <Image src={"/linkedin-icon.svg"} alt="LinkedIn Icon" width={40} height={40}></Image>
        </div>
      </section>
    </footer>
  );
}