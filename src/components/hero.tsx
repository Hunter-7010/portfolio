import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ThreeD from "./threeD";
import { Link } from "react-scroll";
const Hero = () => {
  const [text, count] = useTypewriter({
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
    <section className="relative min-h-screen w-full">
      <div className="relative">
        <img
          src="/macbook.png"
          className="absolute top-64 md:bottom-0 md:right-0 md:top-0 md:h-[42rem]"
          alt="macbook"
        />
      </div>
      <div className="absolute top-[121px] z-20 mx-auto max-w-7xl pl-12">
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-bold sm:text-6xl">
            <span className="bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
              {" "}
              Hi, I&apos;m Zaki Orya{" "}
            </span>
          </h1>
          <p className="mt-5 text-base text-white sm:text-3xl">
            hi {text}
            <Cursor cursorColor="#FFFFFF" />
          </p>
        </div>
      </div>
      <div className="z-12 absolute right-28 top-72 md:bottom-0 md:right-36 md:top-4">
        {/* <ThreeD /> */}
      </div>

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
