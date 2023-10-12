"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Menu from "@/public/assets/icons/menu/menu.svg";
import Close from "@/public/assets/icons/menu/close.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header bg-primaryLighter">
      <nav className="nav">
        <Link
          href="#"
          className="capitalize font-semibold text-[22px] text-black duration-300 hover:scale-110"
        >
          {/* <Image src={""} width={12} height={12} className="object-contain" /> */}
          Veezen
        </Link>

        {/* Mobile Nav */}
        {open ? (
          <div className="nav-menu lg:hidden">
            <ul className="nav-list">
              <li>
                <Link
                  href={"#"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  Ask for Quote
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
                >
                  Contact Us
                </Link>
              </li>

              <li className="mt-4">
                <Link
                  className="main-nav-link nav-cta duration-300 bg-primary hover:bg-primaryDark"
                  href={"#"}
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>

            <button
              className="inline-block absolute top-8 right-8"
              onClick={() => setOpen(false)}
            >
              <Close className="w-10 h-10 font-semibold cursor-pointer duration-300 hover:text-primaryDark" />
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
        <div className="hidden lg:block">
          <ul className="nav-list md:flex-row">
            <li>
              <Link
                href={"#"}
                onClick={() => setOpen(false)}
                className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                onClick={() => setOpen(false)}
                className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                onClick={() => setOpen(false)}
                className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
              >
                Ask for Quote
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                onClick={() => setOpen(false)}
                className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                onClick={() => setOpen(false)}
                className="nav-link text-[1.6rem] font-semibold duration-300 hover:text-primaryDark"
              >
                Contact Us
              </Link>
            </li>

            <li className="mt-4 md:mt-0">
              <Link
                className="main-nav-link nav-cta duration-300 bg-primary hover:bg-primaryDark"
                href={"#"}
                onClick={() => setOpen(false)}
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
