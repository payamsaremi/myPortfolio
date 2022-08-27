import Image from "next/future/image";
import { useRouter } from "next/router";
import { animate, motion } from "framer-motion";
import cn from "classnames";
import ProjectMainScreen from "../../components/projects/ProjectMainScreen";
import ProjectDetailScreen from "../../components/projects/ProjectDetailScreen";

export default function ProjectDetail() {
  const router = useRouter();

  return (
    <FadePageWrapper>
      <div className="">
        <div
          className="absolute top-0 left-0 m-6 text-xl font-mono cursor-pointer"
          onClick={() => router.push("/")}
        >
          Payam Saremi
        </div>
        <div
          className="absolute top-0 right-0 m-6 cursor-pointer pt-1 font-mono"
          onClick={() => router.back()}
        >
          Back
        </div>
        <ProjectMainScreen
          mainImage={"/images/projects/iphone-mock.jpg"}
          title={"Personal Portfolio Website"}
          description={
            "A collection of my blogs, projects and personal photography."
          }
        />
      </div>

      {/* NEXT PAGE */}
      <ProjectDetailScreen
        mainImage={"/images/projects/browser-portfolio.png"}
        title={"Experiances, Discoveries and Creation"}
        description={
          "My personal website is my opportunity to share my experiances with others. To share technoical or personal soloutions, with the hope that it can be useful for somone. My personal website considt of Blogs, Projects and my personal Photography."
        }
      />
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
