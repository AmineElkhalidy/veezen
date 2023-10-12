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
    </>
  );
}
