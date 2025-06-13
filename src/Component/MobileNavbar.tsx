import { motion, Variants } from "framer-motion";
import { useState } from "react";

interface NavLink {
  id: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface MobileNavbarProps {
  isOpen: boolean;
  closeMenu: () => void;
  navLinks: NavLink[];
  active: string;
  socialLinks: SocialLink[];
}

const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  closeMenu,
  navLinks,
  active,
  socialLinks,
}) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="relative">
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="fixed top-[4rem] left-0 w-[100%] z-30 h-screen bg-black/70 backdrop-blur-[2rem] text-white"
        onAnimationComplete={() => {
          if (isOpen) {
            setShowLinks(true);
          } else {
            setShowLinks(false);
          }
        }}
      >
        {showLinks && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, type: "spring" },
            }}
            className="w-[60%] h-screen bg-black/80 absolute top-0 left-0 z-20 flex flex-col"
          >
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.5 },
              }}
              className="flex flex-col mt-8 space-y-4 p-4 uppercase flex-grow"
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id
                      ? "text-purple-500 opacity-[1] underline transition duration-1000 ease-in-out underline-offset-4 decoration-[0.3rem]"
                      : "text-white opacity-[0.75]"
                  }`}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      setTimeout(() => {
                        window.location.href = `#${link.id}`;
                      }, 100);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>

            {/* Social Links Section */}
            <motion.div
              className="p-4 flex gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(168, 85, 247, 0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};
