import cn from "classnames";

export default function StackTag({ name, bgColor, color }) {
  return (
    <div
      className={cn(
        `flex justify-center items-center text-xs h-8 font-mono py-1 px-2 rounded-md mr-1 mb-1`,
        `${bgColor}`
      )}
    >
      {name}
    </div>
  );
}
