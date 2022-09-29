import { getAllPosts } from "../../data/blog/api";
import Articles from "../../components/blog/Articles";
import Container from "../../components/Container";
export default function Blog({ posts }) {
  return (
    <>
      <Container
        title={"Payam Saremi's Blog"}
        description={"My recent works, art and ideas"}
      >
        <div>
          <Articles posts={posts} />
        </div>
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
