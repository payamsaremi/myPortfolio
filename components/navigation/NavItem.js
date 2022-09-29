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
            : "font-semibold text-gray-600 dark:text-gray-400",
          `mb-5 md:mb-0 md:inline-block p-1 sm:px-3 sm:py-2 rounded-md transition-all text-${size}`
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
}

export default NavItem;
