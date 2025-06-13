import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import beach from "../assets/img/beach.png";
import disney from "../assets/img/disney.png";
import Netflix from "../assets/img/netflix.png";
import Dcabon from "../assets/img/dcarbon.png";
import whistle from "../assets/img/whistle.png";
import gym from "../assets/img/gym.png";
import Dashboard from "../assets/img/dashboard.png";
import Assured from "../assets/img/Assured.png";
import { FaEye, FaGithub } from "react-icons/fa";

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};


const data: ProjectItem[] = [
  {
    id: 1,
    title: "Dcarbon",
    description:
      "A sustainability platform helping businesses reduce their carbon footprint through innovative solutions and tracking tools.",
    image: Dcabon,
    link: "https://dcarbon.solutions/",
  },
  {
    id: 8,
    title: "Whistle",
    description:
      "A whistleblowing platform that enables secure and anonymous reporting of workplace misconduct and ethical violations.",
    image: whistle,
    link: "https://whistle-puce.vercel.app/",
  },
  {
    id: 9,
    title: "AssuredTips",
    description:
      "Sports betting tips platform providing expert predictions and analysis for football matches worldwide.",
    image: Assured,
    link: "https://assured-tips-j7r3.vercel.app/",
  },
  {
    id: 10,
    title: "FundCirkle DB",
    description:
      "Admin dashboard for managing investment funds, tracking performance metrics, and generating financial reports.",
    image: Dashboard,
    link: "https://circkle-admin.vercel.app/",
  },
  {
    id: 3,
    title: "Beaches",
    description:
      "Travel platform showcasing the world's most beautiful beaches with booking functionality and user reviews.",
    image: beach,
    link: "https://beaches-sigma.vercel.app/",
  },
  {
    id: 4,
    title: "Gym Club",
    description:
      "Fitness platform offering workout plans, class schedules, and membership management for gym enthusiasts.",
    image: gym,
    link: "https://gym-app-six-omega.vercel.app/",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description:
      "A functional clone of Netflix with movie browsing, trailers, and user profiles built with React and Firebase.",
    image: Netflix,
    link: "https://netflix-clone-one-gules.vercel.app/",
  },
  {
    id: 7,
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
      className="w-[90%] mt-5 flex flex-col items-center gap-4 mx-auto 
           bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
           from-purple-300/20 via-purple-500/30 to-purple-600/20 
           py-[3rem] px-4 rounded-2xl
           border border-purple-500/20
           shadow-lg shadow-purple-500/10
           backdrop-blur-sm"
    >
      <motion.div
        className="text-white relative w-full max-w-7xl"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mt-[2rem] flex flex-col gap-[2rem]">
          <motion.h1
            variants={cardVariants}
            className="text-center text-3xl md:text-4xl font-bold uppercase hover:text-purple-300 transition-colors"
          >
            My <span className="text-purple-400">Projects</span>
          </motion.h1>

          <motion.p
            variants={cardVariants}
            className="text-sm md:text-base text-gray-300 hover:text-purple-200 text-center md:max-w-[60%] mx-auto leading-relaxed"
          >
            A collection of web projects built with problem-solving, clean code,
            and polished design.
          </motion.p>

          <motion.div className="relative w-full" variants={containerVariants}>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {data.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="relative rounded-2xl overflow-hidden group h-full min-h-[300px]"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl"
                    initial="normal"
                    animate={hoveredCard === project.id ? "hovered" : "normal"}
                    variants={imageVariants}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent  flex flex-col justify-end p-6"
                    initial="normal"
                    animate={hoveredCard === project.id ? "hovered" : "normal"}
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
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
                        className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={20} />
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
