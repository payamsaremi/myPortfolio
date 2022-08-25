import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { MenuToggle } from "./MobileMenueToggle";
import { useDimensions } from "../hooks/useDimentions";
import NavItem from "./NavItem";
import { FiGithub } from "react-icons/fi";
export default function MobileMenu() {
  const { width, height } = useDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: "/", title: "Home" },
    { href: "/blog", title: "Blog" },
    { href: "/projects", title: "Projects" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        delay: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };
  return (
    <motion.nav>
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            custom={height}
            exit={"closed"}
            onClick={() => toggleOpen()}
            className={
              "fixed inset-0 top-0 left-0 right-0 pt-10 w-full h-full overscroll-contain bg-gray-900/80 overflow-hidden backdrop-blur-md"
            }
          >
            <motion.div
              variants={itemVariants}
              className={`flex flex-col justify-center items-center cursor-pointer mb-2 px-10 py-2 rounded-md`}
              onClick={() => toggleOpen()}
            >
              <NavItem href="/" text="Home" size={"2xl"} />
              <NavItem href="/blog" text="Blog" size={"2xl"} />
              <NavItem href="/projects" text="Projects" size={"2xl"} />
              <FiGithub
                size={"20"}
                className={"text-gray-500 hover:text-gray-300 cursor-pointer"}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
