import Container from "../components/Container";
import ProjectHeader from "../components/projects/ProjectHeader";
export default function ProjectLayout({ children, meta }) {
  return (
    <Container
      title={`${meta.title} – Payam Saremi`}
      description={meta.excerpt}
      date={new Date(meta.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto mb-16 pt-7">
        <div className="w-full max-w-full">
          <ProjectHeader
            title={meta.title}
            description={meta.description}
            mainImage={meta.mainImage}
          />
        </div>

        <div className="w-full mt-4 prose lg:prose-lg dark:prose-dark max-w-none dark:text-zinc-300">
          {children}
        </div>
      </article>
    </Container>
  );
}
