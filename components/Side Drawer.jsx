import { Sheet, SheetContent, SheetClose, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

function SideDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={"/menu-icon.png"} alt="menu icon" width={50} height={50}></Image>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">Menu</SheetTitle>
        </SheetHeader>
        <div className="my-8"></div>
        <nav>
          <ul className="flex space-y-3 flex-col items-center justify-center">
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
      </SheetContent>
    </Sheet>
  );
}

export default SideDrawer;
