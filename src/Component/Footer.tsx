import React from "react";
import Navicon1 from "../assets/img/nav-icon1.svg";
import Navicon2 from "../assets/img/nav-icon2.svg";
import Navicon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer className="  ">
      <div className="w-[90%] mx-auto flex py-[5rem]  mt-[3rem]   justify-between  pt-4  px-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between ">
            <a
              href="#"
              className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out z-50 flex items-center justify-center border-2 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>

              <img src={Navicon1} alt="" className="relative z-10" />
            </a>
            <a
              href="#"
              className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out z-50 flex items-center justify-center border-2 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>

              <img src={Navicon2} alt="" className="relative z-10" />
            </a>
            <a
              href="#"
              className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out z-50 flex items-center justify-center border-2 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>

              <img src={Navicon3} alt="" className="relative z-10" />
            </a>
          </div>
          <p className="text-white">&copy; 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
