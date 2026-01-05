import React, { useState, useEffect } from "react";
import { FiArrowRightCircle, FiDownload } from "react-icons/fi";
import headerImg from "../assets/img/header-img.svg";
import banner from "../assets/img/banner-bg.png";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const toRotate: string[] = ["Web Developer.", "Web Designer."];
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(1);
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const [openModal, setOpenModal] = useState(false);
  const period: number = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, index]);

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
    <section
      id="home"
      className="min-h-screen lg:py-[8rem] pt-[8rem] pb-[4rem] text-white relative overflow-hidden flex items-center"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={banner}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-[90%] max-w-7xl relative z-20 mx-auto">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start lg:text-start text-center gap-6 lg:gap-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2.5 text-sm md:text-base font-semibold text-purple-300 hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20"
          >
            Welcome to my <span className="text-white font-bold">Portfolio</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="block">Hi, I'm Emmanuel</span>
            <span className="block mt-2">
              Your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                {text}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
          >
            A passionate frontend developer who combines creativity and
            technical prowess to craft visually stunning and user-friendly web
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 flex-col sm:flex-row items-center w-full sm:w-auto mt-4"
          >
            <motion.a
              href="#contact"
              className="relative px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden rounded-lg text-white font-semibold text-sm sm:text-base group shadow-lg shadow-purple-500/30 w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Let's Connect <FiArrowRightCircle className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.button
              onClick={() => setOpenModal(true)}
              className="relative px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden rounded-lg text-white font-semibold text-sm sm:text-base group hover:border-purple-500/50 transition-all duration-300 w-full sm:w-auto shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View CV <FiDownload className="group-hover:translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative z-20 flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
            <img
              src={headerImg}
              alt="Header illustration"
              className="relative lg:w-full w-[18rem] h-auto animate-updown drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
};

export default Banner;
