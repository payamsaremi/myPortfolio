import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./navigation/Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
export default function Container({ children, ...customMeta }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

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
        <meta
          name="twitter:image"
          content={`https://payam.joinx.me/${meta.coverImage}`}
        />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="jsonld"
        />
      </Head>

      <main className="flex flex-col min-h-screen justify-between p-2 ">
        <Navbar />
        <motion.div
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          className={"pb-[500px]"}
        >
          {children}
        </motion.div>
        <Footer />
      </main>
    </div>
  );
}
