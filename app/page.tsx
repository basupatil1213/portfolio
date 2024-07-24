import Image from "next/image";
import { Home as LadingPage } from "@/components/home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basavaraj Patil - Full Stack Web Developer</title>
        <meta name="description" content="Basavaraj Patil is a skilled web developer specializing in modern, responsive, and user-friendly websites and applications. Proficient in Python, Java, JavaScript, and various front-end and back-end technologies, with experience in cloud platforms and DevOps tools." />
        <link rel="canonical" href="https://www.basavarajpatil.me/" />
      </Head>
      <main>
        <LadingPage />
      </main>
    </>
  );
}
