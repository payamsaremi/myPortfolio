import TitleAnimation from "./TitleAnimation";

export default function PageVisualHeading({ title, description }) {
  return (
    <>
      <div className="mb-12">
        <TitleAnimation
          title={title}
          className="text-7xl font-bold tracking-tight text-black md:text-7xl dark:text-white"
        />
        <TitleAnimation
          title={description}
          className="text-xl text-gray-400 md:text-xl font-custom2 dark:text-gray-400"
        />
      </div>
    </>
  );
}
