import Avatar from "../components/Avatar";
import Container from "../components/Container";
import formattedDate from "../utils/getFormattedDate";
export default function BlogLayout({ children, meta, readingTime }) {
  return (
    <Container
      title={`${meta.title} – Payam Saremi`}
      description={meta.excerpt}
      date={new Date(meta.date).toISOString()}
      coverImage={meta.coverImage}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-6xl dark:text-gray-100">
          {meta.title}
        </h1>
        <div className="mb-2 flex justify-between items-end w-full">
          <div className="flex flex-row justify-start items-center ">
            <div className="flex">
              <p className="text-xs font-mono text-gray-600 bg-gray-200 w-fit px-2 py-0.1 rounded-md m-1">
                {readingTime}
              </p>
              <p className="text-xs font-mono text-gray-600 bg-gray-200 w-fit px-2 py-0.1 rounded-md m-1">
                {formattedDate(meta.date)}
              </p>
            </div>
          </div>
        </div>

        <p className="text-2xl mt-4 text-gray-600 dark:text-gray-100">
          {meta.excerpt}
        </p>

        <div className="w-full mt-4 prose lg:prose-xl dark:prose-dark max-w-none dark:text-zinc-300">
          {children}
        </div>
      </article>
    </Container>
  );
}
