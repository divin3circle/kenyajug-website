import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Speakers() {
  return (
    <div>
      <Navbar isHome={false} />
      <div className="px-2 my-4 md:mt-8 overflow-hidden max-w-[90rem] flex flex-col items-center">
        <h1 className="font-bold font-body text-3xl md:text-4xl text-center leading-relaxed">
          We'd Love to Hear from You!
        </h1>
        <p className="font-body text-gray-500 text-base md:text-sm mt-2 w-full md:w-3/4 lg:w-1/2">
          We're hosting speakers from all over the country to share their
          knowledge and experience with you. If interested in speaking at our
          event, please reach out to us via the form below.
        </p>
      </div>
      <section className="flex items-center justify-center flex-col mt-12 mx-1">
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start gap-2 lg:gap-8 w-full lg:w-[80rem]">
          <div className="w-full lg:w-1/2 px-1">
            <img
              src="https://images.stockcake.com/public/7/9/c/79c01653-2496-4917-841e-92c7aad42de8_large/technology-conference-talk-stockcake.jpg"
              alt="speakers"
              className="object-cover w-full h-[500px] rounded-lg"
            />
          </div>
          <div className="mt-8 lg:mt-0 rounded-lg w-full lg:w-1/2">
            <h1 className="font-bold font-body text-xl leading-relaxed">
              Please Enter your details
            </h1>
            <p className="text-gray-500 font-body text-base mb-4 leading-relaxed">
              Start your speaker journey today!
            </p>
            <div className="flex flex-col gap-4">
              <label className="input input-bordered flex items-center gap-2 font-bold font-body">
                Name
                <input
                  type="text"
                  className="grow font-medium"
                  placeholder="Daisy Wanyama"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 font-bold font-body">
                Email
                <input
                  type="text"
                  className="grow font-medium"
                  placeholder="wanyamad24@gmail.com"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 font-bold font-body">
                Current Job
                <input
                  type="text"
                  className="grow font-medium"
                  placeholder="Developer Relations At I&M Bank"
                />
              </label>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full font-body font-bold"
              ></textarea>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center mt-8">
        <button className="rounded-md bg-black text-white font-body font-bold text-lg mt-4 mb-8 lg:py-4 py-2 px-4 lg:px-8">
          Submit Details
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Speakers;
