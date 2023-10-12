import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section class="bg-primaryLighter pt-[3rem] pb-[6rem] ">
        <div class="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-40 px-[2rem] md:flex-row lg:gap-10 ">
          <div class="text-center md:text-left md:w-full">
            <h1 class="heading-primary text-[3.5rem] mb-10 lg:text-[5.2rem] lg:mb-[3.2rem] ">
              Mental Health & Well-being in the Workplace
            </h1>
            <p class="hero-description">
              Unlocking Peak Performance: Nurturing Mental Health and Well-being
              in the Workplace. Explore the vital link between mental well-being
              and workplace productivity in this insightful examination of
              modern work culture.
            </p>

            <div class="mt-10 flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:gap-20 gap-3 mb-10">
              <div class="people-imgs">
                <img src="./assets/images/customers/customer-1.jpg" alt="" />
                <img src="./assets/images/customers/customer-2.jpg" alt="" />
                <img src="./assets/images/customers/customer-3.jpg" alt="" />
                <img src="./assets/images/customers/customer-4.jpg" alt="" />
                <img src="./assets/images/customers/customer-5.jpg" alt="" />
                <img src="./assets/images/customers/customer-6.jpg" alt="" />
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
              src="/assets/images/home/hero/hero.svg"
              width={450}
              height={450}
              className="object-contain lg:w-[600px] "
            />
          </div>
        </div>
      </section>
    </>
  );
}
