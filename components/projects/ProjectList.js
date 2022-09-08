import ProjectCard from "../../components/projects/ProjectCard";
import { projectData } from "../../data/projects/data";
import { motion } from "framer-motion";
import TitleAnimation from "../../components/TitleAnimation";
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
    <div className="flex flex-col items-start justify-center max-w-5xl mx-auto mb-8 ">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 w-full ">
        <div>
          <TitleAnimation
            title="Projects"
            className="text-7xl md:text-7xl font-thin mb-4"
          />
        </div>
      </div>
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
    </div>
  );
}
