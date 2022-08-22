import Container from "../../components/Container";
import ProjectCard from "../../components/ProjectCard";
export default function Projects() {
  const projectData = [
    {
      id: "1",
      title: "Personal Portfolio",
      description:
        "Personal profile made using Nextjs, React, Javascript and Mdx",
      coverImage: "/images/projects/personal-mock-white.png",
    },
    {
      id: "2",
      title: "Kip",
      description:
        "A productivity tool that help you keep your knowledge safe and accesable across all of your devices",
      coverImage: "/images/projects/kip-cover.png",
    },
    {
      id: "3",
      title: "Project - 1",
      description:
        "A project about saving the enviroment, using multiple software and hardware to mesure the damage to society",
      coverImage: "/images/projects/test-project.png",
    },
  ];
  return (
    <>
      <Container
        title={"Payam Saremi's Art, software and Design Projects"}
        description={"My recent Works, apps, Designs and Art"}
      >
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-8 ">
          <div className="flex flex-col md:flex-row justify-between mb-16 w-full">
            <h1 className="text-8xl md:text-7xl font-bold mb-4">Projects</h1>
            <div className="flex flex-row max-w-xs justify-between items-end">
              <div className="flex max-w-md">
                <p className="text-4xl font-light text-brand-400 leading-9">
                  <span className="text-5xl font-semibold text-brand-200 ">
                    {"Payam Saremi's"}
                  </span>{" "}
                  <span>
                    {" "}
                    <span className="text-brand-400">Products</span>,{" "}
                    <span className="text-brand-400">Software</span>,{" "}
                    <span className="text-brand-400">Music</span>,{" "}
                    <span className="text-brand-400">Art {"&"} Design</span>
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
                    title={project.title}
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
