import React from "react";
import Navbar from "../components/Navbar";
//@ts-ignore
import java from "../../public/java.png";
import { FaJava } from "react-icons/fa";
import { merchandises } from "../../utils/merchandises";
import Footer from "../components/Footer";

function MerchandiseCard({ merchandise }: { merchandise: any }) {
  return (
    <div className="flex flex-col md:h-[450px] h-[450px] md:w-[350px] w-full rounded-xl my-2 ">
      <img
        src={merchandise.image}
        alt={merchandise.name}
        className="object-cover mx-2 rounded-lg md:h-[250px] h-[300px]"
      />
      <div className="mt-4">
        <h1 className="font-body font-bold underline">{merchandise.name}</h1>
        <h1 className="font-body text-sm leading-relaxed text-gray-600">
          {merchandise.description.substring(0, 75)}..{" "}
          <span className="text-[14px] underline text-blue-600 cursor-pointer">
            see more.
          </span>
        </h1>
        <h1 className="text-gray-400 text-xs font-body">
          {merchandise.colors.length} Colors || {merchandise.sizes.length} Sizes
        </h1>
      </div>
    </div>
  );
}

function Merchandise() {
  return (
    <div>
      <section
        className="relative h-[45vh] md:h-[35vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${java})` }}
      >
        <div className="relative z-10">
          <Navbar isHome />
        </div>
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <h1 className="relative text-white text-xl font-bold text-center mt-20 font-body">
          Kenya JUG STORE
          <FaJava size={64} className="mb-8 inline-block" />
        </h1>
        <p className="relative text-white text-center font-body">
          Get some merchandise and show your love for Java❤️
        </p>
      </section>
      <div className="max-w-[90rem] mx-auto my-0 pt-4">
        <div className="flex items-center justify-between md:flex-row flex-col">
          <div className="flex items-center justify-between text-sm md:text-base">
            <div>
              <select className="select select-ghost max-w-xs font-body py-2 focus:outline-none rounded-lg px-4">
                <option selected className="">
                  Category
                </option>
                <option>Flasks</option>
                <option>Caps</option>
                <option>T-shirts</option>
                <option>Hoodies</option>
              </select>
            </div>
            <div>
              <select className="select select-ghost max-w-xs font-body py-2 focus:outline-none rounded-lg px-4">
                <option selected className="">
                  Gender
                </option>
                <option>Unisex</option>
                <option>Female</option>
                <option>Male</option>
                <option>Kids</option>
              </select>
            </div>
            <div>
              <select className="select select-ghost max-w-xs font-body py-2 focus:outline-none rounded-lg px-4">
                <option selected className="">
                  Price
                </option>
                <option>KSH 200 - 999</option>
                <option>KSH 1000 - 2499</option>
                <option>Above KSH 2500</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-4 w-full md:w-1/2 mt-4 md:mt-0 md:mx-0">
            <div className="">
              <button className="bg-black w-full text-white font-bold font-body py-2 px-4 rounded-md mx-2">
                <h1>Sort</h1>
              </button>
            </div>
            <div className="">
              <button className="bg-black w-full text-white font-bold font-body py-2 px-4 rounded-md mx-2">
                <h1>Filter</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 justify-items-center  md:mx-0 mx-2">
          {merchandises.map((merchandise) => (
            <MerchandiseCard key={merchandise.id} merchandise={merchandise} />
          ))}
        </div>
        <div className="w-full items-center flex justify-center">
          <button className="bg-black text-white font-bold font-body py-2 px-4 rounded-md mx-2 mt-4 w-full md:w-1/2">
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Merchandise;
