import React from "react";
import { java2 } from "../../utils/index";

function About() {
  return (
    <div className="-mt-2 ">
      <h1 className="text-3xl font-bold font-body p-1">About Us</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <p className="leading-relaxed text-sm font-body text-gray-600 dark:text-gray-400 w-full md:w-3/4 lg:w-1/2 mb-4 px-2">
          The Kenya Java User Group is an excellent platform to connect,
          communicate, and collaborate with fellow Java developers. It provides
          opportunities to access valuable information, share resources and
          solutions, enhance networking, and deepen expertise in Java
          technology. Above all, our mission is to foster a more inclusive Java
          developer community in Kenya.
        </p>
        <div>
          <img src={java2} alt="Java" className="sm:w-1/2" />
        </div>
      </div>
      {/* <InfiniteMovingCardsDemo /> */}
    </div>
  );
}

export default About;
