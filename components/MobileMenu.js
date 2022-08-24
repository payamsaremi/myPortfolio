import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { MenuToggle } from "./MobileMenueToggle";
import { useDimensions } from "../hooks/useDimentions";
import MobileMenuNavigation from "./MobileMenuNavigation";
import NextLink from "next/link";
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
        staggerChildren: 0.1,
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
          <div>
            <motion.div
              initial={"closed"}
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
              exit={"closed"}
              className={"absolute z-50 top-96 p-2 bg-gray-600 rounded-md"}
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className={
                    "bg-gray-900 cursor-pointer mb-2 px-5 py-2 rounded-md"
                  }
                  onClick={() => toggleOpen()}
                >
                  <NextLink href={link.href}>{link.title}</NextLink>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              onClick={() => toggleOpen()}
              variants={menuVariants}
              exit={"closed"}
              className="fixed inset-0 z-20 backdrop-blur-sm transition-opacity"
            />
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
