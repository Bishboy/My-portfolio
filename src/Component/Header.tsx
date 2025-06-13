import { useState, useEffect, useRef } from "react";
import Navicon1 from "../assets/img/nav-icon1.svg";
import { MobileNavbar } from "./MobileNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

type ActiveLink = "home" | "skill" | "project" | "contact" | "";

const Header = () => {
  const [active, setActive] = useState<ActiveLink>("home");
  const [scroll, setScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sectionsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = (): void => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll("section[id]");

    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      setScroll(scrollY > 50);

      if (sectionsRef.current) {
        const scrollPosition = scrollY + 100;

        sectionsRef.current.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id") as ActiveLink;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(sectionId);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skill", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/uduak-emmanuel-11941b1b9/",
      icon: <img src={Navicon1} alt="LinkedIn" className="relative w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Bishboy",
      icon: <FaGithub className="text-white relative w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://x.com/iam_bishboy",
      icon: <BsTwitterX className="text-white relative w-5 h-5" />,
      label: "Twitter",
    },
  ];

  const headVariant = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const linkVariant = {
    hover: {
      scale: 1.05,
      color: "#a855f7",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <header className="w-full">
      <motion.nav
        ref={navRef}
        variants={headVariant}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
          scroll
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : " "
        }`}
      >
        <div className="max-w-[1660px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            className="text-white text-xl md:text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EMMANUEL
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  className={`relative ${
                    active === link.id
                      ? "text-purple-500"
                      : "text-white/80 hover:text-white"
                  } font-medium text-lg`}
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariant}
                >
                  <a href={`#${link.id}`} className="block py-2 px-1">
                    {link.label}
                    {active === link.id && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
                        layoutId="activeIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 ml-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 relative group rounded-full flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(168, 85, 247, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}

              {/* Connect Button */}
              <motion.button
                className="relative px-6 py-2 bg-white overflow-hidden rounded-lg text-black font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact" className="relative z-10">
                  Let's Connect
                </a>
                <motion.div
                  className="absolute inset-0 bg-purple-500 z-0"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-full bg-white/10 backdrop-blur-sm z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-white text-xl" />
            ) : (
              <FaBars className="text-white text-xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <MobileNavbar
              isOpen={isOpen}
              closeMenu={closeMenu}
              navLinks={navLinks}
              active={active}
              socialLinks={socialLinks}
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;
