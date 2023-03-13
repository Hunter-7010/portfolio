import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
// import { api } from "../utils/api";
import Experience from "../components/Experience";
import Projects from "../components/projects";
import Contact from "../components/contact";
import TawkTo from "../components/Tawk";
import Skills from "../components/skills";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Zaki Orya</title>
        <meta name="description" content="Zaki Orya's Portofolio" key="desc" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="This Portofolio is created using nextjs, react three fiber, three.js, framer motion and tailwind"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="dark relative overflow-hidden scroll-smooth bg-gradient-to-t from-[#101212] to-[#08201D] text-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <TawkTo />
      </section>
    </>
  );
};

export default Home;
