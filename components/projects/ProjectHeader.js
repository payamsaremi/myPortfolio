import Image from "next/future/image";
import TitleAnimation from "../TitleAnimation";
import FadeInChild from "../FadeInChild";

export default function ProjectHeader({ title, mainImage }) {
  if (!mainImage) mainImage = "/images/placeholder.jpeg";
  return (
    <a>
      <div>
        <div>
          <FadeInChild delay={0.3}>
            <div className="flex">
              <Image
                width={800}
                height={800}
                alt={title}
                className={
                  "rounded-md object-cover h-[440px] w-[770px] mr-1 bg-gray-900"
                }
                src={mainImage}
                priority
              />
            </div>
          </FadeInChild>
        </div>
      </div>
    </a>
  );
}

//TODO: to buy and sell microstartups, bootstraps, projects.
//Put your project up for sell.
//TODO: Buy and sell web3 projects with crypto.
