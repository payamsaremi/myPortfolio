import Link from "next/link";
import TitleAnimation from "../TitleAnimation";
import TopArticles from "./TopArticles";
import { motion } from "framer-motion";
export default function Articles({ posts }) {
  const topPosts = Object.values(posts)
    .filter((post) => {
      return post.meta.isPublic === true;
    })
    .slice(0, 3);

  return (
    <>
      <div className="flex flex-col items-start justify-center max-w-full mb-8 p-10">
        <TitleAnimation
          title="Stories & Ideas"
          className="mb-12 text-7xl font-bold tracking-tight text-black md:text-6xl dark:text-white"
        />

        <TopArticles topPosts={topPosts} />

        <div className="mt-8">
          {posts.map((post) => {
            if (post.meta.isPublic === false) return;
            if (topPosts.includes(post)) return;
            return (
              <Link href={`blog/${post.meta.slug}`} key={post.meta.slug}>
                <div className="mb-6 w-full rounded-sm cursor-pointer max-w-xl">
                  <a>
                    <h1 className="font-bold text-2xl mb-1">
                      {post.meta.title}
                    </h1>
                  </a>
                  <p className="text-md text-gray-400 dark:text-gray-300">
                    {post.meta.excerpt}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
