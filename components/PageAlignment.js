import CN from "classnames";
export default function PageAlignment({ children, className }) {
  return (
    <>
      <div
        className={CN(
          className,
          "flex flex-col items-start justify-center mx-auto w-full max-w-3xl"
        )}
      >
        {children}
      </div>
    </>
  );
}
