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
    <section id="skill" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 py-[2rem]" >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white uppercase"
            whileHover={{ scale: 1.05 }}
          >
            My <span className="text-purple-400">Skills</span>
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              {showFullText ? bioText : `${bioText.substring(0, 300)}...`}
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="text-purple-400 ml-2 font-medium hover:underline focus:outline-none"
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
                    <Card className="bg-gray-900/50 border border-gray-700 hover:border-purple-500 transition-all duration-300 h-full group">
                      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="mb-6"
                        >
                          <img
                            src={skill.image}
                            alt={skill.title}
                            className="w-24 h-24 object-contain"
                          />
                        </motion.div>
                        <motion.h3 className="text-xl font-semibold text-center text-white group-hover:text-purple-400 transition-colors">
                          {skill.title}
                        </motion.h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 bg-gray-800/50 hover:bg-gray-700/70 border-none text-white" />
            <CarouselNext className="right-2 bg-gray-800/50 hover:bg-gray-700/70 border-none text-white" />
          </Carousel>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Skills;
