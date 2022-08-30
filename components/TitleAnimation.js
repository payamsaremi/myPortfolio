import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
export default function TitleAnimation(
  { title = "title", className = "" },
  props
) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const controls = useAnimationControls();
  useEffect(() => {
    if (inView) controls.start("visible");
    if (!inView) controls.start("hidden");
  }, [controls, inView]);
  console.log(ref.current);

  const wordAnima = {
    hidden: {},
    visible: {},
  };

  const charAnima = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <h1 aria-label={title} className={className} role="heading">
      {title.split(" ").map((word, index) => {
        return (
          <motion.span
            className={"inline-block mr-[0.25em]"}
            ref={ref}
            aria-hidden="true"
            key={index}
            initial={"hidden"}
            animate={controls}
            variants={wordAnima}
            transition={{
              delayChildren: index * 0.1,
              staggerChildren: 0.01,
            }}
          >
            {word.split("").map((char, index) => {
              return (
                <motion.span
                  className="inline-block"
                  aria-hidden="true"
                  key={index}
                  variants={charAnima}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h1>
  );
}
