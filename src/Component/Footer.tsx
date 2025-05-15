// import React from "react";
import Navicon1 from "../assets/img/nav-icon1.svg";
import Navicon2 from "../assets/img/nav-icon2.svg";
import Navicon3 from "../assets/img/nav-icon3.svg";
// import logo from "../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#121212] w-full py-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          <div>
            <h1 className="text-white md:text-2xl xl font-bold">EMMANUEL</h1>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a
                href="#"
                className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out z-10 flex items-center justify-center border-2 border-white/20 shadow-lg overflow-hidden hover:border-purple-500"
              >
                <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>
                <img src={Navicon1} alt="LinkedIn" className="relative z-10" />
              </a>
              <a
                href="#"
                className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out z-10 flex items-center justify-center border-2 border-white/20 shadow-lg overflow-hidden hover:border-purple-500"
              >
                <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>
                <img src={Navicon2} alt="Facebook" className="relative z-10" />
              </a>
              <a
                href="#"
                className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out z-10 flex items-center justify-center border-2 border-white/20 shadow-lg overflow-hidden hover:border-purple-500"
              >
                <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>
                <img src={Navicon3} alt="Instagram" className="relative z-10" />
              </a>
            </div>
            <p className="text-white/70 text-sm mt-4">
              &copy; {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
