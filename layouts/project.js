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
        <div className="hidden lg:block lg:w-1/3">
          <div className="fixed">
            <SildeTitleMenu meta={meta} projects={projects} />
          </div>
        </div>

        <div className="flex flex-col lg:w-full pt-7">
          <ProjectHeader
            title={meta.title}
            description={meta.description}
            mainImage={meta.mainImage}
          />

          <div className="flex flex-col ">
            <article>
              <div className="w-full prose text-justify lg:prose-lg font-normal dark:prose-dark max-w-3xl dark:text-zinc-300 pb-10">
                {children}
              </div>
            </article>
          </div>
        </div>
      </div>
    </Container>
  );
}
