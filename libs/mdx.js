import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

export async function mdxToHtml(source) {
  const mdxSource = await serialize(source, {
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

  return {
    html: mdxSource,
    readingTime: readingTime(source).text,
  };
}
