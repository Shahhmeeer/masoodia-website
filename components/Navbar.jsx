import Link from "next/link";
import Image from "next/image";
import SideDrawer from "./Side Drawer";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white flex items-center shadow-md z-10" style={{ minHeight: "9dvh" }}>
      <div className="mx-auto flex items-center justify-between w-full text-center md:max-w-4xl lg:max-w-6xl xl:max-w-6xl">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Masoodia Logo" width={150} height={150}></Image>
          </Link>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-3">
              <a href="#services" className="hover:bg-green-500 px-4 py-2 rounded-md">
                <li>Services</li>
              </a>
              <a href="#partners" className="hover:bg-green-500 px-4 py-2 rounded-md">
                <li>Our Partners</li>
              </a>
              <a href="#contact" className="hover:bg-green-500 px-4 py-2 rounded-md">
                <li>Contact Us</li>
              </a>
            </ul>
          </nav>
        </div>
        <div className="block md:hidden">
          <SideDrawer />
        </div>
      </div>
    </header>
  );
}
