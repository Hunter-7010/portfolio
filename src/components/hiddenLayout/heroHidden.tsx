import { Cursor, useTypewriter } from "react-simple-typewriter";
// import ThreeD from "./threeD";

// import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import animationData from "../assets/lottie/laptop.json";


const HeroHidden = () => {
  const [text] = useTypewriter({
    words: [
      "I code web applications that make unicorns dance.",
      "I craft modern user interfaces that teleport users to the future.",
      "I create responsive websites that morph into hammocks for tired browsers.",
      "I design intuitive user experiences that feel like solving a puzzle made of rainbows.",
      "I build mobile-friendly apps that bring kittens to life on your screen.",
      "I optimize website performance to make it faster than a speeding bullet.",
      "I develop scalable software solutions that can handle the weight of a thousand giggles.",
      "I create visually appealing interfaces that look like a rainbow exploded on your screen.",
      "I integrate complex systems seamlessly, like mixing colors to create a masterpiece.",
      "I specialize in front-end development, turning lines of code into digital works of art.",
      "I engineer custom web solutions that feel like magic spells in the hands of users.",
      "I implement cutting-edge technologies that make websites sparkle like disco balls.",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <section className="relative h-screen w-full">
      {/* <div className="relative">
        <Lottie
          animationData={animationData}
          loop={true}
          lottieRef={laptopRef}
          className="absolute top-[4rem] right-1/2 w-[40rem] md:scale-150 translate-x-1/2 md:bottom-0 md:right-0 md:top-0 md:h-[42rem] md:w-[45rem] md:translate-x-0"
        />
      </div> */}
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
    </section>
  );
};

export default HeroHidden;
