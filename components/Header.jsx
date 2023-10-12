"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      <Link href="#">
        <Image src={""} width={12} height={12} className="object-contain" />
      </Link>

      <nav className="">
        {/* Mobile Nav */}
        <div className=""></div>

        {/* Desktop Nav */}
        <div className=""></div>
      </nav>
    </header>
  );
};

export default Header;
