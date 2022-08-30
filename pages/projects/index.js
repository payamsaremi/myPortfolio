import Container from "../../components/Container";
import ProjectCard from "../../components/projects/ProjectCard";
import { projectData } from "../../data/projects/data";
export default function Projects() {
  return (
    <>
      <Container
        title={"Payam Saremi's Art, software and Design Projects"}
        description={"My recent Works, apps, Designs and Art"}
      >
        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mb-8 ">
          <div className="flex flex-col md:flex-row justify-between mb-16 w-full">
            <h1 className="text-7xl md:text-7xl font-bold mb-4">Projects</h1>
            <div className="flex flex-row max-w-xs justify-between items-end">
              <div className="flex max-w-md">
                <p className="text-4xl font-light text-brand-800 dark:text-brand-400 leading-9">
                  <span className="font-thin ">
                    {" "}
                    <span className="text-brand-500 dark:text-brand-400">
                      Products
                    </span>
                    ,{" "}
                    <span className="text-brand-500 dark:text-brand-400">
                      Software
                    </span>
                    ,{" "}
                    <span className="text-brand-500 dark:text-brand-400">
                      Music
                    </span>
                    ,{" "}
                    <span className="text-brand-500 dark:text-brand-400">
                      Art {"&"} Design
                    </span>
                  </span>
                </p>
              </div>
              <div className="mr-4 hidden md:block ">
                {/* <Avatar image={"/images/payam-avatar.jpg"} size={"35"} /> */}
              </div>
            </div>
          </div>
          <div className="fex flex-row w-full">
            <div>
              {projectData.map((project) => {
                return (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    slug={project.slug}
                    description={project.description}
                    coverImage={project.coverImage}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
