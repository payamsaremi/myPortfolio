import Link from "next/link";
export default function Articles({ posts }) {
  return (
    <>
      <div className="my-4">
        <h1 className="text-3xl font-bold underline mb-4">Articles:</h1>
        {posts.map((post) => {
          return (
            <div className="mb-5 bg-zinc-800 p-4 max-w-sm" key={post.meta.slug}>
              <Link href={`blog/${post.meta.slug}`}>
                <a>
                  <h1 className="font-bold text-xl">{post.meta.title}</h1>
                </a>
              </Link>
              <p className="text-sm text-zinc-300">{post.meta.excerpt}</p>
              <div>
                {post.meta.tags.map((tag) => {
                  return (
                    <Link key={tag} href={`/tags/${tag}`}>
                      <span className="mr-2 cursor-pointer text-zinc-500 hover:text-zinc-200">
                        {tag}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
