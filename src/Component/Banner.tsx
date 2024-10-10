import React, { useState, useEffect } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import headerImg from "../assets/img/header-img.svg";
import banner from "../assets/img/banner-bg.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Web Developer", "web Designer"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

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
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className=" py-[6rem] text-white px- relative">
      {" "}
      <div className="absolute top-0 z-10">
        <img src={banner} alt="" className="w-full h-auto object-cover"  />{" "}
      </div>
      <div className="flex items-center w-[90%] relative z-20 mx-auto">
        {" "}
        <div className="flex-1 gap-[4rem] flex flex-col">
          <span>Welcome to my Portfolio</span>
          <h1>
            {`Hi I'm Emmanuel`} <span>{text}</span>
          </h1>
          <p>
            A placeholder text commonly used to demonstrate the visual form of a
            document or a typeface without relying on meaningful content.
          </p>
          <button className="relative px-6 py-2 w-fit bg-white overflow-hidden rounded-lg text-black border border-black group hover:text-white ">
            <span className="relative flex items-center gap-2 font-bold z-10">
              Let's Connect <FiArrowRightCircle />
            </span>
            <div className="absolute inset-0 bg-purple-500 transition-transform transform translate-x-full group-hover:translate-x-0 duration-500"></div>
            <span className="absolute inset-0 z-20 text-black transition-colors duration-500 group-hover:text-white"></span>
          </button>
        </div>
        <div className="flex-1 relative z-20">
          <img src={headerImg} alt="header image" className="w-full h-auto" />{" "}
        </div>
      </div>
    </section>
  );
};

export default Banner;
