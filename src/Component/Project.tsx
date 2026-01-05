import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import beach from "../assets/img/beach.png";
import disney from "../assets/img/disney.png";
import Netflix from "../assets/img/netflix.png";
import Dcabon from "../assets/img/dcarbon.png";
import whistle from "../assets/img/whistle.png";
import larengold from "../assets/img/larein.png"
import gym from "../assets/img/gym.png";
import Dashboard from "../assets/img/dashboard.png";
import Assured from "../assets/img/Assured.png";
import creeters from "../assets/img/critters.png"
import quizvideo from "../assets/font/project.mp4"
import { FaEye, FaGithub } from "react-icons/fa";

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
};


const data: ProjectItem[] = [
  {
    id: 1,
    title: "Lareinegold",
    description:
      "Lareine Gold Consulting (LGC Africa) is a specialist advisory that helps African law firms and legal teams grow by adapting global marketing and business development strategies to the African market.",
    image: larengold,
    link: "https://www.lareinegold.com/",
  },
  {
    id: 2,
    title: "Quiz App",
    description:
      "A quiz app built with React, TypeScript, and Tailwind CSS. It allows users to take quizzes and track their progress.",
    image: "",
    video: quizvideo,
    link: "https://quizapp-xi-virid.vercel.app/",
  },
  {
    id: 3,
    title: "Critterscrew",
    description:
      "Critter's Crew is a collection of digital art with exclusive Critter's Crew NFT collection. Unique, powerful, and ready to be owned.",
    image: creeters,
    link: "https://critter-s-crew.vercel.app/",
  },
  {
    id: 4,
    title: "Dcarbon",
    description:
      "A sustainability platform helping businesses reduce their carbon footprint through innovative solutions and tracking tools.",
    image: Dcabon,
    link: "https://dcarbon.solutions/",
  },
  {
    id: 5,
    title: "Whistle",
    description:
      "A whistleblowing platform that enables secure and anonymous reporting of workplace misconduct and ethical violations.",
    image: whistle,
    link: "https://whistle-puce.vercel.app/",
  },
  {
    id: 6,
    title: "AssuredTips",
    description:
      "Sports betting tips platform providing expert predictions and analysis for football matches worldwide.",
    image: Assured,
    link: "https://assured-tips-j7r3.vercel.app/",
  },
  {
    id: 7,
    title: "FundCirkle DB",
    description:
      "Admin dashboard for managing investment funds, tracking performance metrics, and generating financial reports.",
    image: Dashboard,
    link: "https://circkle-admin.vercel.app/",
  },
  {
    id: 8,
    title: "Beaches",
    description:
      "Travel platform showcasing the world's most beautiful beaches with booking functionality and user reviews.",
    image: beach,
    link: "https://beaches-sigma.vercel.app/",
  },
  {
    id: 9,
    title: "Gym Club",
    description:
      "Fitness platform offering workout plans, class schedules, and membership management for gym enthusiasts.",
    image: gym,
    link: "https://gym-app-six-omega.vercel.app/",
  },
  {
    id: 10,
    title: "Netflix Clone",
    description:
      "A functional clone of Netflix with movie browsing, trailers, and user profiles built with React and Firebase.",
    image: Netflix,
    link: "https://netflix-clone-one-gules.vercel.app/",
  },
  {
    id: 11,
    title: "Disney+ Clone",
    description:
      "Disney+ streaming service replica featuring Disney's content library with responsive design.",
    image: disney,
    link: "https://disney-clone-black-two.vercel.app/",
  },
];
const Project: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      isMobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    normal: {
      scale: 1,
      filter: "brightness(1)",
    },
    hovered: {
      scale: 1.05,
      filter: "brightness(0.7)",
    },
  };

  const overlayVariants = {
    normal: {
      opacity: 0.8,
      y: 20,
    },
    hovered: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="project"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="text-white relative w-[90%] max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col gap-8 mb-12">
          <motion.h1
            variants={cardVariants}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h1>

          <motion.p
            variants={cardVariants}
            className="text-base md:text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
          >
            A collection of web projects built with problem-solving, clean code,
            and polished design.
          </motion.p>

          <motion.div className="relative w-full" variants={containerVariants}>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {data.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="relative rounded-2xl overflow-hidden group h-full min-h-[350px] bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    {project.video ? (
                      <motion.video
                        src={project.video}
                        className="w-full h-full object-cover"
                        initial="normal"
                        animate={hoveredCard === project.id ? "hovered" : "normal"}
                        variants={imageVariants}
                        transition={{ duration: 0.3 }}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial="normal"
                        animate={hoveredCard === project.id ? "hovered" : "normal"}
                        variants={imageVariants}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <motion.div
                    className="flex flex-col justify-between p-6 h-[calc(100%-12rem)]"
                    initial="normal"
                    animate={hoveredCard === project.id ? "hovered" : "normal"}
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center gap-3">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm font-semibold shadow-lg shadow-purple-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaEye /> View Project
                      </motion.a>
                      <motion.a
                        href={`https://github.com/yourusername/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50 hover:border-purple-500/50 text-white p-2.5 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={18} />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
