import React from "react";

import Link from "next/link";
import Facebook from "@/public/assets/icons/footer/facebook.svg";
import Instagram from "@/public/assets/icons/footer/instagram.svg";
import Whatsapp from "@/public/assets/icons/footer/whatsapp.svg";
import Linkedin from "@/public/assets/icons/footer/linkedin.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer bg-primaryLighter">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-[1.5fr_1.5fr_1fr_1fr]">
        <div className="flex flex-col">
          <Link
            className="block text-[2.2rem] font-semibold text-[#333] mb-3"
            href="#"
          >
            Veezen
          </Link>

          <p className="text-[1.6rem] leading-8 mb-10">
            Mental Health & Well-being
            <br /> in the Workplace
          </p>

          <ul className="flex gap-6">
            <li>
              <Link className="footer-link" href="#">
                <Facebook className="w-10 h-10 duration-300 hover:fill-primary" />
              </Link>
            </li>

            <li>
              <Link className="footer-link" href="#">
                <Instagram className="w-10 h-10 duration-300 hover:fill-primary" />
              </Link>
            </li>

            <li>
              <Link className="footer-link" href="#">
                <Whatsapp className="w-10 h-10 duration-300 hover:fill-primary" />
              </Link>
            </li>

            <li>
              <Link className="footer-link" href="#">
                <Linkedin className="w-10 h-10 duration-300 hover:fill-primary" />
              </Link>
            </li>
          </ul>

          <p className="text-[#767676] text-[1.4rem] mt-16 lg:mt-auto">
            Copyright &copy; <span className="year">{currentYear}</span> by
            Veezen, Inc. All rights reserved
          </p>
        </div>

        <div>
          <p className="footer-heading">Contact us</p>

          <address className="contacts">
            <p className="address mb-2">
              Bouzniqa, Casablanca - 43100, Morocco-Safi
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                +21261111111
              </a>
              <br />
              <a className="footer-link" href="mailto:contact@veezen.com">
                contact@veezen.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading mb-4">Links</p>

          <ul className="footer-nav">
            <li>
              <Link className="footer-link" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="#">
                Services
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="#">
                Ask for Quote
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading mb-4">Company</p>

          <ul className="footer-nav">
            <li>
              <Link className="footer-link" href="#">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="#">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* <nav className="nav-col">
          <p className="footer-heading">Resources</p>

          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;
