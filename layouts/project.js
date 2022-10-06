import Container from "../components/Container";
import ProjectHeader from "../components/projects/ProjectHeader";
import SildeTitleMenu from "../components/projects/SideTitleMenu";
export default function ProjectLayout({ children, meta, projects }) {
  return (
    <Container
      title={`${meta.title} – Payam Saremi`}
      description={meta.excerpt}
      date={new Date(meta.date).toISOString()}
      type="project"
    >
      <div className="flex flex-col lg:flex-row h-full w-full ">
        <div className="hidden lg:block lg:w-1/5">
          <div className="fixed">
            <SildeTitleMenu meta={meta} projects={projects} />
          </div>
        </div>

        <div className="flex flex-col lg:w-full p-7">
          <div className="flex flex-row justify-between">
            <article>
              <h1 className="text-8xl mb-4">{meta.title}</h1>
              <p className="text-4xl text-zinc-100">{meta.description}</p>
              <div className="w-full prose text-justify lg:prose-lg font-normal max-w-full dark:prose-dark dark:text-zinc-300 ">
                {children}
              </div>
            </article>
            <div className={"p-7"}>
              <ProjectHeader
                title={meta.title}
                description={meta.description}
                mainImage={meta.mainImage}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
