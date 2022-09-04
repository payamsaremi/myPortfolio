import Image from "next/future/image";
import useHover from "../../hooks/useHover";
import NextLink from "next/link";
import TitleAnimation from "../TitleAnimation";
import FadeInChild from "../FadeInChild";
import cn from "classnames";
export default function ProjectCard({
  title,
  description,
  coverImage,
  slug,
  index,
}) {
  const [hoverRef, isHovered] = useHover();
  const imageOnLeft = index !== 1 ? true : false;
  if (!coverImage) coverImage = "/images/placeholder.jpeg";
  return (
    <NextLink href={`projects/${slug}`}>
      <a>
        <div
          ref={hoverRef}
          className="flex flex-col-reverse w-full h-full md:flex-row justify-between items-start xl:items-end mb-40 cursor-pointer"
        >
          <div
            className={cn(
              "max-w-md z-40 lg:absolute mx-2 ",
              imageOnLeft ? "md:right-60" : "md:left-80"
            )}
          >
            <TitleAnimation
              title={title}
              className="text-5xl xl:text-8xl mb-2 xl:leading-[80px] xl:mb-5 text-gray-800 dark:text-white font-semibold"
            />
            {imageOnLeft}
            <FadeInChild delay={0.6}>
              <p
                className={`text-xl max-w-sm text-gray-800 dark:text-white transition-all`}
              >
                {description}
              </p>
            </FadeInChild>
          </div>

          <div
            className={cn(
              "flex w-full",
              imageOnLeft ? "justify-start " : "justify-end"
            )}
          >
            <FadeInChild delay={0.5}>
              <Image
                width={800}
                height={800}
                alt={title}
                className={cn(
                  "rounded-md object-cover h-[600px] w-full xl:max-w-4xl bg-white dark:bg-gray-900 shadow-xl mb-4 "
                )}
                src={coverImage}
                priority
              />
            </FadeInChild>
          </div>
        </div>
      </a>
    </NextLink>
  );
}
