import { getPostBySlug, getSlugs } from "../../src/blog/api";
import { MDXRemote } from "next-mdx-remote";
import BlogLayout from "../../layouts/blog";
import components from "../../components/MDXComponents";
import { mdxToHtml } from "../../libs/mdx";

export default function PostPage({ post }) {
  return (
    <>
      <BlogLayout meta={post.meta} readingTime={post.readingTime}>
        <MDXRemote {...post.source} components={components} />
      </BlogLayout>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostBySlug(slug);

  const { html, readingTime } = await mdxToHtml(content);

  console.log("readingTime", readingTime);

  return { props: { post: { source: html, meta, readingTime } } };
};
