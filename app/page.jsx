"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primaryLighter section">
        <div className="container flex flex-col gap-[10rem] md:flex-row lg:gap-[5rem]">
          <div className="text-center md:text-left md:w-full">
            <h1 className="heading-primary text-[5.2rem] mb-[3.2rem] leading-tight">
              Mental Health & Well-being at Workplace
            </h1>

            <p className="hero-description">
              Unlocking Peak Performance: Nurturing Mental Health and Well-being
              in the Workplace. Explore the vital link between mental well-being
              and workplace productivity in this insightful examination of
              modern work culture.
            </p>

            <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:gap-[5rem] gap-3 mb-10">
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

              <p className="text-[1.4rem] font-semibold">
                <span>100+</span> person we have helped!
              </p>
            </div>

            <Link href="#meals" className="btn btn--primary">
              Get Started
            </Link>
          </div>

          <div className="self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              alt="Veezen startegy"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem]">
        <div className="container">
          <h2 className="text-[2.4rem] text-center font-semibold mb-20">
            Our Clients
          </h2>

          <div className="w-full flex items-center justify-center">
            <div className="flex gap-12">
              <img
                src="/assets/images/home/techcrunch.webp"
                alt="Sedoxo logo"
                className="logo h-[3rem]"
                loading="lazy"
              />
              <img
                src="/assets/images/home/business-insider.webp"
                alt="TAQA logo"
                className="logo h-[3rem]"
                loading="lazy"
              />
              <img
                src="/assets/images/home/usa-today.webp"
                alt="JTI logo"
                className="logo h-[3rem]"
                loading="lazy"
              />
              <img
                src="/assets/images/home/forbes.webp"
                alt="Zalar logo"
                className="logo h-[3rem]"
                loading="lazy"
              />
              <img
                src="/assets/images/home/the-new-york-times.webp"
                alt="JESA logo"
                className="logo h-[3rem]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-[9rem] ]">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">How can we help you?</h2>
        </div>

        <div className="container md:py-0 d-grid grid-cols-1 md:grid-cols-2 grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Assessment and Support Evaluation
            </h3>
            <p className="step-description">
              : In the initial stage, we conduct a comprehensive assessment of
              the individual's mental health and well-being needs. Our expert
              team evaluates the specific challenges and stressors they may face
              in the workplace. This step forms the foundation for tailored
              support strategies.
            </p>
          </div>
          <div className="step-image-box">
            <img
              src="/assets/images/home/1.svg"
              alt="Picture"
              className="step-image"
              loading="lazy"
            />
          </div>

          <div className="mb-20 md:hidden"></div>

          <div className="step-image-box">
            <img
              src="/assets/images/home/2.svg"
              alt="Picture"
              className="step-image"
              loading="lazy"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">Personalized Well-being Plans</h3>
            <p className="step-description">
              : Based on the assessment results, we create personalized
              well-being plans. These plans include a range of interventions,
              such as stress management techniques, resilience-building
              exercises, and mental health resources. Each plan is uniquely
              designed to address the individual's requirements and promote
              their overall mental well-being.
            </p>
          </div>

          <div className="mb-20 md:hidden"></div>

          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary">Ongoing Support and Resources</h3>
            <p className="step-description">
              : We understand that well-being is an ongoing journey. Our
              services offer continuous support, including access to mental
              health professionals, workshops, and educational resources. We aim
              to empower individuals with the tools and knowledge they need to
              maintain and enhance their mental health while thriving in the
              workplace.
            </p>
          </div>
          <div className="step-image-box">
            <img
              src="/assets/images/home/3.svg"
              alt="Picture"
              className="step-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-primaryLighter section">
        <div className="container flex flex-col gap-[10rem]  md:flex-row lg:gap-[5rem]">
          <div className="text-center md:text-left md:w-full">
            <h2 className="heading-secondary" style={{ marginBottom: 0 }}>
              Get to know about us
            </h2>
            <p className="hero-description mt-10">
              Veezen: Shaping Workplace Well-being. We specialize in
              transforming workplaces into nurturing, mental-health-focused
              environments, fostering employee happiness and business success.
            </p>

            <Link href="/about-us" className="btn btn--primary">
              Learn more
            </Link>
          </div>

          <div className="text-center self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              alt="Veezen vision"
              className="object-contain w-full "
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-[9.6rem] " id="pricing">
        <div className="max-w-[120rem] py-[3rem] lg:py-0 mx-auto px-[2rem] xl:px-0  ">
          <span className="subheading">PRICING</span>
          <h2 className="heading-secondary">
            Start Your Journey With Us Today
          </h2>
        </div>

        <div className="max-w-[120rem] mx-auto px-[2rem] xl:px-0 grid sm:grid-cols-2 md:grid-cols-3 md:gap-[2.4rem] gap-[4.8rem]">
          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              <p className="plan-name">VeeSession</p>
              <p className="plan-price">
                <span>£</span>60
              </p>
              <p className="plan-text mb-6">Every Week</p>

              <div className="space-y-4">
                <p className="plan-text">1 Session</p>
                <p className="plan-text">Valid until cancelled</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Get Started
              </a>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              <p className="plan-name">VeeWorkshop</p>
              <p className="plan-price">
                <span>£</span>2000
              </p>
              <p className="plan-text mb-6">Every Week</p>

              <div className="space-y-4">
                <p className="plan-text">Workshop/20 employees pack</p>
                <p className="plan-text">Valid until cancelled</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Get Started
              </a>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              <p className="plan-name">Veecare</p>
              <p className="plan-price">
                <span>£</span>2000
              </p>
              <p className="plan-text mb-6">Every Week</p>

              <div className="space-y-4">
                <p className="plan-text">Enquête & Well-being</p>
                <p className="plan-text">Valid until cancelled</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 d-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[9.6rem] ">
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

      {/* Testimonials */}
      <section className="bg-primaryLight">
        <div className="max-w-[1200px] mx-auto">
          <div className=" lg:grid-cols-[55fr_45fr] lg:items-center d-grid pt-[4.6rem] pb-[6.2rem]">
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                  src="/assets/images/home/1.jpg"
                  alt="Photo of a happy client"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/2.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/3.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/4.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/5.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/6.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/7.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/8.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/9.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/10.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/11.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/images/home/12.jpg"
                  alt="Photo of a happy client"
                  srcSet=""
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Faq's */}
      {/* <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem] lg:pb-[9.6rem]">
        <div className="text-center">
          <span className="subheading">FAQ</span>
          <h2 className="heading-secondary">Frequently Asked Questions</h2>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <dl className="space-y-6 divide-y divide-gray-900/10">
                <div className="pt-6">
                  <dt>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between text-left text-gray-900"
                      aria-controls="faq-0"
                      aria-expanded="false"
                    >
                      <span className="text-[1.5rem] font-semibold leading-7">
                        What is Veezen?
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <svg
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>

                        <svg
                          className="hidden h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12" id="faq-0">
                    <p className="text-[1.2rem] leading-7 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Adipisci cupiditate, dignissimos in asperiores qui dolorem
                      numquam perferendis at, aliquid facilis veritatis quaerat
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Us */}
      <section className=" bg-[#275A55]">
        <div className="container">
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
                  <label className="text-[#eee] " htmlFor="first-name">
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
                  the overall success, productivity, and happiness of your team.
                  A mentally healthy workforce is a thriving workforce."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
