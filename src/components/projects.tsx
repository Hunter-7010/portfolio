import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  return (
    <section className="p-2 min-h-screen">
      <motion.div variants={textVariant(0)}>
        <h2 className="text-5xl font-black">Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 max-w-4xl leading-[30px] opacity-70"
      >
        This portfolio showcases my skills and experience in solving real-world
        problems through a variety of projects. Each project is briefly
        described and includes links to the corresponding Github repository and
        live demo. This collection demonstrates my proficiency in different
        technologies, my ability to manage projects effectively, and my talent
        for solving complex problems.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 0, 2.5)}
            className="group animate-border rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 bg-[length:400%_400%] p-[3px] shadow-xl transition [animation-duration:_6s] hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-gray-900 p-4 sm:p-6">
              <div className="relative">
                <img
                  alt="Lava"
                  src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-44 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />
                <div className="absolute top-2 right-2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
                  <img
                    src="/github.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
                <div className="absolute top-2 right-[52px] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
                  <img
                    src="/url.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  Snippet
                </span>

                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  JavaScript
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>
        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 1, 2.5)}
            className="group animate-border rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 bg-[length:400%_400%] p-[3px] shadow-xl transition [animation-duration:_6s] hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-gray-900 p-4 sm:p-6">
              <div className="relative">
                <img
                  alt="Lava"
                  src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-44 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />
                <div className="absolute top-2 right-2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
                  <img
                    src="/github.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
                <div className="absolute top-2 right-[52px] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
                  <img
                    src="/url.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  Snippet
                </span>

                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  JavaScript
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
