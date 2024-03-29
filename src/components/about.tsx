import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import StarWrapper from "../hoc/SectionWrapper";
import Image from "next/image"
const About = () => {
  return (
    <section className="px-2 text-white min-h-screen" id="about">
      <motion.div variants={textVariant(0)}>
        <p className="opacity-70">Introduction</p>
      </motion.div>
        <motion.h2 variants={textVariant(0.4)} className="text-5xl font-black">Overview.</motion.h2>
      <motion.p
        variants={fadeIn("", "", 0.6, 1)}
        className="mt-4 max-w-4xl leading-[30px] opacity-70"
      >
        I am an experienced software developer proficient in JavaScript,
        TypeScript, and Python. I have worked with frameworks like React,
        Next.js, Node.js, and Three.js. My skills have allowed me to build
        innovative and dynamic applications. With my diverse skill set, I am
        capable of working on a variety of software projects and developing
        unique solutions. I am passionate about creating software that pushes
        the boundaries of what is possible.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        <Tilt  className="m-2 w-full sm:w-[250px]">
          <motion.div
            variants={fadeIn("right", "spring", 0.6 * 0,0.75)}
            className="animate-border rounded-xl bg-gradient-to-r from-purple-600 via-blue-50 to-purple-900 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
              <Image  width={64} height={64} src="/web.png" alt="web image" />
              <h3 className="mt-6 text-lg font-bold">Web Developer</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt  className="m-2 w-full sm:w-[250px]">
          <motion.div
            variants={fadeIn("right", "spring", 0.6 * 1,0.75)}
            className="animate-border rounded-xl bg-gradient-to-r from-purple-600 via-blue-50 to-purple-900 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
              <Image  width={64} height={64} src="/backend.png" alt="web image"  />
              <h3 className="mt-6 text-lg font-bold">Backend Developer</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt  className="m-2 w-full sm:w-[250px]">
          <motion.div
            variants={fadeIn("right", "spring", 0.6 * 2,0.75)}
            className="animate-border rounded-xl bg-gradient-to-r from-purple-600 via-blue-50 to-purple-900 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
              <Image  width={64} height={64} src="/innovation.png" alt="web image"  />
              <h3 className="mt-6 text-lg font-bold">technology enthusiast</h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default StarWrapper(About, "about");
