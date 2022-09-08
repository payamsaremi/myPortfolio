import Container from "../../components/Container";
import ProjectCard from "../../components/projects/ProjectCard";
import { projectData } from "../../data/projects/data";
import { motion } from "framer-motion";
import TitleAnimation from "../../components/TitleAnimation";
import ProjectList from "../../components/projects/ProjectList";
export default function Projects() {
  return (
    <>
      <Container
        title={"Payam Saremi's Art, software and Design Projects"}
        description={"My recent Works, apps, Designs and Art"}
      >
        <div className="flex flex-col items-start justify-center max-w-5xl mx-auto mb-8 ">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 w-full ">
            <div>
              <TitleAnimation
                title="Projects"
                className="text-7xl md:text-7xl font-thin mb-4"
              />
            </div>
            <div className="flex flex-row max-w-xs justify-between items-end ">
              <div className="flex max-w-md">
                <p className="text-4xl font-light text-brand-800 dark:text-brand-400 leading-9">
                  <span className="font-thin cursor-default ">
                    {" "}
                    <span className="text-brand-500 dark:text-brand-100 hover:text-brand-200">
                      Products
                    </span>
                    ,{" "}
                    <span className="text-brand-500 dark:text-brand-200 hover:text-brand-100">
                      Software
                    </span>
                    ,{" "}
                    <span className="text-brand-500 dark:text-brand-300 hover:text-brand-400">
                      Music
                    </span>
                    ,{" "}
                    <span className="text-brand-500 dark:text-brand-200 hover:text-brand-300">
                      Art {"&"} Design
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <ProjectList />
        </div>
      </Container>
    </>
  );
}
