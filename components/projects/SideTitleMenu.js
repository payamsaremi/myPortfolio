import TitleAnimation from "../TitleAnimation";
export default function SildeTitleMenu({ projectTitle }) {
  return (
    <>
      <div className={"p-5"}>
        <TitleAnimation
          title={projectTitle}
          className="text-6xl xl:text-8xl mb-2 xl:leading-[80px] xl:mb-5 text-gray-800 dark:text-white font-semibold"
        />
        <p className="text-2xl xl:text-2xl mb-2 text-gray-800 dark:text-gray-300">
          Product Engineer
        </p>
      </div>
    </>
  );
}
