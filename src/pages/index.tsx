import { motion, useMotionValue, useSpring } from "framer-motion";
import { type NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { MouseEvent, useEffect } from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
// import { api } from "../utils/api";
import { Toaster } from "react-hot-toast";
import Contact from "../components/contact";
import Experience from "../components/Experience";
import Footer from "../components/footer";
import Projects from "../components/projects";
import Skills from "../components/skills";
const Home: NextPage = () => {
  // const physics = { damping: 120, stiffness: 700 };
  // const mouseX = useMotionValue(0);
  // const mouseXSpring = useSpring(mouseX);
  // const mouseY = useMotionValue(0);
  // const mouseYSpring = useSpring(mouseY);
  // const circleRadius = useMotionValue(64);
  // const circleRadiusSpring = useSpring(circleRadius);

  // function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
  //   const { left, top } = currentTarget.getBoundingClientRect();
  //   mouseX.set(clientX - left - circleRadius.get() / 2);
  //   mouseY.set(clientY - top - circleRadius.get() / 2);
  // }
  const physics = { damping: 20, stiffness: 300,mass:0.5 };
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const mouseSpring={
    x: useSpring(mouse.x,physics),
    y: useSpring(mouse.y,physics),
  }
  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - 20);
    mouse.y.set(clientY - 20);
  };

  useEffect(() => {
    window.addEventListener(
      "mousemove",
      manageMouseMove as unknown as EventListener
    );
    return () => {
      window.removeEventListener(
        "mousemove",
        manageMouseMove as unknown as EventListener
      );
    };
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Zaki Orya"
        description="This Portofolio is created using nextjs, react three fiber, three.js, framer motion and tailwind."
        canonical="https://zakiorya.vercel.app/"
        openGraph={{
          url: "https://zakiorya.vercel.app/",
          title: "Zaki Orya Portofolio",
          description:
            "I am an experienced software developer proficient in JavaScript, TypeScript, I have worked with frameworks like React, Next.js, Express",
          images: [
            {
              url: "https://res.cloudinary.com/dcajz16bn/image/upload/v1688406602/Screen_Shot_2023-07-03_at_8.49.11_PM_s0ccts.png",
              width: 800,
              height: 600,
              alt: "Site Preview",
              type: "image/png",
            },
          ],
          siteName: "Zaki Orya Portofolio",
        }}
        twitter={{
          handle: "@ZakiOrya",
          cardType:
            "https://res.cloudinary.com/dcajz16bn/image/upload/v1688406602/Screen_Shot_2023-07-03_at_8.49.11_PM_s0ccts.png",
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
      />
      <section className="dark relative overflow-hidden scroll-smooth bg-gradient-to-t from-[#2A1445] to-[#512785] text-white max-lg:px-5">
        {/* <motion.div
          onMouseMove={handleMouseMove}
          className="fixed inset-0 h-screen w-screen z-[100]"
        >
          <motion.div
            style={{
              x: mouseXSpring,
              y: mouseYSpring,
              width: circleRadiusSpring,
              height: circleRadiusSpring,
            }}
            className="fixed top-0 left-0 flex items-center justify-center rounded-full border-2 border-dashed border-purple-500 backdrop-saturate-200"
          />
        </motion.div> */}
        <motion.div
          style={{ left: mouseSpring.x, top: mouseSpring.y }}
          className="pointer-events-none z-[10000] fixed h-10 w-10 rounded-full border-2 border-dashed border-purple-500 backdrop-saturate-200"
        />
        <Toaster />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        {/* <TawkTo /> */}
      </section>
    </>
  );
};

export default Home;
