import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./navigation/Navbar";
export default function Container({ children, ...customMeta }) {
  const router = useRouter();
  const meta = {
    title: "Hello000000",
    ...customMeta,
  };
  console.log("meta", meta);
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://payam.space${router.asPath}`}
        />
        <link rel="canonical" href={`https://payam.space${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Payam Saremi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> //TODO: Add Image seo */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mesureme" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="px-6 bg-gray-50 dark:bg-black">
        <Navbar />

        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
