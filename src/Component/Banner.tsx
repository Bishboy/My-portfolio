import React, { useState, useEffect } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import headerImg from "../assets/img/header-img.svg";
import banner from "../assets/img/banner-bg.png";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const toRotate:string[] = ["Web Developer.", "Web Designer."];
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(1);
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const period:number = 2000;  

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "W") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className=" lg:py-[6rem] pt-[8rem]  text-white px- relative">
      {" "}
      <div className="absolute top-0 z-10">
        <img
          src={banner}
          alt=""
          className="w-[100vw]  lg:h-auto h-screen  object-cover"
        />{" "}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center w-[90%] relative z-20 mx-auto">
        {" "}
        <motion.div
          initial={{ x: -100 }}
          whileInView ={{ x: 0 }}
          transition={{ duration: 1, stiffness: 200,type:'spring' }}
          className="flex-1 lg:gap-[3rem]    sm:gap-[2rem] gap-[1rem]  flex flex-col"
        >
          <span className="lg:text-[1.5rem] bg-gradient-to-r from-purple-950 to-purple-600 rounded-2xl hover:scale-105 duration-500 w-fit py-2 px-6 sm:text-[1.2rem] text-base font-bold">
            Welcome to my <span className="strokeText">Portfolio</span>{" "}
          </span>
          <h1 className="lg:text-[3rem] flex flex-col sm:text-[2rem] text-[1.6rem] font-bold">
            {`Hi, I'm Emmanuel a`} <span className="strokeText">{text}</span>
          </h1>
          <p className="sm:text-base text-sm">
            I'm a passionate frontend developer, that combines creativity and
            technical prowess to craft visually stunning and user-friendly web
            experiences.
          </p>
          <button className="relative px-6 py-2 w-fit bg-white overflow-hidden rounded-lg text-black border border-black group hover:text-white ">
            <span className="relative flex items-center gap-2 font-bold z-10">
              Let's Connect <FiArrowRightCircle />
            </span>
            <div className="absolute inset-0 bg-purple-500 transition-transform transform translate-x-full group-hover:translate-x-0 duration-500"></div>
            <span className="absolute inset-0 z-20 text-black transition-colors duration-500 group-hover:text-white"></span>
          </button>
        </motion.div>
        <motion.div
          initial={{ y: -400 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex-1 relative  z-20"
        >
          <img
            src={headerImg}
            alt="header image"
            className=" lg:w-full animate-updown sm:w-[30rem] w-[23rem] h-auto"
          />{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
