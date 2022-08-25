import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
function NavItem({ href, text, size = "md" }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          `md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all text-${size}`
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default NavItem;
