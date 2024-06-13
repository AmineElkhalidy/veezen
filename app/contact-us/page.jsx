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

      <div className="isolate bg-white px-6 py-8 sm:py-16 lg:px-8">
        <form method="POST" className="mx-auto mt-8 max-w-4xl sm:mt-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-[1.7rem] font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block text-[1.6rem] w-full rounded-md border-0 py-[1.3rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryDark sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-[1.7rem] font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block text-[1.6rem] w-full rounded-md border-0  py-[1.3rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryDark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 mt-4">
              <label
                htmlFor="company"
                className="block text-[1.7rem] font-medium leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block text-[1.6rem] w-full rounded-md border-0 py-[1.3rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryDark sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 mt-4">
              <label
                htmlFor="email"
                className="block text-[1.7rem] font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block text-[1.6rem] w-full rounded-md border-0 py-[1.3rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryDark sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 mt-4">
              <label
                htmlFor="phone-number"
                className="block text-[1.7rem] font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block text-[1.6rem] w-full rounded-md border-0 py-[1.3rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryDark sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 mt-4">
              <label
                htmlFor="message"
                className="block text-[1.7rem] font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block text-[1.6rem] w-full rounded-md border-0 py-[1.3rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryDark sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center pt-px">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-primaryDark"></div>
                </label>
              </div>
              <label
                className="text-[1.4rem] leading-6 text-gray-600"
                id="switch-1-label"
              >
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-500">
                  privacy&nbsp;policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-lg bg-primaryDark py-5 text-center text-[1.7rem] font-semibold text-white shadow-sm"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
