import Container from "../../components/Container";
import Image from "next/future/image";
import Avatar from "../../components/Avatar";
import useHover from "../../hooks/useHover";
export default function Projects() {
  return (
    <>
      <Container
        title={"Payam Saremi's Art, software and Design Projects"}
        description={"My recent Works, apps, Designs and Art"}
      >
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-8 ">
          <div className="mb-16 w-full">
            <h1 className="text-7xl font-bold mb-4 ">Projects</h1>
            <div className="flex flex-row justify-between items-end">
              <div className="flex max-w-md">
                <p className="text-4xl font-light text-brand-400 leading-9">
                  <span className="text-4xl font-semibold text-brand-200 ">
                    Payam Saremi's
                  </span>{" "}
                  <span>
                    {" "}
                    Works, <span>Software</span>, <span>Art {"&"} Design</span>
                  </span>
                </p>
              </div>
              <div className="mr-4 hidden md:block ">
                <Avatar image={"/images/payam-avatar.jpg"} size={"35"} />
              </div>
            </div>
          </div>
          <div className="fex flex-row w-full">
            <div>
              <ProjectCard
                title={"Kip"}
                description={
                  " A productivity tool that help you keep your knowledge safe and accesable across all of your devices"
                }
                coverImage={"/images/projects/kip-cover.png"}
              />
              <ProjectCard
                title={"Project - 1"}
                description={
                  "A project about saving the enviroment, using multiple software and hardware to mesure the damage to society"
                }
                coverImage={"/images/projects/test-project.png"}
              />
            </div>
            <div></div>
          </div>
        </div>
      </Container>
    </>
  );
}

function ProjectCard({ title, description, coverImage }) {
  const [hoverRef, isHovered] = useHover();
  if (!coverImage) coverImage = "/images/placeholder.jpeg";
  return (
    <div
      ref={hoverRef}
      className="flex flex-col md:flex-row justify-between items-center mb-6 cursor-pointer"
    >
      <div className="flex flex-col max-w-sm mb-4 md:mr-10">
        <div className="flex justify-start  items-center mb-2">
          {" "}
          <div
            className={`flex justify-center p-3 bg-gray-700 ${
              isHovered ? "bg-brand-400" : "bg-gray-700 "
            } w-2 h-2 rounded-lg mr-2`}
          ></div>
          <h2 className="text-3xl ">{title}</h2>
        </div>

        <p
          className={`text-lg md:text-sm leading-5 font-mono text-gray-300 ${
            isHovered && "text-gray-100"
          }`}
        >
          {description}
        </p>
      </div>
      <div className="">
        <Image
          width={400}
          height={10}
          alt={"proj-name"}
          className="rounded-md"
          sizes="100vw"
          src={coverImage}
          placeholder="blur"
          blurDataURL={"/images/placeholder-blur.jpg"}
        />
      </div>
    </div>
  );
}
