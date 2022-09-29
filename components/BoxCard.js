import Image from "next/future/image";
import { FiArrowRight } from "react-icons/fi";
import useHover from "../hooks/useHover";
import NextLink from "next/link";
import FadeInChild from "./FadeInChild";
export default function BoxCard({ image, title, description, url = "/" }) {
  const [hoverRef, isHovered] = useHover();
  return (
    <NextLink href={url}>
      <div
        ref={hoverRef}
        className="flex flex-col items-baseline justify-end border border-gray-800 hover:border-gray-700 p-10 w-full min-h-[100px] cursor-pointer"
      >
        {image && (
          <div className="bg-gray-800 w-24 h-24 rounded-full mb-5 ">
            <Image
              src={"/images/me-avatar.png"}
              width={800}
              height={800}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
        <div className="ml-2 w-full">
          <div className="font-normal text-4xl mb-2 z-0 dark:text-gray-200">
            {title}
          </div>
          <div className="flex w-full items-end justify-between">
            <p className="text-gray-300 text-lg w-full">{description}</p>
          </div>
        </div>
      </div>
    </NextLink>
  );
}
