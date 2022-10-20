import { getAllPosts } from "../../data/blog/api";
import Articles from "../../components/blog/Articles";
import Container from "../../components/Container";
import PageVisualHeading from "../../components/PageVisualHeading";
import PageAlignment from "../../components/PageAlignment";
export default function Blog({ posts }) {
  const pageTitle = "Stories & Ideas";
  const pageDescription =
    "A collection of ideas, notes, reciepes and essays created and maintained by me.";
  return (
    <>
      <Container title={"Payam Saremi's Blog"} description={pageDescription}>
        <PageAlignment>
          <PageVisualHeading title={pageTitle} description={pageDescription} />
          <Articles posts={posts} />
        </PageAlignment>
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
