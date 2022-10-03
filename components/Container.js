import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./navigation/Navbar";
import Footer from "./Footer";
export default function Container({ children, ...customMeta }) {
  const router = useRouter();
  const meta = {
    ...customMeta,
  };
  console.log("meta", meta);

  function addJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "url": "${`https://payam.joinx.me/${router.asPath}`}",
        "headline": "${meta.title}",
        "name": "${meta.title}",
        "articleBody": "${meta.title}",
        "description": "${meta.description}",
        "image": [
          "${`${
            meta.coverImage
              ? `https://payam.joinx.me/${meta.coverImage}`
              : "https://payam.joinx.me/images/placeholder.jpeg"
          }`}"
         ],
        "datePublished": "${meta.date}",
        "dateModified": "${meta.date}",
        "author": [{
            "@type": "Person",
            "name": "Payam saremi",
            "url": "http://payam.joinx.me"
          }]
      }
      `,
    };
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://payam.joinx.me/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://payam.joinx.me/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Payam Saremi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:image"
          content={`https://payam.joinx.me/${meta.coverImage}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mesureme" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="jsonld"
        />
      </Head>

      <main className="bg-gray-50 dark:bg-black ">
        <div className="fixed w-full top-0">
          <Navbar />
        </div>

        <div className="flex">
          {/* <div className="flex w-36 h-full mr-5">
            <p className="w-full text-7xl -rotate-90"></p>
          </div> */}

          <div className="w-screen mt-9 px-2 pt-3">{children}</div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
