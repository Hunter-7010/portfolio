import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
// import ThreeD from "./threeD";
import { Link } from "react-scroll";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/lottie/laptop.json";
import { useRef } from "react";

const Hero = () => {
  const laptopRef = useRef<LottieRefCurrentProps>(null);
  const [text] = useTypewriter({
    words: [
      "I develope Web applications",
      "I develope Modern user interfaces",
      "I create responsive websites",
      "I design intuitive user experiences",
      "I create responsive websites",
      "I design intuitive user experiences",
      "I build mobile-friendly apps",
      "I optimize website performance",
      "I develop scalable software solutions",
      "I craft visually appealing interfaces",
      "I integrate complex systems seamlessly",
      "I specialize in front-end development",
      "I engineer custom web solutions",
      "I implement cutting-edge technologies",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <section className="relative h-screen w-full">
      <div className="relative">
        <Lottie
          animationData={animationData}
          loop={true}
          lottieRef={laptopRef}
          className="absolute top-[4rem] right-1/2 w-[40rem] md:scale-150 translate-x-1/2 md:bottom-0 md:right-0 md:top-0 md:h-[42rem] md:w-[45rem] md:translate-x-0"
        />
      </div>
      <div className="absolute top-[121px] z-20 mx-auto max-w-7xl pl-12">
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-bold sm:text-6xl">
            <span className="bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
              {" "}
              Hi, I&apos;m Zaki Orya{" "}
            </span>
          </h1>
          <p className="mt-5 text-base text-white sm:text-3xl">
            {text}
            <Cursor cursorColor="#FFFFFF" />
          </p>
        </div>
      </div>
      {/* <div className="z-12 absolute right-28 top-72 md:bottom-0 md:right-36 md:top-4">
        <ThreeD />
      </div> */}

      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth
        offset={-70}
        duration={500}
        aria-current="page"
        className="z-12 absolute inset-x-1/2 bottom-16 h-[64px] w-[35px] cursor-pointer rounded-3xl border-4 border-white p-2"
      >
        <motion.div
          animate={{
            y: [0, 33, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mb-1 h-3 w-3 rounded-full bg-white"
        ></motion.div>
      </Link>
    </section>
  );
};

export default Hero;
