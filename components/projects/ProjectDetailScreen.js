import Image from "next/future/image";
import { motion } from "framer-motion";
import StackTag from "../StackTag";
import cn from "classnames";

export default function ProjectDetailScreen({ mainImage, title, description }) {
  const bgColor = "white";
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-start w-full h-screen max-w-full bg-black "
      )}
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start h-full w-full ">
        <div className="h-1/2  w-full lg:h-full lg:w-2/4 ">
          <Image
            width={1200}
            height={1200}
            alt={title}
            className="object-cover w-full h-full bg-gray-900 md:rounded-md"
            src={mainImage}
          />
        </div>
        <div className="flex lg:w-2/4 w-full h-1/2 lg:h-full justify-between items-center">
          <div className="flex flex-col justify-center items-start h-full w-full md:p-16 p-5 ">
            <div className="md:flex flex-col justify-between items-start md:w-2/4 ">
              <div className="max-w-sm">
                <h1 className="text-4xl font-normal text-gray-100 text-left mb-4 ">
                  {title}
                </h1>
                <p className="text-normal text-gray-300 mb-5 ">{description}</p>
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
      </div>
    </div>
  );
}
