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
          className="text-6xl xl:text-3xl mb-2 xl:leading-[65px] xl:mb-5 text-zinc-800 dark:text-zinc-300 font-normal max-w-sm"
        ></TitleAnimation>
        <ul>
          {projects.map((project) => {
            const isActive = meta.slug === project.meta.slug;
            return (
              <NextLink href={project.meta.slug} key={project.meta.slug}>
                <li
                  className={cn(
                    "cursor-pointer text-lg",
                    isActive ? " text-gray-200 " : "text-gray-300"
                  )}
                >
                  {project.meta.title}
                </li>
              </NextLink>
            );
          })}
        </ul>
      </div>
    </>
  );
}
