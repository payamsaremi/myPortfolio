import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import { FiGithub } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-5 sm:pb-16  text-gray-900 bg-opacity-60 dark:text-gray-100">
      <div className="ml-[-0.60rem]">
        <MobileMenu />

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
