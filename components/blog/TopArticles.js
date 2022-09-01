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
      <div className="flex flex-col md:flex-row items-center justify-between max-w-3xl mx-auto mb-16 ">
        <MainFeaturedArticle
          title={topPosts[0].meta.title}
          excerpt={truncate(topPosts[0].meta.excerpt, 60)}
          coverImage={topPosts[0].meta.coverImage}
          slug={topPosts[0].meta.slug}
        />
        <motion.div
          initial={"closed"}
          animate={"open"}
          variants={variants}
          className="flex flex-col"
        >
          {topPosts.map((post, index) => {
            if (index < 1) return;
            return (
              <motion.div variants={item} key={post.meta.slug}>
                <SideFeaturedArticles
                  title={post.meta.title}
                  excerpt={truncate(post.meta.excerpt, 60)}
                  coverImage={post.meta.coverImage}
                  slug={post.meta.slug}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

const SideFeaturedArticles = ({ title, coverImage, excerpt, slug }) => {
  return (
    <Link href={`blog/${slug}`} key={slug}>
      <div className="flex flex-row justify-center items-center mb-2 cursor-pointer md:ml-4 w-full">
        <div className="mr-2 ">
          <Image
            width={200}
            height={200}
            alt={title}
            className="rounded-md w-48 h-40 md:w-32 md:h-28 object-cover"
            src={coverImage}
          />
        </div>
        <div className="flex flex-col w-full">
          <a>
            <h1 className="font-bold text-2xl mb-1">{title}</h1>
          </a>
          <p className="text-md text-gray-300 text-sm ">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

const MainFeaturedArticle = ({ title, coverImage, excerpt, slug }) => {
  return (
    <>
      <Link href={`blog/${slug}`} key={slug}>
        <div className="flex flex-col w-full md:w-1/2 rounded-md mb-4 md:mb-0 border-indigo-400/30 border shadow-2xl shadow-indigo-900/20 p-3 cursor-pointer">
          <div className={"mb-4 rounded-md"}>
            <Image
              width={200}
              height={200}
              alt={title}
              className="rounded-md w-full h-full object-cover"
              priority
              src={coverImage}
            />
          </div>
          <div className="m-2">
            <a>
              <h1 className="font-bold text-2xl mb-1 ">{title}</h1>
            </a>
            <p className="text-md text-gray-300 break-words">{excerpt}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
