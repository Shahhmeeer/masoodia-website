import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white flex items-center shadow-md z-10" style={{ minHeight: "9dvh" }}>
      <div className="mx-auto flex items-center justify-between w-full text-center" style={{ maxWidth: "1440px" }}>
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Masoodia Logo" width={100} height={100}></Image>
          </Link>
        </div>
        <div>
          <a href="mailto:hmarmasodi@gmail.com" className="rounded-md text-base px-6 py-2 bg-blue-400 hover:bg-blue-200 hover:text-black text-white">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
