import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MobileMenueToggle";
import { useDimensions } from "../hooks/useDimentions";
import MobileMenuNavigation from "./MobileMenuNavigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 20}px at 30px 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(18px at 46px 41px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 500,
      damping: 40,
    },
  },
};

export default function MobileMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.nav
      className="absolute z-50 top-0 bottom-0 left-0 w-full md:hidden"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-full bg-brand-200 dark:bg-gray-800"
        variants={sidebar}
      />
      <MobileMenuNavigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
