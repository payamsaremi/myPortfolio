import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { MenuToggle } from "./MobileMenueToggle";
import { useDimensions } from "../hooks/useDimentions";
import MobileMenuNavigation from "./MobileMenuNavigation";
import NextLink from "next/link";
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
              "absolute pt-10 top-0 left-0 bottom-0 z-10 p-2 w-full bg-gray-900/60 overflow-hidden backdrop-blur-md"
            }
          >
            {links.map((link) => (
              <motion.div
                key={link.href}
                variants={itemVariants}
                className={`cursor-pointer mb-2 px-10 py-2 rounded-md `}
                onClick={() => toggleOpen()}
              >
                <NextLink href={link.href}>
                  <p className="text-xl">{link.title}</p>
                </NextLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
