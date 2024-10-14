import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import { Button } from "@/components/ui/button";
import Navicon1 from "../assets/img/nav-icon1.svg";
import Navicon2 from "../assets/img/nav-icon2.svg";
import Navicon3 from "../assets/img/nav-icon3.svg";

const Header = () => {
  const [active, setActive] = useState<string>("");
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`${
          scroll ? "bg-black/80 backdrop-blur-lg z-50 fixed  " : ""
        } px-6 w-full  flex items-center justify-between top-0 z-50 fixed `}
      >
        <img src={logo} alt={logo} className="w-[3rem] h-[4rem]" />
        <div>
          <span></span>
        </div>

        <ul className="flex gap-[3rem] font-bold">
          <li
            onClick={() => setActive("home")}
            className={`${
              active === "home"
                ? "text-purple-500 opacity-[1] underline transition duration-1000 ease-in-out  underline-offset-4 decoration-[0.3rem]"
                : "text-white opacity-[0.75]"
            }`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={() => setActive("skill")}
            className={`${
              active === "skill"
                ? "text-purple-500 opacity-[1] transition duration-1000 ease-in-out underline underline-offset-4 decoration-[0.3rem]"
                : "text-white opacity-[0.75]"
            }`}
          >
            <a href="#skill">Skill</a>
          </li>
          <li
            onClick={() => setActive("project")}
            className={`${
              active === "project"
                ? "text-purple-500 underline underline-offset-4 transition duration-1000 ease-in-out  opacity-[1] decoration-[0.3rem]"
                : " text-white opacity-[0.75]"
            }`}
          >
            <a href="#project">Project</a>
          </li>
        </ul>

        <div className="flex items-center gap-[2rem]">
          <div className="flex items-center gap-4  ">
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
          {/* <Button>Lets connect</Button> */}
          <button className="relative px-6 py-2 bg-white overflow-hidden rounded-lg text-black  border border-black group  hover:text-white ">
            <span className="relative font-bold z-10 ">Let's Connect</span>
            <div className="absolute inset-0 bg-purple-500 transition-transform transform translate-x-full group-hover:translate-x-0 duration-500"></div>
            <span className="absolute inset-0 z-20 text-black transition-colors duration-500 group-hover:text-white"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
