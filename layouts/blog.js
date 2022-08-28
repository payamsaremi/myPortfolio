import Avatar from "../components/Avatar";
import Container from "../components/Container";
import formattedDate from "../utils/getFormattedDate";
export default function BlogLayout({ children, meta, readingTime }) {
  return (
    <Container
      title={`${meta.title} – Payam Saremi`}
      description={meta.excerpt}
      date={new Date(meta.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16">
        <div className="flex justify-between items-baseline w-full">
          <div className="flex flex-row justify-start items-center ">
            <Avatar image={"/images/payam-avatar.jpg"} size={"35"} />
            <div className="ml-2">
              <p className="dark:text-gray-20 text-brand-800 font-mono text-sm mr-2">
                Payam Saremi
              </p>
              <p className="text-gray-400 font-mono text-xs">
                {formattedDate(meta.date)}
              </p>
            </div>
          </div>
          <p className="text-xs font-mono text-gray-400">{readingTime}</p>
        </div>

        <h1 className="mt-7 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-gray-50">
          {meta.title}
        </h1>

        <div className="w-full mt-4 prose lg:prose-lg dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  );
}
