import { motion, Variants } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

// Use the Variants type directly from Framer Motion
const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Type the useState hook

  return (
    <div className="relative">
      <div className="p-4 float-right z-50">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-black  p-2 rounded"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="fixed top-0 left-0 w-64 h-full z-10 bg-gray-800 text-white"
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
