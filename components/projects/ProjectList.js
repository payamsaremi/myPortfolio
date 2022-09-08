import ProjectCard from "../../components/projects/ProjectCard";
import { projectData } from "../../data/projects/data";
import { motion } from "framer-motion";
export default function ProjectList() {
  const variants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };
  return (
    <motion.div
      initial={"closed"}
      animate={"open"}
      variants={variants}
      className="flex flex-col w-full"
    >
      {projectData.map((project, index) => {
        return (
          <motion.div variants={item} key={project.id}>
            <ProjectCard
              index={index}
              title={project.title}
              slug={project.slug}
              description={project.description}
              coverImage={project.coverImage}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
