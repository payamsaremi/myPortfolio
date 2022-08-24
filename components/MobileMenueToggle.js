import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    className={"stroke-gray-800 dark:stroke-brand-100/90"}
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <motion.div initial={"closed"} animate={isOpen ? "open" : "closed"}>
    <button
      className="cursor-pointer absolute outline-none border-none top-7 left-9"
      onClick={toggle}
    >
      <svg width="20" height="20" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  </motion.div>
);
