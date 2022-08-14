import { getAllPosts } from "../../src/blog/api";
import Articles from "../../components/Articles";
import Head from "next/head";
import Container from "../../components/Container";
export default function Blog({ posts }) {
  return (
    <>
      <Container
        title={"Payam Saremi's Blog"}
        description={"My recent works, art and ideas"}
      >
        <Articles posts={posts} />
      </Container>
    </>
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