import Image from "next/future/image";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import NextLink from "next/link";
import TitleAnimation from "../TitleAnimation";
export default function ProjectMainScreen({
  mainImage,
  title,
  description,
  liveSite,
}) {
  const transitionValues = {
    duration: 1,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  };

  return (
    <div className="flex flex-row-reverse items-center justify-between bg-black w-full h-screen">
      <div className="w-full md:w-2/4 h-screen bg-gray-800">
        <Image
          width={1200}
          height={1200}
          alt={title}
          className="object-cover w-full h-full"
          src={mainImage}
          priority
        />
      </div>

      <div className="hidden md:flex flex-col justify-between items-start md:w-2/4 p-16">
        <div className="max-w-sm">
          <a className="cursor-pointer" href={liveSite}>
            <div className="flex justify-start items-center bg-gray-900 px-2 py-1 mb-1 w-44 rounded-md font-mono">
              <div className="bg-green-500 w-2 h-2 rounded-full mr-3"></div>
              <p>View live site</p>
            </div>
          </a>
          <TitleAnimation
            title={title}
            className="text-5xl font-normal text-gray-100 text-left "
          />

          <motion.div
            className="md:w-96"
            initial={"hidden"}
            animate={"visible"}
            variants={variants}
          >
            <p className="text-normal text-lg text-gray-200 mt-2 ">
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        {/* Mobile screen */}
        <div className="flex p-6 justify-between items-center ">
          <div>
            <TitleAnimation
              title={title}
              className="text-4xl font-normal text-gray-100 text-left md:hidden "
            />
            <motion.div
              className="md:w-96 md:hidden"
              initial={"hidden"}
              animate={"visible"}
              variants={variants}
            >
              <p className="text-normal text-gray-200 mt-2">{description}</p>
            </motion.div>
          </div>
          <motion.div
            transition={{
              y: transitionValues,
            }}
            animate={{
              y: ["0.5rem", "0.8rem"],
            }}
            className="flex justify-center items-end ring-1 ring-gray-100 p-2 w-10 h-16 rounded-full"
          >
            <motion.div
              transition={{
                y: transitionValues,
              }}
              animate={{
                y: ["0.3rem", "0.6rem"],
              }}
            >
              <FiArrowDown size={"25"} className={"text-gray-200 mb-3"} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
