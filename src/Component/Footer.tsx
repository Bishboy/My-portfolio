import { motion } from "framer-motion";
import Navicon1 from "../assets/img/nav-icon1.svg";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <img src={Navicon1} alt="LinkedIn" className="relative z-10" />,
      url: "https://www.linkedin.com/in/uduak-emmanuel-11941b1b9/",
      color: "bg-blue-600/60",
    },
    {
      id: 2,
      icon: <FaGithub className="relative text-white z-10" />,
      url: "https://github.com/Bishboy",
      color: "bg-gray-800/60",
    },
    {
      id: 3,
      icon: <BsTwitterX className="relative text-white z-10" />,
      url: "https://x.com/iam_bishboy",
      color: "bg-black/60",
    },
    {
      id: 4,
      icon: <FiMail className="relative text-white z-10" />,
      url: "mailto:bishboy2spieking@gmail.com",
      color: "bg-red-500/60",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <footer className="relative w-full py-16 bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-between items-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Name/Logo */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-white text-2xl md:text-3xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              EMMANUEL <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">UDUAK</span>
            </motion.h1>
            <motion.p
              className="text-gray-400 text-sm mt-2"
              variants={itemVariants}
            >
              Frontend Developer & Designer
            </motion.p>
          </motion.div>

          {/* Social Links and Copyright */}
          <motion.div
            className="flex flex-col items-center md:items-end gap-6"
            variants={itemVariants}
          >
            <motion.div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 relative group rounded-lg duration-300 ease-in-out z-10 flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden hover:border-purple-500/50"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <motion.div
                    className={`absolute inset-0 ${link.color} rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out z-0`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                  <span className="relative z-10">{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.p className="text-gray-400 text-sm text-center md:text-right" variants={itemVariants}>
              &copy; {new Date().getFullYear()} Emmanuel Uduak. All Rights
              Reserved.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#home"
            className="text-gray-400 hover:text-purple-400 text-sm flex items-center gap-2 transition-colors group"
            whileHover={{ y: -3 }}
          >
            Back to Top
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
