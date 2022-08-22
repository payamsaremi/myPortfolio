import { motion } from "framer-motion";

export default function ProjectProgress({ isHovered }) {
  const variants = {
    open: {
      opacity: 1,
      width: "98%",
    },
    closed: { opacity: 1 },
  };
  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
        <motion.div
          animate={isHovered ? "open" : "closed"}
          variants={variants}
          className={`flex justify-center h-1 w-5 bg-gray-700 ${
            isHovered ? "bg-brand-400" : "bg-gray-700 "
          } rounded-md`}
        ></motion.div>
      </div>
    </>
  );
}

//usage
{
  /* <ProjectProgress isHovered={isHovered} /> */
}
