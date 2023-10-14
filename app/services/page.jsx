import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2
            className="heading-secondary text-center"
            style={{ color: "white" }}
          >
            Services
          </h2>
        </div>
      </div>

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
    </>
  );
};

export default Services;
