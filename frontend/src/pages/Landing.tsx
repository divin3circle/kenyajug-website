import React from "react";
import Navbar from "../components/Navbar";
import java from "../../public/java.png";

function Landing() {
  return (
    <div>
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${java})` }}
      >
        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </section>
    </div>
  );
}

export default Landing;
