import { getPostBySlug, getSlugs } from "../../src/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import YouTube from "../../src/components/Youtube";
import Image from "next/image";
import BlogLayout from "../../layouts/blog";
export default function PostPage({ post }) {
  return (
    <>
      <BlogLayout meta={post.meta}>
        <MDXRemote
          {...post.source}
          components={{
            YouTube,
            Image,
          }}
        />
      </BlogLayout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
  });
  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
