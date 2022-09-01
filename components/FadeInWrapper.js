import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function FadeInWrapper({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <motion.div initial={"closed"} animate={"open"} variants={variants}>
      {children}
    </motion.div>
  );
}
