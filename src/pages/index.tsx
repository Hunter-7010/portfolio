import { type NextPage } from "next";
import { NextSeo } from "next-seo";

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
import Footer from "../components/footer";
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
      <NextSeo
      title="Zaki Orya's Portofolio"
      description="This Portofolio is created using nextjs, react three fiber, three.js, framer motion and tailwind."
      canonical="https://zakiorya.vercel.app/"
      openGraph={{
        url: 'https://zakiorya.vercel.app/',
        title: 'Zaki Orya Portofolio',
        description: 'I am an experienced software developer proficient in JavaScript, TypeScript, I have worked with frameworks like React, Next.js, Express',
        images: [
          {
            url: 'https://res.cloudinary.com/dcajz16bn/image/upload/v1688406602/Screen_Shot_2023-07-03_at_8.49.11_PM_s0ccts.png',
            width: 800,
            height: 600,
            alt: 'Site Preview',
            type: 'image/png',
          },
        ],
        siteName: 'Zaki Orya Portofolio',
      }}
      twitter={{
        handle: '@ZakiOrya',
        cardType: 'https://res.cloudinary.com/dcajz16bn/image/upload/v1688406602/Screen_Shot_2023-07-03_at_8.49.11_PM_s0ccts.png',
      }}
      
    />
      <section className="dark relative overflow-hidden scroll-smooth bg-gradient-to-t from-[#2A1445] to-[#512785] text-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
        <TawkTo />
      </section>
    </>
  );
};

export default Home;
