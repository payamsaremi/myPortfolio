import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import TitleAnimation from "../TitleAnimation";
export default function SildeTitleMenu({ meta, projects }) {
  const router = useRouter();

  return (
    <>
      <div className={"p-5"}>
        <div className="text-6xl xl:text-7xl mb-2 xl:leading-[80px] xl:mb-5 text-gray-800 dark:text-white font-semibold max-w-full">
          {meta.title}
        </div>
        <p className="text-2xl xl:text-2xl mb-2 text-gray-800 dark:text-gray-300">
          Product Engineer
        </p>
        <ul>
          {projects.map((project) => {
            const isActive = meta.slug === project.meta.slug;
            return (
              <li
                key={project.meta.slug}
                onClick={() => {
                  router.push(project.meta.slug);
                }}
                className={cn(
                  "cursor-pointer",
                  isActive ? " text-gray-200 " : "text-gray-300"
                )}
              >
                {project.meta.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
