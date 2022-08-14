import Container from "../components/Container";

export default function BlogLayout({ children, meta }) {
  return (
    <Container
      title={`${meta.title} – Payam Saremi`}
      description={meta.excerpt}
      date={new Date(meta.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-gray-50">
          {meta.title}
        </h1>
        <div className="w-full mt-4 prose lg:prose-lg dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  );
}