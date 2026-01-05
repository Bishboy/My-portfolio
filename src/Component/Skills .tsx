import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

// Import your images
import html from "../assets/img/html-removebg-preview.png";
import css from "../assets/img/css-removebg-preview.png";
import js from "../assets/img/Js-removebg-preview.png";
import tailwind from "../assets/img/tailwind-removebg-preview.png";
import typescript from "../assets/img/ts-removebg-preview.png";
import next from "../assets/img/nextjs.jpg";
import Reat from "../assets/img/react-removebg-preview.png";

type SkillItem = {
  id: number;
  image: string;
  title: string;
};

const skills: SkillItem[] = [
  { id: 1, image: html, title: "HTML" },
  { id: 2, image: css, title: "CSS" },
  { id: 3, image: js, title: "JavaScript" },
  { id: 4, image: typescript, title: "TypeScript" },
  { id: 5, image: tailwind, title: "Tailwind CSS" },
  { id: 6, image: Reat, title: "React.js" },
  { id: 7, image: next, title: "Next.js" },
];

const bioText = `As a passionate front-end developer with a strong foundation in web
technologies, including HTML, CSS, and JavaScript, I specialize in
building responsive and visually engaging user interfaces using modern
frameworks like React and Next.js. My expertise in TypeScript allows
me to create scalable and type-safe applications, ensuring code
reliability and maintainability. In addition, I am proficient in
Tailwind CSS, which I leverage to implement clean, customizable, and
reusable UI components quickly. I thrive on creating efficient,
user-friendly experiences that seamlessly combine functionality and
aesthetics. My work reflects attention to detail, performance
optimization, and a constant drive to stay updated with the latest
industry trends.`;

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
isMobile
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const plugin = useCallback(
    () => Autoplay({ delay: 3000, stopOnInteraction: true }),
    []
  );

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skill" className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            whileHover={{ scale: 1.02 }}
          >
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4 text-base md:text-lg leading-relaxed">
              {showFullText ? bioText : `${bioText.substring(0, 300)}...`}
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="text-purple-400 ml-2 font-semibold hover:text-pink-400 transition-colors focus:outline-none underline decoration-purple-400/50 hover:decoration-pink-400"
              >
                {showFullText ? "Show Less" : "Read More"}
              </button>
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Carousel */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel
            plugins={[plugin()]}
            opts={{
              loop: true,
              align: "start",
              dragFree: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 py-4">
              {skills.map((skill, index) => (
                <CarouselItem
                  key={skill.id}
                  className="pl-2 basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <motion.div
                    variants={item}
                    custom={index}
                    className="h-full p-2"
                  >
                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 h-full group shadow-lg hover:shadow-purple-500/20">
                      <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          className="mb-6 relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                          <img
                            src={skill.image}
                            alt={skill.title}
                            className="w-28 h-28 object-contain relative z-10 filter drop-shadow-lg"
                          />
                        </motion.div>
                        <motion.h3 className="text-xl font-bold text-center text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {skill.title}
                        </motion.h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 bg-gray-900/80 backdrop-blur-sm hover:bg-purple-600/80 border border-gray-700/50 hover:border-purple-500/50 text-white shadow-lg" />
            <CarouselNext className="right-2 bg-gray-900/80 backdrop-blur-sm hover:bg-purple-600/80 border border-gray-700/50 hover:border-purple-500/50 text-white shadow-lg" />
          </Carousel>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Skills;
