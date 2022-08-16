import Image from "next/image";
export default function Avatar({ image, size }) {
  return (
    <Image className={"rounded-xl"} src={image} width={size} height={size} />
  );
}
