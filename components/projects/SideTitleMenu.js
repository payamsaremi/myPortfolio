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
        <TitleAnimation
          title={"Payam Saremi"}
          className="text-6xl xl:text-7xl mb-2 xl:leading-[65px] xl:mb-5 text-gray-800 dark:text-gray-700 font-normal max-w-sm"
        ></TitleAnimation>
        <ul>
          {projects.map((project) => {
            const isActive = meta.slug === project.meta.slug;
            return (
              <li
                key={project.meta.slug}
                onClick={() => {
                  router.replace(project.meta.slug);
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
