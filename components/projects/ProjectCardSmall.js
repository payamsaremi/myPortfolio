import Image from "next/future/image";

// import ProjectModal from "./ProjectModal";
export default function ProjectCardSmall({ title, coverImage, description }) {
  return (
    <div className="h-full w-full cursor-pointer ">
      <div className="flex flex-col md:border border-gray-800 hover:border-gray-700 mb-8 md:mr-2 md:p-3 transition-all">
        <div>
          <Image
            src={coverImage}
            width={800}
            height={800}
            className={"rounded-md"}
          />
        </div>
        <div className="text-3xl mb-1 mt-4">{title}</div>
        {/* <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
