import { getPostBySlug, getSlugs } from "../../src/blog/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import YouTube from "../../components/Youtube";
import Image from "next/future/image";
import BlogLayout from "../../layouts/blog";
import components from "../../components/MDXComponents";
// import rehypeImgSize from "rehype-img-size";

export default function PostPage({ post }) {
  return (
    <>
      <BlogLayout meta={post.meta}>
        <MDXRemote {...post.source} components={components} />
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
