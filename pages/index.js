import Head from "next/head";
import Image from "next/image";
import Container from "../src/components/Container";
export default function Home() {
  return (
    <Container
      title={"Payam Saremi's Blog"}
      description={"My recent works, art and ideas"}
    >
      <div className="flex flex-row">
        <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
          <h1 className="font-bold text-5xl mb-2">Payam Saremi</h1>
          <p className="text-gray-200">Developer, Designer, Maker, Artist.</p>
        </div>
      </div>
    </Container>
  );
}
