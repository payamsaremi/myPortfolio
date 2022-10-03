import Image from "next/future/image";
export default function ProjectCardSmall({ title, coverImage, description }) {
  return (
    <div className="h-full w-full cursor-pointer ">
      <div className="flex flex-col border border-gray-800 hover:border-gray-700 mb-2 mr-2 p-3 transition-all">
        <div>
          <Image
            src={coverImage}
            width={400}
            height={400}
            className={"rounded-md"}
          />
        </div>
        <div className="text-3xl mb-1 mt-4">{title}</div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
