import Container from "../components/Container";
import { getAllPosts } from "../data/blog/api";
import BoxCard from "../components/BoxCard";
import { motion, useAnimationControls } from "framer-motion";
import PageAlignment from "../components/PageAlignment";
export default function Home({ posts }) {
  const variants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const links = [
    {
      id: "2",
      image: "",
      title: "Blog",
      description: "Stories & Ideas",
      url: "/blog",
    },
    {
      id: "3",
      image: "",
      title: "Projects",
      description: "Apps, products, art & design",
      url: "/projects",
    },
  ];

  return (
    <Container
      title={"Payam Saremi's Blog"}
      description={"My recent works, art and ideas"}
    >
      {/* <div className="mx-auto max-w-3xl"> */}
      <PageAlignment>
        <div className="mb-2">
          <BoxCard
            image={"/images/me-avatar.png"}
            title={"Hey! I'm Payam"}
            description={
              "Payam is an experienced software developer and designer with a focus on AI and machine learning. He has a strong background in computer science, web development, and UX/UI design, and is proficient in various programming languages and frameworks. He is passionate about building autonomous and decentralized products and writes about emerging technologies such as blockchain, AI, and web development."
            }
            url={"/"}
          />
        </div>
        <motion.div
          initial={"closed"}
          animate={"open"}
          variants={variants}
          className="w-full grid grid-col-4 md:grid-cols-2 gap-2 mb-2"
        >
          {links.map((link) => (
            <motion.div variants={item} key={link.id}>
              <BoxCard
                image={link.image}
                title={link.title}
                description={link.description}
                url={link.url}
              />
            </motion.div>
          ))}
        </motion.div>
      </PageAlignment>

      {/* </div> */}
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
