import Container from "../components/Container";
import ProjectHeader from "../components/projects/ProjectHeader";
import SildeTitleMenu from "../components/projects/SideTitleMenu";
export default function ProjectLayout({ children, meta }) {
  return (
    <Container
      title={`${meta.title} – Payam Saremi`}
      description={meta.excerpt}
      date={new Date(meta.date).toISOString()}
      type="project"
    >
      <div className="h-full">
        <div>
          <ProjectHeader
            title={meta.title}
            description={meta.description}
            mainImage={meta.mainImage}
          />
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="w-2/3">
            <SildeTitleMenu projectTitle={meta.title} />
          </div>
          <article className="w-full flex justify-center">
            <div className="w-full prose text-justify lg:prose-lg font-normal dark:prose-dark max-w-3xl dark:text-zinc-300 pb-10">
              {children}
            </div>
          </article>
          <div className="w-1/2">{/* Empty for now */}</div>
        </div>
      </div>
    </Container>
  );
}
