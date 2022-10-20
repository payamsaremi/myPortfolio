import { Children, useState } from "react";
import Container from "../../components/Container";
import ProjectList from "../../components/projects/ProjectList";
import { getAllProjects } from "../../data/projects/api";
import PageVisualHeading from "../../components/PageVisualHeading";
import PageAlignment from "../../components/PageAlignment";
export default function Projects({ posts }) {
  return (
    <>
      <Container
        title={"Payam Saremi's Art, Software and Design Projects"}
        description={"My recent Works, apps, Designs and Art"}
      >
        <PageAlignment>
          <PageVisualHeading
            title={"Latest Projects"}
            description={"Payam's Art, Software and Design Projects"}
          />
          <ProjectList posts={posts} />
        </PageAlignment>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllProjects();

  return {
    props: {
      posts,
    },
  };
}
