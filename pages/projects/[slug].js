import Image from "next/future/image";
import { FiArrowDown } from "react-icons/fi";
import { useRouter } from "next/router";
import { animate, motion } from "framer-motion";
import cn from "classnames";
export default function ProjectDetail() {
  const router = useRouter();

  return (
    <FadePageWrapper>
      <div className="absolute top-0 left-0 m-6 text-xl font-mono">
        Payam Saremi
      </div>
      <div
        className="absolute top-0 right-0 m-6 cursor-pointer pt-1 font-mono"
        onClick={() => router.back()}
      >
        Back
      </div>
      <ProjectMainScreen
        mainImage={"/images/projects/iphone-mock.jpg"}
        title={"Personal Portfolio Website"}
        description={
          "A collection of my blogs, projects and personal photography."
        }
      />

      {/* NEXT PAGE */}
      <ProjectDetailScreen />
    </FadePageWrapper>
  );
}

export function ProjectMainScreen({ mainImage, title, description }) {
  const transitionValues = {
    duration: 1,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="flex flex-row-reverse items-end justify-between bg-gray-800  w-full h-screen">
      <div className="md:w-3/4">
        <Image
          width={1200}
          height={1200}
          alt={title}
          className="object-cover h-screen w-full"
          src={mainImage}
          priority
        />
      </div>
      <div className="hidden md:flex flex-col justify-end items-start md:w-1/4 p-5 mt-20">
        <motion.div className="max-w-sm">
          <h1 className="text-4xl font-normal text-gray-100 text-left ">
            {title}
          </h1>
        </motion.div>
        <p className="text-normal text-gray-200 mt-2">{description}</p>
        <div className="flex flex-wrap justify-start items-start mt-4">
          <StackTag name={"Javascript"} bgColor={"bg-yellow-500"} />
          <StackTag name={"React"} bgColor={"bg-blue-600"} color={"blue"} />
          <StackTag name={"Nextjs"} bgColor={"bg-gray-900"} />
          <StackTag name={"MDX"} bgColor={"bg-teal-600"} />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex p-6 justify-between items-end">
          <div>
            <motion.div className="md:w-96 md:hidden">
              <h1 className="text-4xl font-normal text-gray-100 text-left ">
                {title}
              </h1>
              {/* <p className="text-normal text-gray-200 mt-2">{description}</p> */}
              <div className="flex flex-wrap justify-start items-start mt-2">
                <StackTag name={"Javascript"} bgColor={"bg-yellow-500"} />
                <StackTag name={"React"} bgColor={"bg-blue-600"} />
                <StackTag name={"Nextjs"} bgColor={"bg-gray-900"} />
                <StackTag name={"MDX"} bgColor={"bg-teal-600"} />
              </div>
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

export function FadePageWrapper({ children }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
}

export function ProjectDetailScreen() {
  return (
    <div className="flex flex-col w-full h-screen p-5 md:max-w-md justify-between items-start">
      <div className="mb-6 text-xl">Developer | Designer</div>
      <div className="h-full w-full">
        <Image
          width={800}
          height={800}
          alt={"title"}
          className="rounded-md object-cover w-full h-full "
          sizes="100vw"
          src={"/images/projects/kip-cover.png"}
        />
      </div>
      <div className="md:max-w-sm my-6">
        <h2 className="text-3xl w-full mb-4">
          Experiances, Discoveries and Creation
        </h2>
        <p className="text-gray-300 text-lg">
          {" "}
          My personal website is my opportunity to share my experiances with
          others. <br />
          To share technoical or personal soloutions, with the hope that it can
          be useful for somone. <br />
          My personal website considt of Blogs, Projects and my personal
          Photography.
        </p>
      </div>
    </div>
  );
}

export function StackTag({ name, bgColor, color }) {
  return (
    <div
      className={cn(
        `flex justify-center items-center text-xs h-6 font-mono py-1 px-2 rounded-md mr-1 mb-1`,
        `${bgColor}`
      )}
    >
      {name}
    </div>
  );
}
