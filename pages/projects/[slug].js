import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  getAllProjects,
  getProjectBySlug,
  getSlugs,
} from "../../data/projects/api";

import { MDXRemote } from "next-mdx-remote";
import { mdxToHtml } from "../../libs/mdx";
import ProjectLayout from "../../layouts/project";
import components from "../../components/MDXComponents";
import ProjectList from "../../components/projects/ProjectList";
export default function ProjectDetail({ project, projects }) {
  const router = useRouter();
  return (
    <ProjectLayout
      meta={project.meta}
      readingTime={project.readingTime}
      projects={projects}
    >
      <MDXRemote {...project.source} components={components} />
    </ProjectLayout>
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
  const { content, meta } = getProjectBySlug(slug);
  const projects = getAllProjects();

  const { html, readingTime } = await mdxToHtml(content);

  console.log("readingTime", readingTime);

  return {
    props: { project: { source: html, meta, readingTime }, projects: projects },
  };
};
