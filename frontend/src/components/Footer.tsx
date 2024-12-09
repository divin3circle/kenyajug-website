import React from "react";
import { FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-gray-300 w-full mt-8 flex items-center sm:justify-between flex-col sm:flex-row justify-center h-[70px] px-4">
      <div className="flex items-center gap-1 font-body ">
        <p className="text-sm md:text-base font-body">KENYAJUG - </p>
        <p className="text-sm md:text-base font-body">
          © 2021 All rights reserved
        </p>
      </div>
      <div className="flex items-center gap-4 justify-center mt-4 sm:mt-0">
        <a href="#">
          <FaTwitter size={24} />
        </a>
        <a href="#">
          <FaYoutube size={24} />
        </a>
        <a href="#">
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
