"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Menu from "@/public/assets/icons/menu/menu.svg";
import Close from "@/public/assets/icons/menu/close.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        setShadow(true);
      } else setShadow(false);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 600) {
          setShadow(true);
        } else setShadow(false);
      });
  }, []);

  return (
    <header
      className={`header  ${
        shadow ? "shadow-lg bg-primaryLighter" : "shadow-0 bg-primaryLighter/80"
      }`}
    >
      <nav className="nav">
        <Link
          href="/"
          className="capitalize font-semibold text-[22px] lg:text-[24px] text-black duration-300 hover:scale-110"
        >
          {/* <Image src={""} width={12} height={12} className="object-contain" /> */}
          Veezen
        </Link>

        {/* Mobile Nav */}
        {open ? (
          <div className="nav-menu duration-300 lg:hidden">
            <ul className="nav-list">
              <li>
                <Link
                  href={"/"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.8rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/services"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.8rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/about-us"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.8rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact-us"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.8rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  Contact Us
                </Link>
              </li>

              <li className="mt-4">
                <Link
                  className="main-nav-link nav-cta duration-300 bg-primary hover:bg-primaryDark"
                  href={"/sign-up"}
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>

            <button
              className="inline-block absolute top-8 right-10"
              onClick={() => setOpen(false)}
            >
              <Close className="w-12 h-12 font-semibold cursor-pointer duration-300 hover:text-primaryDark" />
            </button>
          </div>
        ) : (
          <button
            className="inline-block md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-10 h-10 font-semibold cursor-pointer duration-300 hover:text-primaryDark" />
          </button>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="nav-list md:flex-row">
            <li>
              <Link
                href={"/"}
                className={`text-[1.8rem] font-semibold duration-300 hover:text-primaryDark ${
                  pathname === "/" ? "text-primaryDark" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className={`text-[1.8rem] font-semibold duration-300 hover:text-primaryDark ${
                  pathname === "/services" ? "text-primaryDark" : ""
                }`}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href={"/about-us"}
                className={`text-[1.8rem] font-semibold duration-300 hover:text-primaryDark ${
                  pathname === "/about-us" ? "text-primaryDark" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/contact-us"}
                className={`text-[1.8rem] font-semibold duration-300 hover:text-primaryDark ${
                  pathname === "/contact-us" ? "text-primaryDark" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>

            <li className="mt-4 md:mt-0">
              <Link
                className="main-nav-link nav-cta duration-300 bg-primary hover:bg-primaryDark"
                href={"/sign-up"}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
