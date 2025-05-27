import { useState, useEffect, useRef } from "react";
// import logo from "../assets/img/logo.svg";
import Navicon1 from "../assets/img/nav-icon1.svg";
import Navicon2 from "../assets/img/nav-icon2.svg";
import Navicon3 from "../assets/img/nav-icon3.svg";
import { MobileNavbar } from "./MobileNavbar";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

type ActiveLink = "home" | "skill" | "project" | "contact" | "";

const Header = () => {
  const [active, setActive] = useState<ActiveLink>("home");
  const [scroll, setScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sectionsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll("section[id]")
    
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }

       if(sectionsRef.current){
        const scrollPosition = window.scrollY + 100;

        sectionsRef.current.forEach((section)=> {

          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id") as ActiveLink;

          if( 
            scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight
          ){
            setActive(sectionId)
          }
        })
       }
     
      
    };

    window.addEventListener("scroll", handleScroll);

  
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[]);

  const headVariant = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  return (
    <header className="max-w-[1660px] mx-auto w-full">
      <motion.nav
        variants={headVariant}
        initial="hidden"
        animate="visible"
        className={`${
          scroll ? "bg-black/80 backdrop-blur-lg z-50 fixed p-4 " : ""
        } px-6 w-full flex items-center justify-between top-0 z-50 fixed p-4`}
      >
        <h1 className="text-white md:text-2xl xl font-bold">EMMANUEL</h1>

        {/* <img src={logo} alt="Logo" className="w-[3rem] h-[4rem]" /> */}
        <div>
          <span></span>
        </div>
        <MobileNavbar isOpen={isOpen} closeMenu={closeMenu} />
        <ul className="lg:flex gap-[3rem] font-bold hidden">
          <li
            onClick={() => setActive("home")}
            className={`${
              active === "home"
                ? "text-purple-500 opacity-[1] underline transition duration-1000 ease-in-out underline-offset-4 decoration-[0.3rem]"
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
            <a href="#skill">Skills</a>
          </li>
          <li
            onClick={() => setActive("project")}
            className={`${
              active === "project"
                ? "text-purple-500 underline underline-offset-4 transition duration-1000 ease-in-out opacity-[1] decoration-[0.3rem]"
                : "text-white opacity-[0.75]"
            }`}
          >
            <a href="#project">Projects</a>
          </li>
          <li
            onClick={() => setActive("contact")}
            className={`${
              active === "contact"
                ? "text-purple-500 underline underline-offset-4 transition duration-1000 ease-in-out opacity-[1] decoration-[0.3rem]"
                : "text-white opacity-[0.75]"
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="lg:flex items-center gap-[2rem] hidden">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/uduak-emmanuel-11941b1b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out flex items-center justify-center border-2 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>
              <img src={Navicon1} alt="LinkedIn" className="relative" />
            </a>
            <a
            target="_blank"
              href="https://github.com/Bishboy"
              className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out flex items-center justify-center border-2 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>
              <FaGithub className="text-white relative " />
            </a>
            <a
              href="https://x.com/iam_bishboy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] relative group rounded-full duration-500 ease-in-out z-50 flex items-center justify-center border-2 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></div>
              <BsTwitterX className="text-white relative"  />
            </a>
          </div>
          <button className="relative px-6 py-2 bg-white overflow-hidden rounded-lg text-black border border-black group hover:text-white">
            <a href="#contact" className="relative font-bold z-50">
              Let's Connect
            </a>
            <div className="absolute inset-0 bg-purple-500 transition-transform transform translate-x-full group-hover:translate-x-0 duration-500"></div>
            <span className="absolute inset-0 z-20 text-black transition-colors duration-500 group-hover:text-white"></span>
          </button>
        </div>
        <div className="bg-white p-3 lg:hidden z-40 px-3 flex items-baseline justify-center rounded-[50%]">
          <button onClick={toggleMenu} className="relative rounded">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
