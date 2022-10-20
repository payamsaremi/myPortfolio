import Image from "next/future/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function TopArticles({ topPosts }) {
  function truncate(str, max) {
    return str.length > max ? str.substr(0, max - 1) + "…" : str;
  }

  const variants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial={"closed"}
        animate={"open"}
        variants={variants}
        className="flex flex-col md:flex-row w-full"
      >
        <div className="relative flex flex-col md:flex-row w-full">
          {topPosts.map((post, index) => {
            return (
              <motion.div variants={item} key={post.meta.slug}>
                <SideFeaturedArticles
                  title={post.meta.title}
                  excerpt={truncate(post.meta.excerpt, 80)}
                  coverImage={post.meta.coverImage}
                  slug={post.meta.slug}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

const SideFeaturedArticles = ({ title, coverImage, excerpt, slug }) => {
  return (
    <Link href={`blog/${slug}`} key={slug}>
      <div className="flex flex-col justify-center items-center mb-4 cursor-pointer md:mr-4 w-full md:w-80">
        <div className="mb-2 w-full h-full">
          <Image
            width={800}
            height={800}
            alt={title}
            className="rounded-md w-full md:w-80 h-80 md:h-80 object-cover"
            src={coverImage}
          />
        </div>
        <div className="flex flex-col w-full">
          <a>
            <p className="font-bold text-2xl mb-1 font-Custom">{title}</p>
          </a>
          <p className="text-md text-gray-300  font-custom2">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};
