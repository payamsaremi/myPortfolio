import Image from "next/future/image";
import TitleAnimation from "../TitleAnimation";
import FadeInChild from "../FadeInChild";
import cn from "classnames";
export default function ProjectHeader({ title, mainImage }) {
  if (!mainImage) mainImage = "/images/placeholder.jpeg";
  return (
    <a>
      <div className="flex flex-col-reverse w-full h-full md:flex-row justify-between items-start xl:items-end cursor-pointer">
        <div className={cn("max-w-md z-40 lg:absolute mx-4")}>
          <TitleAnimation
            title={title}
            className="text-6xl xl:text-8xl mb-2 xl:leading-[80px] xl:mb-5 text-gray-800 dark:text-white font-semibold"
          />
        </div>

        <div className={"flex flex-col w-full justify-end"}>
          <FadeInChild delay={0.3}>
            <Image
              width={800}
              height={800}
              alt={title}
              className={"rounded-md object-cover h-[500px] w-full"}
              src={mainImage}
              priority
            />
          </FadeInChild>
        </div>
      </div>
    </a>
  );
}
