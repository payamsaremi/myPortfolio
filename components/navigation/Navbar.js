import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import { FiGithub } from "react-icons/fi";
import MobileMenu from "../mobileMenu/MobileMenu";
import NavItem from "./NavItem";
export default function Navbar() {
  return (
    <nav className="flex flex-col py-8 ">
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden md:flex w-full justify-between items-center mx-auto  max-w-5xl">
        <div className="flex justify-center items-center text-gray-300 md:justify-start text-xl w-full md:w-1/3">
          Payam Saremi
        </div>
        <div className="flex flex-row justify-center items-start mx-auto w-full md:w-1/3 my-5 md:my-0">
          <NavItem href="/" text="Home" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/projects" text="Projects" />
        </div>
        <div className="flex flex-row justify-center md:justify-end items-last w-full md:w-1/3">
          <a href="https://github.com/payamsaremi">
            <FiGithub
              size={"22"}
              className={"text-gray-500 hover:text-purple-500 cursor-pointer"}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
