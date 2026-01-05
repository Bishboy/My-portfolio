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
    <header className="relative">
      <motion.nav
        ref={navRef}
        variants={headVariant}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 max-w-[1660px] mx-auto right-0 left-0 w-full z-50 px-6 py-5 transition-all duration-500 ${
          scroll
            ? "bg-black/80 backdrop-blur-xl shadow-2xl shadow-purple-900/20 border-b border-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className=" w-full flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-white text-xl md:text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EMMANUEL <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">UDUAK</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  className={`relative ${
                    active === link.id
                      ? "text-purple-400"
                      : "text-white/70 hover:text-white"
                  } font-medium text-base transition-colors duration-200`}
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariant}
                >
                  <a href={`#${link.id}`} className="block py-2 px-3 relative group">
                    {link.label}
                    {active === link.id && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        layoutId="activeIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 ml-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 relative group rounded-lg flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <span className="relative z-10">{social.icon}</span>
                </motion.a>
              ))}

              {/* Connect Button */}
              <motion.a
                href="#contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden rounded-lg text-white font-semibold text-sm group shadow-lg shadow-purple-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 z-50"
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
