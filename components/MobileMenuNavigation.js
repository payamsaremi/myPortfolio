import { motion } from "framer-motion";
import NextLink from "next/link";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const links = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/projects", title: "Projects" },
];

export default function MobileMenuNavigation() {
  return (
    <motion.ul className="absolute top-28 w-full" variants={variants}>
      {links.map((link) => (
        <div key={link.href}>
          <MenuItem link={link} />
        </div>
      ))}
    </motion.ul>
  );
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ link }) => {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NextLink href={link.href}>
        <div className="flex justify-center p-4">
          <p className="text-2xl">{link.title}</p>
        </div>
      </NextLink>
    </motion.li>
  );
};
