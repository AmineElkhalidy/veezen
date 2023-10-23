import React from "react";
import Link from "next/link";
import Image from "next/image";

import Facebook from "@/public/assets/icons/footer/facebook.svg";
import Instagram from "@/public/assets/icons/footer/instagram.svg";
import Whatsapp from "@/public/assets/icons/footer/whatsapp.svg";
import Linkedin from "@/public/assets/icons/footer/linkedin.svg";

const About = () => {
  return (
    <>
      <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2
            className="heading-secondary text-center"
            style={{ color: "white" }}
          >
            About Us
          </h2>
        </div>
      </div>

      <section class="py-[8rem]">
        <div class="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-40 px-[2rem] md:flex-row xl:px-0 lg:gap-20">
          <div class="text-center md:text-left md:w-full">
            <h2 class="heading-secondary" style={{ marginBottom: 0 }}>
              Get to know about us
            </h2>
            <p class="hero-description mt-10">
              Veezen: Shaping Workplace Well-being. We specialize in
              transforming workplaces into nurturing, mental-health-focused
              environments, fostering employee happiness and business success.
            </p>
          </div>

          <div class="text-center self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              className="object-contain w-full "
            />
          </div>
        </div>
      </section>

      <section class="py-[6rem] ">
        <div class="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-40 px-[2rem] md:flex-row xl:px-0 lg:gap-20">
          <div class="text-center self-center md:w-full">
            <Image
              src="/assets/images/about/social-media.svg"
              width={450}
              height={450}
              className="object-contain w-full "
            />
          </div>

          <div class="text-center md:text-left md:w-full">
            <h2 class="heading-secondary" style={{ marginBottom: 0 }}>
              We are <span className="text-primaryDark">available</span> on all
              of the{" "}
              <span className="text-primaryDark">Social Media Platforms</span>
            </h2>
            <p class="hero-description mt-10">
              Veezen: Shaping Workplace Well-being. We specialize in
              transforming workplaces into nurturing, mental-health-focused
              environments, fostering employee happiness and business success.
            </p>

            {/* <Link href="/about-us" class="btn btn--primary">
              Learn more
            </Link> */}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-[9.6rem] bg-primaryLighter">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 text-center">
          <span class="subheading">Why?</span>
          <h2 class="heading-secondary">Why choose us</h2>
        </div>

        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 d-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              className="feature-icon"
              src="/assets/images/home/icon.svg"
              loading="lazy"
            />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              libero!
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              className="feature-icon"
              src="/assets/images/home/icon.svg"
              loading="lazy"
            />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              hic.
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              className="feature-icon"
              src="/assets/images/home/icon.svg"
              loading="lazy"
            />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              sed!
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              className="feature-icon"
              src="/assets/images/home/icon.svg"
              loading="lazy"
            />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              incidunt.
            </p>
          </div>
        </div>
      </section>

      {/* Our team */}
      <section className="py-[9.6rem]">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 text-center">
          <span className="subheading">Presenting</span>
          <h2 className="heading-secondary">Our Team</h2>
        </div>

        <div>
          <div className="px-[10rem] mx-auto max-w-[120rem] md:px-[2rem] ">
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-[2rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Bonnie Green</a>
                  </h3>
                  <span className="text-gray-500 text-[1.4rem] ">
                    CEO & Web Developer
                  </span>
                  <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Avatar"
                  />
                </a>

                <div className="p-5">
                  <h3 className="text-[2rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Bonnie Green</a>
                  </h3>
                  <span className="text-gray-500 text-[1.4rem] ">
                    CEO & Web Developer
                  </span>
                  <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="Michael Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-[2rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Bonnie Green</a>
                  </h3>
                  <span className="text-gray-500 text-[1.4rem] ">
                    CEO & Web Developer
                  </span>
                  <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                    alt="Sofia Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-[2rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Bonnie Green</a>
                  </h3>
                  <span className="text-gray-500 text-[1.4rem] ">
                    CEO & Web Developer
                  </span>
                  <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className=" bg-[#275A55] ">
        <div className="grid md:grid-cols-2">
          {/* Form */}
          <div className="px-[2rem] w-full pt-[9.6rem] pb-[6rem] ">
            <div className="mb-[10rem] md:mb-[8rem] ">
              <h2
                className="heading-secondary"
                style={{ color: "white", marginBottom: 0 }}
              >
                Get in Touch With Us
              </h2>
              <p className="text-[2rem] mt-[2rem] text-[#eee]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis a sed, consectetur mollitia quisquam itaque. Quam
                vitae fugiat aut doloremque aperiam sapiente incidunt eos
                delectus.
              </p>
            </div>

            <form action="" className="cta-form">
              <div>
                <label className="text-[#eee]" htmlFor="first-name">
                  First Name
                </label>
                <input
                  name="first-name"
                  id="first-name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-[#eee]" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  name="last-name"
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div>
                <label className="text-[#eee]" htmlFor="phone">
                  Phone
                </label>
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div>
                <label className="text-[#eee]" htmlFor="email">
                  Email address
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div className="lg:col-span-2">
                <label className="text-[#eee]" htmlFor="message">
                  Message
                </label>
                <textarea
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

          {/* Image */}
          <div className="contact-img--container">
            <div className="w-full h-full flex relative justify-center items-center px-[2rem] py-[9.6rem] ">
              <p className="p-[2rem] text-[3rem] text-white border border-white leading-snug rounded-[1rem] md:p-[3rem] ">
                "Prioritizing mental health and well-being in the workplace is
                not just a compassionate act; it's an essential investment in
                the overall success, productivity, and happiness of your team. A
                mentally healthy workforce is a thriving workforce."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
