import { useState } from "react";
import Container from "../../components/Container";
import ProjectList from "../../components/projects/ProjectList";
import { getAllProjects } from "../../data/projects/api";
export default function Projects({ posts }) {
  return (
    <>
      <Container
        title={"Payam Saremi's Art, software and Design Projects"}
        description={"My recent Works, apps, Designs and Art"}
      >
        <div className="flex flex-row items-start justify-center mx-auto ">
          <div className="w-full max-w-full h-full">
            <ProjectList posts={posts} />
          </div>
        </div>
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
