import Link from "next/link";
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <footer className="flex flex-col w-full md:flex-row justify-between items-center mx-auto border-t rounded-md max-w-5xl border-gray-800 py-8">
        <div className="flex justify-center items-center text-gray-300 md:justify-start text-xl  w-full md:w-1/3">
          Payam Saremi
        </div>
        <div className="flex flex-row justify-center items-start mx-auto w-full md:w-1/3 my-5 md:my-0">
          <LinkItem link={"/"}>home</LinkItem>
          <LinkItem link={"/blog"}>blog</LinkItem>
          <LinkItem link={"/projects"}>projects</LinkItem>
        </div>
        <div className="flex flex-row justify-center md:justify-end items-last w-full md:w-1/3">
          <a href="https://github.com/payamsaremi">
            <FiGithub
              size={"22"}
              className={
                "text-gray-500 hover:text-purple-500 cursor-pointer mx-4"
              }
            />
          </a>
        </div>
      </footer>
    </>
  );
}

function LinkItem({ children, link }) {
  return (
    <>
      <Link href={link}>
        <a>
          <div className="text-md w-fit text-gray-500 hover:text-gray-700 cursor-pointer transition-all p-2 mx-2">
            {children}
          </div>
        </a>
      </Link>
    </>
  );
}
