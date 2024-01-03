import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white flex items-center shadow-md z-10" style={{ minHeight: "10dvh" }}>
      <div className="mx-auto flex items-center justify-between w-full text-center" style={{ maxWidth: "1440px" }}>
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Masoodia Logo" width={120} height={120}></Image>
          </Link>
        </div>
        <div>
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </header>
  );
}
