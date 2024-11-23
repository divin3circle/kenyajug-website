import React from "react";
import Navbar from "../components/Navbar";
//@ts-ignore
import java from "../../public/java.png";
import { FaJava } from "react-icons/fa";
import Events from "../components/Events";
import About from "../components/About";

function Landing() {
  return (
    <div>
      <section
        className="relative h-[85vh] md:h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${java})` }}
      >
        <div className="relative z-10">
          <Navbar isHome />
        </div>
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <h1 className="relative text-white top-1/4 text-6xl font-bold text-center mt-20 font-body">
          Kenya JUG
          <FaJava size={64} className="mb-8 inline-block" />
        </h1>
        <p className="relative text-white top-1/4 text-2xl text-center font-body">
          Join us as we connect, share, and grow the Java community in Kenya
        </p>
      </section>
      <section id="about" className="max-w-7xl mx-auto my-10">
        <About />
      </section>
      <section id="events" className="max-w-7xl mx-auto mt-10">
        <Events />
      </section>
    </div>
  );
}

export default Landing;
