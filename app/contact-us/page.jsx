import React from "react";

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

      <section className="mt-20">
        <div className="grid md:grid-cols-[2fr_1fr] ">
          {/* Form */}
          <div className="px-[2rem] w-full pt-[9.6rem] pb-[6rem] ">
            {/* <div className="mb-[10rem] md:mb-[8rem] ">
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
            </div> */}

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

              <div className="col-span-2">
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

          {/* Social media */}
          <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
