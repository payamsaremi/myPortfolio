import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { MenuToggle } from "./MobileMenueToggle";
import { useDimensions } from "../hooks/useDimentions";
import MobileMenuNavigation from "./MobileMenuNavigation";

export default function MobileMenu() {
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
        staggerChildren: 0.2,
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
            exit={"closed"}
            className={"absolute z-50 top-60 p-2 bg-red-600"}
          >
            {links.map((link) => (
              <motion.div
                key={link.href}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className={"bg-green-600 cursor-pointer mb-2 px-5 py-2"}
              >
                {link.title}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
