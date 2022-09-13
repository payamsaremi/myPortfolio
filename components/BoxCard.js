import TitleAnimation from "../components/TitleAnimation";

import { FiArrowRight } from "react-icons/fi";
import useHover from "../hooks/useHover";
import NextLink from "next/link";
export default function BoxCard({ image, title, description, url = "/" }) {
  const [hoverRef, isHovered] = useHover();
  return (
    <NextLink href={url}>
      <div
        ref={hoverRef}
        className="flex flex-col items-baseline justify-end border border-gray-800 rounded-md p-10 w-full min-h-[300px] cursor-pointer"
      >
        {image && (
          <div className="bg-gray-800 w-24 h-24 rounded-full mb-5"></div>
        )}
        <div className="ml-2 w-full">
          <div className="font-normal text-4xl mb-2 z-0 text-gray-200">
            {title}
          </div>
          <div className="flex w-full items-end justify-between">
            <p className="text-gray-300 text-xl w-[200px]">{description}</p>
            {isHovered && (
              <div className="bg-gray-800 p-1 rounded-full">
                <FiArrowRight size={"20"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </NextLink>
  );
}
