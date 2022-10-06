import Image from "next/future/image";
import TitleAnimation from "../TitleAnimation";
import FadeInChild from "../FadeInChild";

export default function ProjectHeader({ title, mainImage }) {
  if (!mainImage) mainImage = "/images/placeholder.jpeg";
  return (
    <a>
      <div className="flex">
        <FadeInChild delay={0.3}>
          <div className="flex h-[550px] w-[550px] mb-2">
            <Image
              width={800}
              height={800}
              alt={title}
              className={"rounded-md object-cover mr-1 bg-gray-900"}
              src={mainImage}
              priority
            />
          </div>
        </FadeInChild>
      </div>
    </a>
  );
}

//TODO: to buy and sell microstartups, bootstraps, projects.
//Put your project up for sell.
//TODO: Buy and sell web3 projects with crypto.
