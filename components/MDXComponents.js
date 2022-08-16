import Image from "next/future/image";
import YouTube from "./Youtube";
function FilledImage(props) {
  return (
    <Image
      width={800}
      height={10}
      alt={props.alt}
      className="rounded-md"
      sizes="100vw"
      src={props.src}
      // placeholder="blur"
      // blurDataURL={"/images/blog/moon-river.jpg"}
      {...props}
    />
  );
}

const MDXComponents = {
  Image: FilledImage,
  YouTube,
};

export default MDXComponents;
