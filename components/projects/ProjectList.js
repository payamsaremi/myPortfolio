import { motion } from "framer-motion";
import ProjectCardSmall from "./ProjectCardSmall";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
export default function ProjectList({ posts }) {
  return (
    <motion.div className="flex flex-col w-full max-w-full">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 1222: 4 }}>
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
