import React from "react";
import { FaJava } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="font-body flex justify-between items-center mx-2 text-white">
      <div className="flex items-center gap-2">
        <img
          src="../../public/logo.png"
          alt="logo"
          className="h-14 rounded-full w-14"
        />
        <h1 className="font-bold text-2xl">KenyaJug</h1>
      </div>
      <div>
        <ul className="md:flex items-center gap-6 hidden">
          <li className="font-semibold text-lg hover:border-b-2 border-white transition-all cursor-pointer">
            Events
          </li>
          <li className="font-semibold text-lg hover:border-b-2 border-white transition-all cursor-pointer">
            Members
          </li>
          <li className="font-semibold text-lg hover:border-b-2 border-white transition-all cursor-pointer">
            About
          </li>
          <li className="font-semibold text-lg hover:border-b-2 border-white transition-all cursor-pointer">
            Speakers
          </li>
        </ul>
      </div>
      <div className="md:flex items-center justify-center hidden">
        <button className="bg-black text-white border-black border-[1px] hover:bg-white hover:text-black transition-all duration-150 ease-in px-4 py-1 gap-2 rounded-full flex items-center justify-center">
          <p className="">Join Jug</p>
          <FaJava size={24} className="mb-2" />
        </button>
      </div>
      <div
        className="flex items-center justify-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaJava size={44} />
      </div>
      <div
        className={`backdrop-blur-lg h-screen w-full md:hidden flex flex-col fixed top-0 left-0 z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-1 mx-1">
          <div className="flex items-center gap-2 mt-2">
            <img
              src="../../public/logo.png"
              alt="logo"
              className="h-14 rounded-full w-14"
            />
            <h1 className="font-bold text-2xl">KenyaJug</h1>
          </div>
          <div
            className="flex items-center justify-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaJava size={44} />
          </div>
        </div>
        <ul className="flex flex-col h-full items-center gap-12 mt-20">
          <li className="font-semibold text-lg hover:border-b-2 border-black transition-all cursor-pointer">
            Events
          </li>
          <li className="font-semibold text-lg hover:border-b-2 border-black transition-all cursor-pointer">
            Members
          </li>
          <li className="font-semibold text-lg hover:border-b-2 border-black transition-all cursor-pointer">
            About
          </li>
          <li className="font-semibold text-lg hover:border-b-2 border-black transition-all cursor-pointer">
            Speakers
          </li>
        </ul>
        <div className="flex items-center justify-center my-8">
          <button className="bg-black text-white border-black border-[1px] hover:bg-white hover:text-black transition-all duration-150 ease-in px-4 py-1 gap-2 rounded-full flex items-center justify-center">
            <p className="">Join Jug</p>
            <FaJava size={24} className="mb-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
