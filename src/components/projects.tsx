import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Image from "next/image";
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
            className="group rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-purple-900 p-4 sm:p-6">
              <div className="relative">
                <Image
                  height={176}
                  width={206}
                  alt="Wayv Agency website"
                  src="https://res.cloudinary.com/dcajz16bn/image/upload/v1710448680/Screenshot_2024-03-14_at_11.37.27_PM_o9j2dv.png"
                  className="group-hover:purplescale-[50%] h-44 w-full rounded-xl object-cover shadow-xl transition"
                />

                <a
                  href="https://lashthing.nl"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <Image
                    height={76}
                    width={66}
                    src="/url.png"
                    alt="Live preview"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">Lashthing</h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-purple-400">
                  {`A headless e-commerce platform using Next.js 14 and Shopify integration. Leveraging Next.js for front-end flexibility and Shopify's robust backend.`}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-700">
                  Shopify
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Next.js
                </span>

                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  Framer motion
                </span>
                <span className="whitespace-nowrap rounded-full bg-pink-100 px-2.5 py-0.5 text-xs text-pink-600">
                  Graphql
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 px-2.5 py-0.5 text-xs text-blue-800 antialiased">
                  Tailwind
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 px-2.5 py-0.5 text-xs text-gray-800 antialiased">
                  Shadcn
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>
        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 0, 2.5)}
            className="group rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-purple-900 p-4 sm:p-6">
              <div className="relative">
                <Image
                  height={176}
                  width={206}
                  alt="Wayv Agency website"
                  src="https://res.cloudinary.com/dcajz16bn/image/upload/v1695637243/Screen_Shot_2023-09-25_at_1.20.32_PM_pojwq9.png"
                  className="group-hover:purplescale-[50%] h-44 w-full rounded-xl object-cover shadow-xl transition"
                />
                <a className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90">
                  <Image
                    height={76}
                    width={66}
                    src="/github.png"
                    alt="github.com"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
                <a
                  href="https://wayv.agency/en"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-[52px] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <Image
                    height={76}
                    width={66}
                    src="/url.png"
                    alt="Live preview"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-white">
                    Wayv Agency
                  </h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-purple-400">
                  The agency&apos;s newly completed website stands out with its
                  exceptional functionality and captivating animations, setting
                  a new standard in the industry.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-700">
                  Strapi
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Next.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  SQL
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  Framer motion
                </span>
                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  GSAP
                </span>
                <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                  Jotai
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 px-2.5 py-0.5 text-xs text-blue-800 antialiased">
                  Tailwind
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-rose-300 via-rose-200 to-rose-100 px-2.5 py-0.5 text-xs text-rose-800 antialiased">
                  Lenis
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>
        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 0, 2.5)}
            className="group rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-purple-900 p-4 sm:p-6">
              <div className="relative">
                <Image
                  height={176}
                  width={206}
                  alt="Maxfood website"
                  src="https://res.cloudinary.com/dddvtrxcz/image/upload/v1679495725/samples/ecommerce/Screen_Shot_2023-03-22_at_17.35.01_zgh1fa.png"
                  className="group-hover:purplescale-[50%] h-44 w-full rounded-xl object-cover shadow-xl transition"
                />
                <a className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90">
                  <Image
                    height={76}
                    width={66}
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
                  <Image
                    height={76}
                    width={66}
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

                <p className="mt-2 text-sm leading-relaxed text-purple-400">
                  This website has a user-friendly interface for customers to
                  browse products and make purchases. It also has an admin
                  portal for managing orders, inventory, and shipping,
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                  Typescript
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Next.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Mongodb
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  NextAuth
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-400 px-2.5 py-0.5 text-xs text-white antialiased">
                  TRPC
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-purple-900 via-purple-500 to-purple-400 px-2.5 py-0.5 text-xs text-white antialiased">
                  Prisma
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>
        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 1.5, 2.5)}
            className="group rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-purple-900 p-4 sm:p-6">
              <div className="relative">
                <Image
                  height={176}
                  width={206}
                  alt="Yelp Camps"
                  src="https://res.cloudinary.com/dddvtrxcz/image/upload/v1681036206/samples/ecommerce/Screen_Shot_2023-04-09_at_1.28.45_PM_p8dtn5.png"
                  className="group-hover:purplescale-[50%] h-44 w-full rounded-xl object-cover shadow-xl transition"
                />
                <a
                  href="https://github.com/Hunter-7010/yelpcampV3"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <Image
                    height={76}
                    width={66}
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
                  <Image
                    height={76}
                    width={66}
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

                <p className="mt-2 text-sm leading-relaxed text-purple-400">
                  Lets users share and rate campgrounds they have visited, with
                  an interactive interface for easy navigation. It provides
                  valuable insights and recommendations for other campers.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                  Typescript
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Next.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Mongodb
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 px-2.5 py-0.5 text-xs text-white antialiased">
                  NextAuth
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-400 px-2.5 py-0.5 text-xs text-white antialiased">
                  TRPC
                </span>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-purple-900 via-purple-500 to-purple-400 px-2.5 py-0.5 text-xs text-white antialiased">
                  Prisma
                </span>
              </div>
            </div>
          </motion.article>
        </Tilt>
        <Tilt className="m-2 w-full sm:w-[350px]">
          <motion.article
            variants={fadeIn("right", "spring", 0.5 * 0.5, 2.5)}
            className="group rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm"
          >
            <div className="rounded-[10px] bg-purple-900 p-4 sm:p-6">
              <div className="relative">
                <Image
                  height={176}
                  width={206}
                  alt="Kanban website"
                  src="https://res.cloudinary.com/dddvtrxcz/image/upload/v1679498944/samples/ecommerce/Screen_Shot_2023-03-22_at_18.29.00_nxhmmd.png"
                  className="group-hover:purplescale-[50%] h-44 w-full rounded-xl object-cover shadow-xl transition"
                />
                <a
                  href="https://github.com/Hunter-7010/kanban"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-2  z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white hover:opacity-90"
                >
                  <Image
                    height={76}
                    width={66}
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
                  <Image
                    height={76}
                    width={66}
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

                <p className="mt-2 text-sm leading-relaxed text-purple-400">
                  Allows users to easily manage daily tasks by adding and
                  categorizing to-do lists. The intuitive interface allows for
                  quick task prioritization and completion.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                  Typescript
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Next.js
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
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

      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
