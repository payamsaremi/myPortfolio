import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { getProjectBySlug, getSlugs } from "../../data/projects/api";
import ProjectMainScreen from "../../components/projects/ProjectMainScreen";
import { MDXRemote } from "next-mdx-remote";
import { mdxToHtml } from "../../libs/mdx";
import ProjectLayout from "../../layouts/project";
import components from "../../components/MDXComponents";
export default function ProjectDetail({ project }) {
  const router = useRouter();
  return (
    <motion.div>
      <ProjectLayout meta={project.meta} readingTime={project.readingTime}>
        <MDXRemote {...project.source} components={components} />
      </ProjectLayout>
    </motion.div>
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

  const { html, readingTime } = await mdxToHtml(content);

  console.log("readingTime", readingTime);

  return { props: { project: { source: html, meta, readingTime } } };
};
