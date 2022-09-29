import Image from "next/future/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ProjectMainScreen from "../../components/projects/ProjectMainScreen";
import ProjectDetailScreen from "../../components/projects/ProjectDetailScreen";
import { projectData } from "../../data/projects/data";
export default function ProjectDetail({ project }) {
  const { coverImage, title, description, liveSite, mainImage, pages } =
    project;
  const router = useRouter();
  const { slug } = router.query;
  return (
    <FadePageWrapper>
      <motion.div>
        <div
          className="absolute top-0 left-0 m-6 text-xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          {/* paj.am */}
          {/* <Image width={"75"} href="/images/pajam-logo-1.png"></Image> */}
        </div>
        <div
          className="absolute top-0 right-0 m-6 cursor-pointer pt-1 "
          onClick={() => router.back()}
        >
          Back
        </div>
        <div>
          <ProjectMainScreen
            mainImage={mainImage}
            coverImage={coverImage}
            title={title}
            description={description}
            liveSite={liveSite}
          />
        </div>
      </motion.div>
    </FadePageWrapper>
  );
}

export function FadePageWrapper({ children }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
}

export const getStaticPaths = async () => {
  const paths = projectData.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  console.log("slugslugslug", slug);
  const project = projectData.filter((project) => {
    if (project.slug === slug) return project;
  })[0];

  return { props: { project: project } };
};
