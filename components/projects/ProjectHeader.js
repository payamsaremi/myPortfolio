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
            <Image
              width={800}
              height={800}
              alt={title}
              className={"rounded-md object-cover h-[400px] w-full"}
              src={mainImage}
              priority
            />
          </FadeInChild>
        </div>
      </div>
    </a>
  );
}
