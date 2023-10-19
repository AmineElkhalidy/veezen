import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto py-40">
        <div className="h-screen grid place-items-center ">
          <div className="flex flex-col gap-10 md:gap-20 justify-center items-center">
            <img
              className="w-[80%]"
              src="/assets/images/404/404.svg"
              alt="404"
            />

            <div className="text-center px-4">
              <h3 className="text-[3.5rem] font-semibold text-primaryDark">
                Sorry!
              </h3>
              <p className="text-[2rem] mb-[4rem] ">
                The page you are looking for <br />
                seems to be not exist!
              </p>
              <div>
                <Link className="btn bg-primaryDark" href="/">
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
