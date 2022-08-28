import Image from "next/future/image";
import useHover from "../../hooks/useHover";
import NextLink from "next/link";

export default function ProjectCard({ title, description, coverImage, slug }) {
  const [hoverRef, isHovered] = useHover();
  if (!coverImage) coverImage = "/images/placeholder.jpeg";
  return (
    <NextLink href={`projects/${slug}`}>
      <a>
        <div
          ref={hoverRef}
          className="flex flex-col md:flex-row justify-between mb-36 md:mb-6 cursor-pointer "
        >
          <div className="flex flex-col justify-between md:mr-4 p-1 mb-4">
            <div className="flex flex-col justify-center max-w-sm ">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl mb-2 dark:text-brand-50 font-semibold">
                  {title}
                </h2>
              </div>
              <p
                className={`text-lg md:text-sm leading-5 font-mono text-gray-400 dark:text-gray-300 transition-all ${
                  isHovered && "text-gray-100"
                }`}
              >
                {description}
              </p>{" "}
            </div>
          </div>
          <div className="">
            <Image
              width={200}
              height={200}
              alt={title}
              className="rounded-md object-cover w-full md:w-96"
              sizes="100vw"
              src={coverImage}
              priority
            />
          </div>
        </div>
      </a>
    </NextLink>
  );
}
