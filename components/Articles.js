import Link from "next/link";
import Image from "next/image";
import TopArticles from "./TopArticles";
export default function Articles({ posts }) {
  return (
    <>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-8">
        <h1 className="mb-12 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Stories {"&"} Ideas
        </h1>
        <TopArticles posts={posts} />

        {posts.map((post) => {
          if (post.meta.isPublic === false) return;
          return (
            <Link href={`blog/${post.meta.slug}`} key={post.meta.slug}>
              <div className="mb-6 w-full rounded-sm bg-gray-900 cursor-pointer">
                <a>
                  <h1 className="font-bold text-2xl mb-1">{post.meta.title}</h1>
                </a>
                <p className="text-md text-gray-300">{post.meta.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
