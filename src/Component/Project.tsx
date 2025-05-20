
import beach from '../assets/img/beach.png'
import Food from '../assets/img/food.png'
import disney from '../assets/img/disney.png'
import Netflix from '../assets/img/netflix.png'
import Dcabon from '../assets/img/dcarbon.png'
import whistle from '../assets/img/whistle.png'
import gym from '../assets/img/gym.png'
import Dashboard from '../assets/img/dashboard.png'
import Assured from "../assets/img/Assured.png"
import cocktail from '../assets/img/cocktail.png'
import { FaEye } from "react-icons/fa";
import { motion } from 'framer-motion'
 

type Items = {
    id:number,
    title:string,
    description:string,
    image:string,
    link: string
}

const data: Items[] = [
  {
    id: 1,
    title: "Dcarbon",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: Dcabon,
    link: "https://dcarbon.solutions/",
  },
  {
    id: 8,
    title: "Whistle",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: whistle,
    link: " https://whistle-puce.vercel.app/",
  },
  {
    id: 9,
    title: "AssuredTips",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: Assured,
    link: " https://assured-tips-j7r3.vercel.app/",
  },
  {
    id: 10,
    title: "FundCirkle DB",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: Dashboard,
    link: " https://circkle-admin.vercel.app/",
  },
  {
    id: 2,
    title: "Food Shop",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: Food,
    link: "https://github.com/Bishboy/foodshop",
  },
  {
    id: 3,
    title: "Beaches",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: beach,
    link: "https://github.com/Bishboy/beaches",
  },
  {
    id: 4,
    title: "Gym Club",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: gym,
    link: "https://github.com/Bishboy/GymApp",
  },
  {
    id: 5,
    title: "Cocktail Shop",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: cocktail,
    link: "https://github.com/Bishboy/cocktail",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: Netflix,
    link: "https://github.com/Bishboy/netflix-clone",
  },
  {
    id: 7,
    title: "Disney ",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ips",
    image: disney,
    link: "https://github.com/Bishboy/Disney-clone",
  },
];

 

const Project :React.FC = () => {
  //  const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});
  //  const mobile = window.innerWidth <= 788 ? true : false;
   
    // const toggleShowMore = (id: number) => {
    //   setShowMore((prevState) => ({
    //     ...prevState,
    //     [id]: !prevState[id],
        
    //   }));
    // };

  return (
    <section
      id="project"
      className="w-[90%] mt-5 flex flex-col items-center gap-4 mx-auto 
           bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
           from-purple-300/20 via-purple-500/30 to-purple-600/20 
           py-[2rem] px-4 rounded-2xl
           border border-purple-500/20
           shadow-lg shadow-purple-500/10
           backdrop-blur-sm"
    >
      <div className="text-white relative">
        <div className="  mt-[2rem] flex flex-col gap-[2rem] ">
          {/* responsive issue */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            className="text-center text-2xl font-bold strokeText uppercase hover:translate-x-1 "
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm hover:text-purple-200 text-center md:max-w-[50%] mx-auto"
          >
            A collection of web projects—from business sites to apps, e-commerce
            stores, and Netflix clones—each built with problem-solving, clean
            code, and polished design. Explore the work, and I’ll gladly share
            the behind-the-scenes details.
          </motion.p>

          <div className="relative  ">
            <div className="w-[90%] flex flex-col items-center gap-4 mx-auto  ">
              <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[2rem] gap-[1rem]  ">
                {data.map((items) => (
                  <div
                    key={items.id}
                    className="relative rounded-2xl overflow-hidden group hover:skew-x-1 hover:shadow-lg hover:shadow-black duration-500 "
                  >
                    <div className="bg-purple-500/30 w-full h-full rounded-2xl absolute z-20 px-4 py-2 group-hover:translate-y-[0rem] group-hover:skew-x-1 translate-y-[-17rem] transform duration-500 backdrop-blur-[1rem] flex flex-col justify-between">
                      <div className="flex items-center justify-center h-full gap-8">
                        <h2 className="font-bold uppercase text-black">
                          {items.title}
                        </h2>
                        <div className="relative flex items-center gap-2 group">
                          <a
                            href={items.link}
                            target="blank"
                            className="bg-white text-black px-2  py-2  rounded-full shadow-md shadow-gray-800  group-hover:block duration-500"
                          >
                            <FaEye />
                          </a>
                        </div>
                      </div>
                      {/* <p className="text-sm font-semibold text-black">
                        {showMore[items.id]
                          ? items.description
                          : truncateText(items.description, 60)}
                        <span
                          className="text-blue-400 cursor-pointer cursor-pointer  italic"
                          onClick={() => toggleShowMore(items.id)}
                        >
                          {" "}
                          {showMore[items.id] ? "Show Less" : "Show More"}
                        </span>
                      </p> */}
                    </div>
                    <img
                      src={items.image}
                      alt={items.image}
                      className="rounded-2xl relative w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project