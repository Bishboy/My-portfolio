import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import html from "../assets/img/html-removebg-preview.png";
import css from "../assets/img/css-removebg-preview.png";
import js from "../assets/img/Js-removebg-preview.png";
import tailwind from "../assets/img/tailwind-removebg-preview.png";
import typescript from "../assets/img/ts-removebg-preview.png";
import next from "../assets/img/next-removebg-preview (1).png";
import Reat from "../assets/img/react-removebg-preview.png";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

type Items = {
  id: number;
  image: string;
  title: string;
};

const items: Items[] = [
  {
    id: 1,
    image: html,
    title: "HTML",
  },
  {
    id: 2,
    image: css,
    title: "CSS",
  },
  {
    id: 3,
    image: js,
    title: "Javascript",
  },
  {
    id: 4,
    image: typescript,
    title: "Typescript",
  },
  {
    id: 5,
    image: tailwind,
    title: "Tailwind",
  },
  {
    id: 6,
    image: Reat,
    title: "ReactJs",
  },
  {
    id: 7,
    image: next,
    title: "NextJs",
  },
];

const myText = `As a passionate front-end developer with a strong foundation in web
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

const Skills: React.FC = () => {
  const mobile = window.innerWidth <= 788 ? true : false;
  const [showFullText, setShowFullText] = useState(false);

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    if (showFullText) return text;
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const plugin = useCallback(
    () => Autoplay({ delay: 2500, stopOnInteraction: true }),
    []
  );

  return (
    <section id="skill" className="">
      <div className="text-white relative z-30 w-[90%] mt-[4rem] lg:py-[3rem] mx-auto flex flex-col items-center gap-[1rem] md:gap-[2rem]">
        <motion.h2
          initial={{ opacity: 0, x: mobile ? 100 : 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring" }}
          className="md:text-[3rem] text-[2rem] uppercase font-bold strokeText hover:rotate-6 hover:text-white"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="hover:translate-x-2 duration-500 mt-4 text-center hover:text-purple-300 text-sm"
        >
          {truncateText(myText, 300)}
          <button
            className="text-blue-400 cursor-pointer italic ml-1 focus:outline-none"
            onClick={() => setShowFullText(!showFullText)}
          >
            {showFullText ? "Show Less" : "Show More"}
          </button>
        </motion.p>
        <Carousel
          className="lg:w-full sm:w-[80%] w-[70%]"
          plugins={[plugin()]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-1 basis md:basis-1/2 lg:basis-1/3"
              >
                <motion.div className="p-1">
                  <Card className="bg-white/100 duration-500 border-4 hover:shadow-xl hover:border-purple-600">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-35 h-20 object-cover mb-4"
                      />
                      <span className="text-xl font-semibold mb-2">
                        {item.title}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
