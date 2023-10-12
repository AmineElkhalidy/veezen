import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primaryLighter pt-[3rem] pb-[6rem] ">
        <div className="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-40 px-[2rem] md:flex-row xl:px-0 lg:gap-10">
          <div className="text-center md:text-left md:w-full">
            <h1 className="heading-primary text-[3.5rem] mb-10 lg:text-[5.2rem] lg:mb-[3.2rem]">
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

          <div class="text-center self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              className="object-contain lg:w-[600px] "
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem]  ">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0">
          <h2 className="text-[30px] text-center font-semibold mb-20 md:mb-28">
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
      <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem] lg:pb-[9.6rem]">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0">
          <span class="subheading">How it works</span>
          <h2 class="heading-secondary">How can we help you?</h2>
        </div>

        <div class="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 grid grid--2-cols grid--center-v">
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
      <section class="bg-primaryLighter pt-[3rem] pb-[6rem] ">
        <div class="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-40 px-[2rem] md:flex-row xl:px-0 lg:gap-10">
          <div class="text-center md:text-left md:w-full">
            <h2 class="heading-secondary mb-8">Get to know about us</h2>
            <p class="hero-description">
              Veezen: Shaping Workplace Well-being. We specialize in
              transforming workplaces into nurturing, mental-health-focused
              environments, fostering employee happiness and business success.
            </p>

            <Link href="#meals" class="btn btn--primary">
              Learn more
            </Link>
          </div>

          <div class="text-center self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              className="object-contain lg:w-[600px] "
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem] lg:pb-[9.6rem]"
        id="pricing"
      >
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0">
          <span className="subheading">PRICING</span>
          <h2 className="heading-secondary">
            Start Your Journey With Us Today
          </h2>
        </div>

        {/* <div className="container grid grid--2-cols margin-bottom-md">
          <div className="pricing-plan pricing-plan--starter">
            <header className="plan-header">
              <p className="plan-name">Starter</p>
              <p className="plan-price">
                <span>$</span>399
              </p>
              <p className="plan-text">per month. That's just $13 per meal</p>
            </header>

            <ul className="list">
              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>1 meal per day</span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>Order from 11am and 9pm</span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>Delivery is free</span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon plan-icon"
                  name="close-outline"
                ></ion-icon>
              </li>
            </ul>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Start eating well
              </a>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--complete">
            <header className="plan-header">
              <p className="plan-name">Complete</p>
              <p className="plan-price">
                <span>$</span>649
              </p>
              <p className="plan-text">per month. That's just $13 per meal</p>
            </header>

            <ul className="list">
              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>
                  <strong>2 meals</strong> meals per day
                </span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>
                  Order <strong>24/7</strong>
                </span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>Delivery is free</span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>Get access to latest recipes</span>
              </li>
            </ul>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Start eating well
              </a>
            </div>
          </div>
        </div>

        <div className="container grid">
          <aside className="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div> */}

        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 grid grid--4-cols">
          <div className="feature">
            <img className="feature-icon" src="/assets/images/home/icon.svg" />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>

          <div className="feature">
            <img className="feature-icon" src="/assets/images/home/icon.svg" />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>

          <div className="feature">
            <img className="feature-icon" src="/assets/images/home/icon.svg" />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>

          <div className="feature">
            <img className="feature-icon" src="/assets/images/home/icon.svg" />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
