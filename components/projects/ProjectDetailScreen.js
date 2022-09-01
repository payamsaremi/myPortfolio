import Image from "next/future/image";
import { motion, useAnimationControls } from "framer-motion";
import StackTag from "../StackTag";
import cn from "classnames";
import TitleAnimation from "../TitleAnimation";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ProjectDetailScreen({ mainImage, title, description }) {
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
        delay: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-start w-full h-screen max-w-full bg-black "
      )}
    >
      <motion.div className="flex flex-col-reverse lg:flex-row justify-between items-start h-full w-full ">
        <motion.div
          initial={"hidden"}
          animate={controls}
          variants={variants}
          ref={ref}
          className="h-1/2 w-full lg:h-full lg:w-2/4 "
        >
          <Image
            width={1200}
            height={1200}
            alt={title}
            className="object-cover w-full h-full md:rounded-md"
            src={mainImage}
          />
        </motion.div>
        <div className="flex lg:w-2/4 w-full h-1/2 lg:h-full justify-between items-center">
          <div className="flex flex-col justify-center items-start h-full w-full mx-16 ">
            <div className="md:flex flex-col justify-between items-start md:w-2/4 ">
              <div className="max-w-md">
                <TitleAnimation
                  title={title}
                  className="text-5xl font-normal text-gray-100 text-left mb-4 "
                />

                <p className="text-lg text-gray-200 mb-5 ">{description}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-start items-start mt-2">
              <StackTag name={"Javascript"} bgColor={"bg-yellow-500"} />
              <StackTag name={"React"} bgColor={"bg-blue-600"} />
              <StackTag name={"Nextjs"} bgColor={"bg-gray-900"} />
              <StackTag name={"MDX"} bgColor={"bg-teal-600"} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
