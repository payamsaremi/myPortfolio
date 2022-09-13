import Container from "../components/Container";
import { getAllPosts } from "../data/blog/api";
import BoxCard from "../components/BoxCard";
export default function Home({ posts }) {
  return (
    <Container
      title={"Payam Saremi's Blog"}
      description={"My recent works, art and ideas"}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-6">
        <BoxCard
          image={true}
          title={"Hey! I'm Payam"}
          description={"Web developer and designer."}
          url={"/"}
        />
        <BoxCard title={"Blog"} description={"Stories & Ideas"} url={"/blog"} />
        <BoxCard
          title={"Projects"}
          description={"Apps, products, art & design"}
          url={"/projects"}
        />
        {/* <BoxCard title={"Résumé"} description={"Download my résumé"} /> */}
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
