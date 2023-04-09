import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  return (
    <section className="min-h-screen p-2">
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
            className="group rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-gray-900 p-4 sm:p-6">
              <div className="relative">
                <img
                  alt="Maxfood website"
                  src="https://res.cloudinary.com/dddvtrxcz/image/upload/v1679495725/samples/ecommerce/Screen_Shot_2023-03-22_at_17.35.01_zgh1fa.png"
                  className="h-44 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />
                <a className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90">
                  <img
                    src="/github.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
                <a
                  href="https://maxfood.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-[52px] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/url.png"
                    alt="Live preview"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">Maxfood</h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 ">
                  This website has a user-friendly interface for customers to
                  browse products and make purchases. It also has an admin
                  portal for managing orders, inventory, and shipping,
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                  Typescript
                </span>

                <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                  Next.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  Mongodb
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  NextAuth
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>
        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 1.5, 2.5)}
            className="group rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-gray-900 p-4 sm:p-6">
              <div className="relative">
                <img
                  alt="Yelp Camps"
                  src="https://res.cloudinary.com/dddvtrxcz/image/upload/v1681036206/samples/ecommerce/Screen_Shot_2023-04-09_at_1.28.45_PM_p8dtn5.png"
                  className="h-44 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />
                <a
                  href="https://github.com/Hunter-7010/yelpcampV3"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/github.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
                <a
                  href="https://yelpcamps.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-[52px] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/url.png"
                    alt="Live preview"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">YelpCamp</h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 ">
                  Lets users share and rate campgrounds they have visited, with
                  an interactive interface for easy navigation. It provides
                  valuable insights and recommendations for other campers
                  planning their next outdoor adventure.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                  Typescript
                </span>

                <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                  Next.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  Mongodb
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  NextAuth
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-400 px-2.5 py-0.5 text-xs text-white antialiased">
                  TRPC
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-gray-900 via-gray-500 to-gray-400 px-2.5 py-0.5 text-xs text-white antialiased">
                  Prisma
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>
        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 0.5, 2.5)}
            className="group rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-gray-900 p-4 sm:p-6">
              <div className="relative">
                <img
                  alt="Kanban website"
                  src="https://res.cloudinary.com/dddvtrxcz/image/upload/v1679498944/samples/ecommerce/Screen_Shot_2023-03-22_at_18.29.00_nxhmmd.png"
                  className="h-44 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />
                <a
                  href="https://github.com/Hunter-7010/kanban"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/github.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
                <a
                  href="https://kanbans.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-[52px] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/url.png"
                    alt="Live preview"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">Kanban</h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 ">
                  Allows users to easily manage daily tasks by adding and
                  categorizing to-do lists. The intuitive interface allows for
                  quick task prioritization and completion.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                  Typescript
                </span>

                <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                  Next.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  Mongodb
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  NextAuth
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 px-2.5 py-0.5 text-xs text-blue-800 antialiased">
                  Tailwind
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>

        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 1, 2.5)}
            className="group rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-gray-900 p-4 sm:p-6">
              <div className="relative">
                <img
                  alt="E-commerce"
                  src="https://res.cloudinary.com/dddvtrxcz/image/upload/v1679497986/samples/ecommerce/Screen_Shot_2023-03-22_at_18.12.54_vykkmh.png"
                  className="h-44 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />
                <a
                  href="https://github.com/Hunter-7010/crwn-clothing"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/github.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
                <a
                  href="https://stirring-cendol-393ef5.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-[52px] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/url.png"
                    alt="Live preview"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">
                    Crwn-Clothing
                  </h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 ">
                  This e-commerce website was created using Create-React-App,
                  Firebase, and SCSS. It features a modern and responsive
                  design.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs text-cyan-600">
                  React
                </span>

                <span className="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-xs text-orange-600">
                  Firebase
                </span>

                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500  to-pink-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  SCSS
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>

        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 2, 2.5)}
            className="group rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-gray-900 p-4 sm:p-6">
              <div className="relative">
                <img
                  alt="MaxFood"
                  src="https://res.cloudinary.com/dddvtrxcz/image/upload/v1673520472/samples/ecommerce/Screen_Shot_2023-01-12_at_13.44.51_vwgld5.png"
                  className="h-44 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />
                <a
                  href="https://github.com/Hunter-7010/max-food"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/github.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
                <a
                  href="https://maxfood.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-[52px] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <img
                    src="/url.png"
                    alt="Live preview"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">MaxFood</h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 ">
                  This was my first website, featuring an admin portal for
                  managing orders, inventory, shipping, and invoicing. Since
                  then, I have developed an improved version with enhanced
                  functionality and a more modern design.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs text-yellow-600">
                  Javascript
                </span>

                <span className="whitespace-nowrap rounded-full bg-green-500 px-2.5 py-0.5 text-xs text-white">
                  Node.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  Mongodb
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-yellow-500 via-green-500 to-blue-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  Passport.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-blue-500 to-white px-2.5 py-0.5 text-xs text-black antialiased">
                  Hope UI
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
