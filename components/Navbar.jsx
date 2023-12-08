import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white flex items-center shadow-md z-10" style={{ minHeight: "8dvh" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center w-full text-center">
        <Link href="/">
          <h1 className="text-2xl font-black md:text-3xl">Masoodia</h1>
        </Link>
      </div>
    </header>
  );
}
