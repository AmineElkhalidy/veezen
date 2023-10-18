"use client";
import { Accordion } from "flowbite-react";

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
              src="/assets/images/home/1.jpg"
              alt="Photo of a happy client"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/2.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/3.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/4.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/5.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/6.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/7.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/8.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/9.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/10.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/11.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/12.jpg"
              alt="Photo of a happy client"
              srcset=""
              loading="lazy"
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

        <div className="max-w-6xl mx-auto px-[2rem] xl:px-0">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
                What is Veezen?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque cupiditate officiis praesentium suscipit
                    necessitatibus adipisci nisi beatae a, illo possimus.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
                What is Veezen?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque cupiditate officiis praesentium suscipit
                    necessitatibus adipisci nisi beatae a, illo possimus.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
                What is Veezen?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque cupiditate officiis praesentium suscipit
                    necessitatibus adipisci nisi beatae a, illo possimus.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Services;
