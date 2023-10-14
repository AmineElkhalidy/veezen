import React from "react";
import Link from "next/link";

import Phone from "@/public/assets/images/contact/phone.svg";
import Email from "@/public/assets/images/contact/email.svg";
import Map from "@/public/assets/images/contact/map.svg";

const Contact = () => {
  return (
    <>
      <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2
            className="heading-secondary text-center"
            style={{ color: "white" }}
          >
            Contact Us
          </h2>
        </div>
      </div>

      <section className="my-20 max-w-[120rem] mx-auto px-[2rem] xl:px-0 ">
        <div className="grid md:grid-cols-[2fr_1fr]">
          {/* Form */}
          <div>
            <form className="cta-form">
              <div>
                <label htmlFor="first-name">First Name</label>
                <input
                  name="first-name"
                  id="first-name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="last-name">Last Name</label>
                <input
                  name="last-name"
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="message">Message</label>
                <textarea
                  className="resize-none"
                  name="message"
                  id="message"
                  placeholder="Your message"
                  rows={6}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-[4.6rem] py-[1.8rem] bg-white rounded-[1rem] text-[1.6rem] text-primaryDark font-semibold mt-8 duration-300 hover:bg-primaryDark hover:text-white border border-primaryDark hover:border-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Social media */}
          <div className="space-y-10">
            <div className="max-w-lg mx-auto h-[170px] rounded-[1rem] bg-primaryLighter duration-300 group hover:bg-primaryDark">
              <div className="h-full  justify-center flex flex-col items-center gap-8">
                <Phone className="w-16 h-16 text-primaryDark group-hover:text-white" />

                <div className="group-hover:text-gray-200 ">
                  <Link href="#" className="text-[1.4rem] ">
                    +212611111111
                  </Link>
                  <br />
                  <br />
                  <Link href="#" className="text-[1.4rem] ">
                    +212611111111
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-lg mx-auto h-[170px] rounded-[1rem] bg-primaryLighter duration-300 group hover:bg-primaryDark">
              <div className="h-full  justify-center flex flex-col items-center gap-8">
                <Email className="w-16 h-16 text-primaryDark group-hover:text-white" />

                <div className="group-hover:text-gray-200">
                  <Link href="#" className="text-[1.4rem] ">
                    office@veezen.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-lg mx-auto h-[170px] rounded-[1rem] bg-primaryLighter duration-300 group hover:bg-primaryDark">
              <div className="h-full  justify-center flex flex-col items-center gap-8">
                <Map className="w-16 h-16 text-primaryDark group-hover:text-white" />

                <div className="text-center px-[1rem] group-hover:text-gray-200">
                  <Link href="#" className="text-[1.4rem]">
                    Residence Chantimar, Rue N°3, Les princesses II, Maarif
                    extension, Casablanca 20100, Morocco
                  </Link>
                  <br />
                  <br />
                  <Link href="#" className="text-[1.4rem] ">
                    78, Avenue des champs-Elysées, 75008 Paris, France
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
