import React from "react";
import { FaJava } from "react-icons/fa";
import { Link } from "react-router-dom";
//@ts-ignore
import logo from "../../public/logo.png";

function Navbar({ isHome }: { isHome: boolean }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={`font-body flex justify-between items-center mx-2 dark:text-white ${
        isHome ? "text-white" : "text-black"
      }`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-14 rounded-full w-14" />
        <h1 className="font-bold text-2xl">KenyaJug</h1>
      </Link>
      <div>
        <ul className="md:flex items-center gap-6 hidden">
          <a
            href="#about"
            className={`font-semibold text-lg hover:border-b-2 ${
              isHome ? "border-white" : "border-black"
            } transition-all cursor-pointer`}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#events"
            className={`font-semibold text-lg hover:border-b-2 ${
              isHome ? "border-white" : "border-black"
            } transition-all cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            Events
          </a>
          <Link
            to="/store"
            className={`font-semibold text-lg hover:border-b-2 ${
              isHome ? "border-white" : "border-black"
            } transition-all cursor-pointer`}
          >
            Store
          </Link>

          <Link
            to="/speakers"
            className={`font-semibold text-lg hover:border-b-2 ${
              isHome ? "border-white" : "border-black"
            } transition-all cursor-pointer`}
          >
            Speakers
          </Link>
        </ul>
      </div>
      <Link
        to="/members"
        className="md:flex items-center justify-center hidden"
      >
        <button className="bg-black text-white border-black border-[1px] hover:bg-white hover:text-black transition-all duration-150 ease-in px-4 py-1 gap-2 rounded-full flex items-center justify-center">
          <p className="">Join Jug</p>
          <FaJava size={24} className="mb-2" />
        </button>
      </Link>
      <div
        className="flex items-center justify-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaJava size={56} />
      </div>
      <div
        className={`backdrop-blur-lg h-screen w-full md:hidden flex flex-col fixed top-0 left-0 z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-1 mx-1">
          <Link to="/" className="flex items-center gap-2 mt-2">
            <img src={logo} alt="logo" className="h-14 rounded-full w-14" />
            <h1 className="font-bold text-2xl">KenyaJug</h1>
          </Link>
          <div
            className="flex items-center justify-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaJava size={44} />
          </div>
        </div>
        <ul className="flex flex-col h-full items-center gap-12 mt-20">
          <Link
            to="#about"
            className="font-semibold text-lg hover:border-b-2 border-black transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="#events"
            className="font-semibold text-lg hover:border-b-2 border-black transition-all cursor-pointer"
          >
            Events
          </Link>
          <Link
            to="/store"
            className="font-semibold text-lg hover:border-b-2 border-black transition-all cursor-pointer"
          >
            Store
          </Link>

          <Link
            to="/speakers"
            className="font-semibold text-lg hover:border-b-2 border-black transition-all cursor-pointer"
          >
            Speakers
          </Link>
        </ul>
        <Link to="/members" className="flex items-center justify-center my-8">
          <button className="bg-black text-white border-black border-[1px] hover:bg-white hover:text-black transition-all duration-150 ease-in px-4 py-1 gap-2 rounded-full flex items-center justify-center">
            <p className="">Join Jug</p>
            <FaJava size={24} className="mb-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
