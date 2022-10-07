import Image from "next/future/image";
export default function ProjectCardSmall({ title, coverImage, description }) {
  return (
    <div className="h-full w-full cursor-pointer ">
      <div className="flex flex-col border border-gray-200 dark:border-gray-900 dark:hover:border-gray-700 hover:border-gray-700 mb-2 mr-2 p-3 transition-all">
        <div className="mb-2">
          <Image
            src={coverImage}
            width={400}
            height={400}
            className={"rounded-md"}
          />
        </div>
        {/* <div className="text-3xl mb-1 mt-4 font-semibold">{title}</div> */}
        <p className="font-bold text-2xl mb-1">{title}</p>
        <p className="text-md text-gray-300 text-sm ">{description}</p>
        {/* <p className="text-gray-600 dark:text-gray-300">{description}</p> */}
      </div>
    </div>
  );
}
