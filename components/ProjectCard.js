import Image from "next/future/image";
import useHover from "../hooks/useHover";

export default function ProjectCard({ title, description, coverImage }) {
  const [hoverRef, isHovered] = useHover();
  if (!coverImage) coverImage = "/images/placeholder.jpeg";
  return (
    <div
      ref={hoverRef}
      className="flex flex-col md:flex-row justify-between mb-6 cursor-pointer "
    >
      <div className="flex flex-col justify-between md:mr-4 p-1 mb-4">
        <div className="flex flex-col justify-center max-w-sm ">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl mb-2 text-brand-50 font-semibold">
              {title}
            </h2>
          </div>
          <p
            className={`text-lg md:text-sm leading-5 font-mono text-gray-300 transition-all ${
              isHovered && "text-gray-100"
            }`}
          >
            {description}
          </p>{" "}
        </div>
      </div>
      <div>
        <Image
          width={400}
          height={10}
          alt={title}
          className="rounded-md"
          sizes="100vw"
          src={coverImage}
        />
      </div>
    </div>
  );
}
