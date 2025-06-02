import { motion, Variants } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

// Use the Variants type directly from Framer Motion
const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

interface MobileNavbarProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  closeMenu,
}) => {
  const [showLinks, setShowLinks] = useState(false);
  const [active, setActive] = useState<string>("");

  return (
    <div className="relative ">
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="fixed top-[4rem] left-0 w-[100%]  z-30 h-screen  bg-black/70 backdrop-blur-[2rem] text-white"
        onAnimationComplete={() => {
          if (isOpen) {
            setShowLinks(true); // Show links after parent animation
          } else {
            setShowLinks(false); // Hide links when parent closes
          }
        }}
      >
        {showLinks && (
          <motion.div
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, type: "spring" },
            }}
            className="w-[60%] h-screen bg-black/80 absolute top-0 left-0 z-20"
          >
            {showLinks && (
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                className="flex flex-col mt-8 space-y-4 p-4 uppercase"
              >
                <li
                  className={`${
                    active === "home"
                      ? "text-purple-500 opacity-[1] underline transition duration-1000 ease-in-out  underline-offset-4 decoration-[0.3rem]"
                      : "text-white opacity-[0.75]"
                  }`}
                >
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive("home");
                      closeMenu();
                      setTimeout(() => {
                        window.location.href = "#home"; // Smooth scroll after state updates
                      }, 100);
                    }}
                  >
                    Home
                  </a>
                </li>
                <li
                  className={`${
                    active === "skill"
                      ? "text-purple-500 opacity-[1] transition duration-1000 ease-in-out underline underline-offset-4 decoration-[0.3rem]"
                      : "text-white opacity-[0.75]"
                  }`}
                >
                  <a
                    href="#skill"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive("skill");
                      closeMenu();
                      setTimeout(() => {
                        window.location.href = "#skill"; // Smooth scroll after state updates
                      }, 100);
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li
                  className={`${
                    active === "project"
                      ? "text-purple-500 underline underline-offset-4 transition duration-1000 ease-in-out  opacity-[1] decoration-[0.3rem]"
                      : " text-white opacity-[0.75]"
                  }`}
                >
                  <a
                    href="#project"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive("project");
                      closeMenu();
                      setTimeout(() => {
                        window.location.href = "#project"; // Smooth scroll after state updates
                      }, 100);
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li
                  className={`${
                    active === "contact"
                      ? "text-purple-500 underline underline-offset-4 transition duration-1000 ease-in-out  opacity-[1] decoration-[0.3rem]"
                      : " text-white opacity-[0.75]"
                  }`}
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive("contact");
                      closeMenu();
                      setTimeout(() => {
                        window.location.href = "#contact"; // Smooth scroll after state updates
                      }, 100);
                    }}
                  >
                    Contact
                  </a>
                </li>
              </motion.ul>
            )}
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};
