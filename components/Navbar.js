import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import { FiGithub } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import NavItem from "./NavItem";
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-5 sm:pb-16  text-gray-900 bg-opacity-60 dark:text-gray-100">
      <div className="md:hidden ">
        <MobileMenu />
      </div>
      <div className="hidden md:inline-block ml-[-0.60rem]">
        <NavItem href="/" text="Home" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/projects" text="Projects" />
      </div>

      <NextLink href={"https://github.com/payamsaremi"}>
        <div>
          <FiGithub
            size={"20"}
            className={"text-gray-500 hover:text-gray-300 cursor-pointer"}
          />
        </div>
      </NextLink>
    </nav>
  );
}
