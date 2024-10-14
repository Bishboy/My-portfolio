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

type Items = {
  id:number,
  image:string,
  title:string
}

const items:Items[] = [
  {
    id: 1,
    image: html,
    title: "HTML",
    // description: "This is the first item description.",
  },
  {
    id: 2,
    image: css,
    title: "CSS",
    // description: "This is the first item description.",
  },
  {
    id: 3,
    image: js,
    title: "Javascript",
    // description: "This is the first item description.",
  },
  {
    id: 4,
    image: typescript,
    title: "Typescript",
    // description: "This is the first item description.",
  },
  {
    id: 5,
    image: tailwind,
    title: "Tailwind",
    // description: "This is the first item description.",
  },
  {
    id: 6,
    image: Reat,
    title: "ReactJs",
    // description: "This is the first item description.",
  },
  {
    id: 7,
    image: next,
    title: "NextJs",
    // description: "This is the first item description.",
  },
];

const Skills:React.FC = () => {
  return (
    <section className=" ">
      <div className="text-white relative z-30 w-[90%] mt-[4rem] lg:py-[3rem] mx-auto flex flex-col items-center  gap-[1rem] md:gap-[2rem]">
        <h2 className="text-[3rem] uppercase font-bold strokeText hover:rotate-6 hover:text-white duration-700 ">
          Skills
        </h2>
        <p className="hover:translate-x-2 duration-500 hover:text-purple-300 text-sm">
          I am a passionate front-end developer with a strong foundation in web
          technologies, including HTML, CSS, and JavaScript. I specialize in
          building responsive and visually engaging user interfaces using modern
          frameworks like React and Next.js. My expertise in TypeScript allows
          me to create scalable and type-safe applications, ensuring code
          reliability and maintainability. In addition, I am proficient in
          Tailwind CSS, which I leverage to implement clean, customizable, and
          reusable UI components quickly. I thrive on creating efficient,
          user-friendly experiences that seamlessly combine functionality and
          aesthetics. My work reflects attention to detail, performance
          optimization, and a constant drive to stay updated with the latest
          industry trends.
        </p>
        <Carousel className="lg:w-full sm:w-[80%] w-[70%]  ">
          <CarouselContent className="-ml-1">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-1 basis md:basis-1/2 lg:basis-1/3 "
              >
                <div className="p-1 ">
                  <Card className="bg-white/100  duration-500 border-4 hover:shadow-xl  hover:border-purple-600">
                    <CardContent className="flex flex-col  items-center justify-center p-6 ">
                      {/* Custom image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-35 h-20 object-cover mb-4"
                      />
                      {/* Custom title */}
                      <span className="text-xl font-semibold mb-2">
                        {item.title}
                      </span>
                      {/* Custom description */}
                      <p className="text-sm text-gray-500">
                        {/* {item.description} */}
                      </p>
                    </CardContent>
                  </Card>
                </div>
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
