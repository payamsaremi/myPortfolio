import Image from "next/future/image";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
export default function ProjectMainScreen({ mainImage, title, description }) {
  const transitionValues = {
    duration: 1,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="flex flex-row-reverse items-end justify-between bg-zinc-900 w-full h-screen">
      <div className="w-full h-screen md:w-3/4 ">
        <Image
          width={1200}
          height={1200}
          alt={title}
          className="object-cover w-full h-full"
          src={mainImage}
          sizes="100vw"
          priority
        />
      </div>
      <div className="hidden md:flex flex-col justify-end items-start md:w-1/4 p-5 mt-20">
        <motion.div className="max-w-sm">
          <h1 className="text-4xl font-normal text-gray-100 text-left ">
            {title}
          </h1>
        </motion.div>
        <p className="text-normal text-gray-300 mt-2">{description}</p>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex p-6 justify-between items-center">
          <div>
            <motion.div className="md:w-96 md:hidden">
              <h1 className="text-4xl font-normal text-gray-100 text-left ">
                {title}
              </h1>
              {/* <p className="text-normal text-gray-200 mt-2">{description}</p> */}
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
