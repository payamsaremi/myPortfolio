import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Payam Saremi</title>
        <meta name="description" content="Made with 💚" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello! welcome to my website.</h1>
    </div>
  );
}
