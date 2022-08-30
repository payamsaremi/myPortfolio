import Head from "next/head";
import Image from "next/image";
import Articles from "../components/blog/Articles";
import Container from "../components/Container";
import TopArticles from "../components/blog/TopArticles";
import { getAllPosts } from "../data/blog/api";

import { useEffect, useState } from "react";
import TitleAnimation from "../components/TitleAnimation";
export default function Home({ posts }) {
  return (
    <Container
      title={"Payam Saremi's Blog"}
      description={"My recent works, art and ideas"}
    >
      <div className="flex flex-row">
        <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16">
          <TitleAnimation
            className="font-thin text-6xl mb-2 z-0"
            title="Payam Saremi"
          />
          <p className="text-gray-200 text-2xl"> Developer, Designer, Maker</p>
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
