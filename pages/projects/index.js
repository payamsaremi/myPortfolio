import Container from "../../components/Container";
import ProjectCard from "../../components/projects/ProjectCard";
import { projectData } from "../../data/projects/data";
import { motion } from "framer-motion";
import TitleAnimation from "../../components/TitleAnimation";
import ProjectList from "../../components/projects/ProjectList";
export default function Projects() {
  return (
    <>
      <Container
        title={"Payam Saremi's Art, software and Design Projects"}
        description={"Recent Works, apps, Designs and Art"}
      >
        <ProjectList />
      </Container>
    </>
  );
}
