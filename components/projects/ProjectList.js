import { projectData } from "../../data/projects/data";
import { motion } from "framer-motion";
import ProjectCardSmall from "./ProjectCardSmall";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
export default function ProjectList({ posts, setSelectedPostSlug }) {
  const variants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial={"closed"}
      animate={"open"}
      variants={variants}
      className="flex flex-col w-full max-w-full "
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 1222: 6 }}>
        <Masonry>
          {posts.map((project, index) => {
            return (
              <Link href={`/projects/${project.meta.slug}`} key={index}>
                <div>
                  <ProjectCardSmall
                    index={index}
                    title={project.meta.title}
                    slug={project.meta.slug}
                    description={project.meta.description}
                    coverImage={project.meta.coverImage}
                  />
                </div>
              </Link>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </motion.div>
  );
}
