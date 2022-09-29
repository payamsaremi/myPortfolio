import { MDXRemote } from "next-mdx-remote";
import ProjectLayout from "../../layouts/project";
import components from "../../components/MDXComponents";
import { mdxToHtml } from "../../libs/mdx";
export default function ProjectDetail({ post }) {
  if (!post) return <></>;

  const { content, meta } = post;

  const { html } = mdxToHtml(content);
  return (
    <div className="w-full h-screen overflow-scroll">
      {JSON.stringify(html)}
      <ProjectLayout meta={meta}>
        {/* <MDXRemote {...post.source} components={components} /> */}
      </ProjectLayout>
    </div>
  );
}
