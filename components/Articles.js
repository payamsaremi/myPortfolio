import Link from "next/link";
import Image from "next/image";
export default function Articles({ posts }) {
  return (
    <>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Stories {"&"} Ideas
        </h1>
        {posts.map((post) => {
          if (post.meta.isPublic === false) return;
          return (
            <Link href={`blog/${post.meta.slug}`} key={post.meta.slug}>
              <div className="mb-6 w-full rounded-sm bg-gray-900 cursor-pointer">
                {post.meta.coverImage && (
                  <Image
                    src={post.meta.coverImage}
                    objectFit={"contain"}
                    width={500}
                    height={500}
                  />
                )}

                {/* {post.meta.coverImage} */}

                <a>
                  <h1 className="font-bold text-2xl mb-1">{post.meta.title}</h1>
                </a>
                <p className="text-md text-gray-300">{post.meta.excerpt}</p>
                {/* <div>
                  {post.meta.tags.map((tag) => {
                    return (
                      <Link key={tag} href={`/tags/${tag}`}>
                        <a className="mr-2 cursor-pointer text-gray-700 hover:text-gray-200">
                          {tag}
                        </a>
                      </Link>
                    );
                  })}
                </div> */}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
