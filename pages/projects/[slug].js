import Image from "next/future/image";
import { FiArrowDown } from "react-icons/fi";
import { useRouter } from "next/router";
import { animate, motion } from "framer-motion";
export default function ProjectDetail() {
  const router = useRouter();
  const transitionValues = {
    duration: 1,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  const simpleTrans = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-800"
      >
        <Image
          width={1200}
          height={1200}
          alt={"title"}
          className="object-cover w-full h-screen"
          src={"/images/projects/iphone-blog-mock.jpg"}
          priority
        />
        <div className="absolute bottom-0">
          <div className="flex p-6 md:w-full justify-between items-center w-full">
            <motion.div>
              <h1 className="text-4xl md:w-96 font-normal text-gray-100 drop-shadow-sm text-left">
                Personal Portfolio Website
              </h1>
            </motion.div>
            <motion.div
              transition={{
                y: transitionValues,
              }}
              animate={{
                y: ["0.5rem", "0.8rem"],
              }}
              className="flex justify-center items-end ring-1 ring-gray-400 p-2 w-10 h-16 rounded-full"
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

        <div className="absolute top-0 left-0 m-6">Payam Saremi</div>
        <div
          className="absolute top-0 right-0 m-6 cursor-pointer"
          onClick={() => router.back()}
        >
          Back
        </div>
      </motion.div>
      <div className="flex flex-col w-full md:max-w-md justify-center items-start">
        <div className="p-5 md:max-w-sm">
          <h2 className="text-5xl w-full  mb-8">
            Experiance, Discover, Create
          </h2>
          <p className="text-gray-300">
            {" "}
            The furute is imparable, it is defined by ideas, it is defined by
            builders, makers and creators. The furute is imparable, it is
            defined by ideas, it is defined by builders, makers and creators.
          </p>
        </div>
      </div>
    </>
  );
}
