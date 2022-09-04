import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function FadeInChild({ children, delay = 0.1 }) {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
    if (!inView) controls.start("hidden");
  }, [inView, controls]);

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
