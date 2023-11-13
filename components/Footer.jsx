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
      <div className="max-w-[1200px] mx-auto d-grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-[1.5fr_1.5fr_1fr_1fr]">
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
          <p className="footer-heading">Address</p>

          <address className="contacts">
            <p className="mb-3">
              Residence Chantimar, Rue N°3,
              <br /> Les princesses II, Maarif extension,
              <br /> Casablanca 20100, Morocco
            </p>
            <p className="mb-3">
              78, Avenue des champs-Elysées, 75008 Paris, France
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading mb-4">Contact</p>
          <div className="flex flex-col gap-6">
            <a className="footer-link" href="tel:415-201-6370">
              +212 522 395 674
            </a>

            <a className="footer-link" href="tel:415-201-6370">
              +212 661 855 855
            </a>

            <a className="footer-link" href="mailto:contact@veezen.com">
              contact@veezen.com
            </a>
          </div>
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
      </div>
    </footer>
  );
};

export default Footer;
