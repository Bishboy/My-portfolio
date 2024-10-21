import { motion, Variants } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

// Use the Variants type directly from Framer Motion
const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

interface MobileNavbarProps {
  isOpen: boolean;
}


export const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen }) => {
  // Type the useState hook

  return (
    <div className="relative ">
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="fixed top-0 left-0 w-[60%] z-40 h-screen  bg-gray-800 text-white"
      >
        <ul className="flex flex-col mt-8 space-y-4  p-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </motion.nav>
    </div>
  );
};
