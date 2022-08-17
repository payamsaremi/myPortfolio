import Head from "next/head";
import Image from "next/image";
import Articles from "../components/Articles";
import Container from "../components/Container";
import TopArticles from "../components/TopArticles";
import { getAllPosts } from "../data/blog/api";
export default function Home({ posts }) {
  return (
    <Container
      title={"Payam Saremi's Blog"}
      description={"My recent works, art and ideas"}
    >
      <div className="flex flex-row">
        <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
          <h1 className="font-bold text-5xl mb-2">Payam Saremi</h1>
          <p className="text-gray-200">Developer, Designer, Maker, Artist.</p>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 9);

  return {
    props: {
      posts,
    },
  };
}
