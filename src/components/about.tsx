import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import StarWrapper from "../hoc/SectionWrapper";
const About = () => {
  return (
    <section className="px-2 text-white" id="about">
      <motion.div variants={textVariant(0)}>
        <p className="opacity-70">Introduction</p>
        <h2 className="text-5xl font-black">Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
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
        <Tilt gyroscope={true} className="m-2 w-full sm:w-[250px]">
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 0,7)}
            className="animate-border rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-[3px] shadow-xl transition [animation-duration:_6s] hover:shadow-sm"
          >
            <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
              <img src="web.png" alt="web image" className="h-16 w-16" />
              <h3 className="mt-6 text-lg font-bold">Web Developer</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt gyroscope={true} className="m-2 w-full sm:w-[250px]">
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 1,7)}
            className="animate-border rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-[3px] shadow-xl transition [animation-duration:_6s] hover:shadow-sm"
          >
            <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
              <img src="backend.png" alt="web image" className="h-16 w-16" />
              <h3 className="mt-6 text-lg font-bold">Back Developer</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt gyroscope={true} className="m-2 w-full sm:w-[250px]">
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 2,7)}
            className="animate-border rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-[3px] shadow-xl transition [animation-duration:_6s] hover:shadow-sm"
          >
            <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
              <img src="innovation.png" alt="web image" className="h-16 w-16" />
              <h3 className="mt-6 text-lg font-bold">technology enthusiast</h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default StarWrapper(About, "about");
