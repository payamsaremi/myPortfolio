import Image from "next/future/image";
import { motion } from "framer-motion";
import StackTag from "../StackTag";

export default function ProjectDetailScreen({ mainImage, title, description }) {
  return (
    <div className="flex flex-col justify-center items-start w-full h-screen max-w-full  bg-zinc-900 ">
      <div className="flex flex-col lg:flex-row justify-between items-start h-full w-full">
        <div className="h-1/2 lg:h-full w-full lg:w-3/4 ">
          <Image
            width={800}
            height={800}
            alt={title}
            className="lg:rounded-none object-cover xl:object-cover w-full h-full"
            sizes="100vw"
            src={mainImage}
          />
        </div>
        <div className="flex lg:w-1/4 w-full h-1/2 lg:h-full  justify-between items-center bg-zinc-900 px-5">
          <div className="flex flex-col justify-between items-start lg:max-w-lg h-full w-full py-5">
            <div>
              <h2 className="text-5xl w-full mb-4">{title}</h2>
              <p className="text-gray-300 text-lg">{description}</p>
            </div>
            <div className="flex flex-wrap justify-start items-start mt-2">
              <StackTag name={"Javascript"} bgColor={"bg-yellow-500/30"} />
              <StackTag name={"React"} bgColor={"bg-blue-600/30"} />
              <StackTag name={"Nextjs"} bgColor={"bg-gray-900/30"} />
              <StackTag name={"MDX"} bgColor={"bg-teal-600/30"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
