import Avatar from "../components/Avatar";
import Container from "../components/Container";
import formattedDate from "../utils/getFormattedDate";
export default function BlogLayout({ children, meta }) {
  return (
    <Container
      title={`${meta.title} – Payam Saremi`}
      description={meta.excerpt}
      date={new Date(meta.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto mb-16">
        <h1 className="mt-7 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-gray-100">
          {meta.title}
        </h1>

        <div className="w-full mt-4 prose lg:prose-lg dark:prose-dark max-w-none dark:text-zinc-300">
          {children}
        </div>
      </article>
    </Container>
  );
}
