"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import Question from "@/public/assets/images/home/question.svg";

export default function Home() {
  // useEffect(() => {
  //   import("preline");
  // }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-primaryLighter py-[8rem] lg:pt-[10rem]">
        <div className="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-40 px-[2rem] md:flex-row xl:px-0 lg:gap-20">
          <div className="text-center md:text-left md:w-full">
            <h1 className="heading-primary text-[5.2rem] mb-[3.2rem]">
              Mental Health & Well-being in the Workplace
            </h1>
            <p className="hero-description">
              Unlocking Peak Performance: Nurturing Mental Health and Well-being
              in the Workplace. Explore the vital link between mental well-being
              and workplace productivity in this insightful examination of
              modern work culture.
            </p>

            <div className="mt-10 flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:gap-20 gap-3 mb-10">
              <div className="people-imgs">
                <Image
                  src="/assets/images/home/customer-1.webp"
                  alt="Veezen Client"
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/home/customer-2.webp"
                  alt="Veezen Client"
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/home/customer-3.webp"
                  alt="Veezen Client"
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/home/customer-4.webp"
                  alt="Veezen Client"
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/home/customer-5.webp"
                  alt="Veezen Client"
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/home/customer-6.webp"
                  alt="Veezen Client"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </div>

              <p class="text-[1.4rem] font-semibold">
                <span>100+</span> person we have helped!
              </p>
            </div>

            <Link href="#meals" class="btn btn--primary">
              Get Started
            </Link>
          </div>

          <div class="self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem]  ">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0">
          <h2 className="text-[24px] text-center font-semibold mb-20 md:mb-28">
            Our Clients
          </h2>

          <div className="flex justify-around gap-12">
            <img
              src="/assets/images/home/sodexo.png"
              alt="Sedoxo logo"
              className="logo h-[3rem] lg:h-[5rem] "
            />
            <img
              src="/assets/images/home/taqa.svg"
              alt="TAQA logo"
              className="logo h-[3rem] lg:h-[5rem] "
            />
            <img
              src="/assets/images/home/jti.svg"
              alt="JTI logo"
              className="logo h-[3rem] lg:h-[5rem] "
            />
            <img
              src="/assets/images/home/zalar.png"
              alt="Zalar logo"
              className="logo h-[3rem] lg:h-[5rem] "
            />
            <img
              src="/assets/images/home/jesa.png"
              alt="JESA logo"
              className="logo h-[3rem] lg:h-[5rem] "
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-[9.6rem]">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0">
          <span class="subheading">How it works</span>
          <h2 class="heading-secondary">How can we help you?</h2>
        </div>

        <div class="max-w-[120rem] py-[3rem] md:py-0 mx-auto px-[2rem] xl:px-0 d-grid grid-cols-1 md:grid-cols-2 grid--center-v">
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">Assessment and Support Evaluation</h3>
            <p class="step-description">
              : In the initial stage, we conduct a comprehensive assessment of
              the individual's mental health and well-being needs. Our expert
              team evaluates the specific challenges and stressors they may face
              in the workplace. This step forms the foundation for tailored
              support strategies.
            </p>
          </div>
          <div class="step-image-box">
            <img
              src="/assets/images/home/1.svg"
              alt="Picture"
              class="step-image"
            />
          </div>

          <div className="mb-20 md:hidden"></div>

          <div class="step-image-box">
            <img
              src="/assets/images/home/2.svg"
              alt="Picture"
              class="step-image"
            />
          </div>
          <div class="step-text-box">
            <p class="step-number">02</p>
            <h3 class="heading-tertiary">Personalized Well-being Plans</h3>
            <p class="step-description">
              : Based on the assessment results, we create personalized
              well-being plans. These plans include a range of interventions,
              such as stress management techniques, resilience-building
              exercises, and mental health resources. Each plan is uniquely
              designed to address the individual's requirements and promote
              their overall mental well-being.
            </p>
          </div>

          <div className="mb-20 md:hidden"></div>

          <div class="step-text-box">
            <p class="step-number">03</p>
            <h3 class="heading-tertiary">Ongoing Support and Resources</h3>
            <p class="step-description">
              : We understand that well-being is an ongoing journey. Our
              services offer continuous support, including access to mental
              health professionals, workshops, and educational resources. We aim
              to empower individuals with the tools and knowledge they need to
              maintain and enhance their mental health while thriving in the
              workplace.
            </p>
          </div>
          <div class="step-image-box">
            <img
              src="/assets/images/home/3.svg"
              alt="Picture"
              class="step-image"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section class="bg-primaryLighter py-[8rem]">
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

            <Link href="/about-us" class="btn btn--primary">
              Learn more
            </Link>
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

      {/* Pricing */}
      <section className="py-[9.6rem] " id="pricing">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0">
          <span className="subheading">PRICING</span>
          <h2 className="heading-secondary">
            Start Your Journey With Us Today
          </h2>
        </div>

        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 d-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img className="feature-icon" src="/assets/images/home/icon.svg" />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img className="feature-icon" src="/assets/images/home/icon.svg" />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img className="feature-icon" src="/assets/images/home/icon.svg" />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img className="feature-icon" src="/assets/images/home/icon.svg" />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primaryLight lg:grid-cols-[55fr_45fr] lg:items-center d-grid pt-[4.6rem] pb-[6.2rem] ">
        <div className="p-[6rem]">
          <div className="mb-40 lg:mb-0">
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">
              Healing Words Testimonials from Veezen Clients
            </h2>
          </div>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                src="/assets/images/home/dave.webp"
                alt="Dave Image"
                className="testimonial-img"
              />

              <blockquote className="testimonial-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam harum Quibusdam harum Quibusdam harum
              </blockquote>

              <p className="testimonial-name">&mdash; Dave Bryson</p>
              <p className="text-[1.4rem] mt-2">Director Of HR</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/ben.webp"
                alt="Dave Image"
                className="testimonial-img"
              />

              <blockquote className="testimonial-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam harum Quibusdam harum Quibusdam harum
              </blockquote>

              <p className="testimonial-name">&mdash; Ben Hadley</p>
              <p className="text-[1.4rem] mt-2">Director Of HR</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/steve.webp"
                alt="Dave Image"
                className="testimonial-img"
              />

              <blockquote className="testimonial-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam harum Quibusdam harum Quibusdam harum
              </blockquote>

              <p className="testimonial-name">&mdash; Steve Miller</p>
              <p className="text-[1.4rem] mt-2">Director Of HR</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/hannah.webp"
                alt="Dave Image"
                className="testimonial-img"
              />

              <blockquote className="testimonial-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam harum Quibusdam harum Quibusdam harum
              </blockquote>

              <p className="testimonial-name">&mdash; Hannah Smith</p>
              <p className="text-[1.4rem] mt-2">Director Of HR</p>
            </figure>
          </div>
        </div>

        <div className="gallery place-items-center">
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-1.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-2.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-3.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-4.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-5.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-6.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-7.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-8.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-9.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-10.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-11.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/images/gallery/gallery-12.webp"
              alt="Photo of a happy client"
              srcset=""
            />
          </figure>
        </div>
      </section>

      {/* Faq's */}
      <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem] lg:pb-[9.6rem]">
        <div className="text-center">
          <span className="subheading">FAQ</span>
          <h2 className="heading-secondary">Frequently Asked Questions</h2>
        </div>

        {/* <div className="max-w-5xl mx-auto px-[2rem] xl:px-0">
          <div className="hs-accordion-group">
            <div
              className="hs-accordion active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                <div className="flex items-center  gap-2">
                  <Question className="w-10 h-10" />
                  <h3 className="">What is Veezen?</h3>
                </div>
                <svg
                  className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the third item's accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                <div className="flex items-center  gap-2">
                  <Question className="w-10 h-10" />
                  <h3 className="">What is Veezen?</h3>
                </div>
                <svg
                  className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the third item's accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                <div className="flex items-center  gap-2">
                  <Question className="w-10 h-10" />
                  <h3 className="">What is Veezen?</h3>
                </div>
                <svg
                  className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the third item's accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>
        </div> */}
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
}
