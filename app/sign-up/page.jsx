import React from "react";

const SignUp = () => {
  return (
    <section className="bg-gray-50 min-h-screen h-full py-[3rem] flex items-center lg:flex-row-reverse">
      <div className="flex w-full justify-center items-center px-[2rem]">
        <div className="w-full bg-white rounded-lg shadow-md md:mt-0 sm:max-w-md md:max-w-4xl lg:max-w-3xl xl:p-0 ">
          <div className="p-[2rem] space-y-4 md:space-y-6 sm:p-8">
            <a
              href="#"
              className="flex items-center mb-6 text-[4rem] font-semibold text-primaryDark"
            >
              Veezen
            </a>

            <h1
              className="text-[2.5rem] font-bold leading-tight tracking-tight text-gray-900 "
              style={{ marginBottom: "2rem" }}
            >
              Create an account
            </h1>

            <form className="space-y-4 md:space-y-6 " action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-[1.8rem] font-medium text-gray-900 "
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.6rem] rounded-xl focus:border-primaryDark block w-full p-[1.4rem] "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-[1.8rem] font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.6rem] rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-[1.4rem] "
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-[1.8rem] font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.6rem] rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-[1.4rem] "
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-[1.8rem] font-medium text-gray-900 "
                >
                  Who you are?
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.6rem] rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-[1.4rem]"
                  required=""
                >
                  <option value="client">Client</option>
                  <option value="doctor">Doctor</option>
                  <option value="entreprise">Entreprise</option>
                </select>
              </div>

              <div className="flex items-center">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-7 h-7 border-gray-300 rounded bg-gray-50 checked:bg-primaryDark"
                  />
                </div>
                <div className="ml-3 text-[1.6rem]">
                  <label htmlFor="terms" className="font-light text-gray-600 ">
                    I accept the{" "}
                    <a
                      className="font-medium text-primaryDark hover:underline "
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primaryDark font-medium rounded-lg text-[1.8rem] px-[1.6rem] py-[1.2rem] text-center"
              >
                Create an account
              </button>

              <p className="text-[1.6rem] font-light text-gray-600 ">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primaryDark hover:underline "
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-full">
        <img src="/assets/images/sign-up/signup.svg" alt="Office" />
      </div>
    </section>
  );
};

export default SignUp;
