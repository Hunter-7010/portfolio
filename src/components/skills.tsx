import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Image from "next/image";
const Skills = () => {
  return (
    <section className="min-h-screen">
      <motion.div variants={textVariant(0)}>
        <h2 className="text-5xl font-black">Skills</h2>
      </motion.div>
        <motion.p variants={textVariant(0.8)} className="opacity-70 hidden md:block">Hover over to view proficiency.</motion.p>
      <div className="flex w-full items-center justify-center">
        <motion.div
          variants={textVariant(0.4)}
          className="grid grid-cols-4 gap-5 mt-12"
        >
          {" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/nextjs.svg"
              alt="Nextjs"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">89%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/typescript.png"
              alt="Typescript"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">86%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/javascript.png"
              alt="Javascript"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">89%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/mongodb.svg"
              alt="Mongodb"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">88%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/react.svg"
              alt="React"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">90%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/nextauth.png"
              alt="NextAuth"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">90%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/prisma.png"
              alt="Prisma"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">92%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/python.svg"
              alt="python"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">78%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-contain object-center"
              src="/tailwindcss.svg"
              alt="tailwind"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">92%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/html.png"
              alt="html"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">95%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/css.png"
              alt="css"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">91%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/trpc.svg"
              alt="Trpc"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">85%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/nodejs.png"
              alt="Nodejs"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">90%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-cover object-center"
              src="/express.png"
              alt="Express"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">90%</p>
              </div>
            </div>
          </div>{" "}
          <div className="group relative cursor-pointer">
            <Image
            width={92}
            height={50}
              className="h-28 w-28 rounded-full p-1 ring-4 ring-gray-300 dark:ring-gray-500 dark:bg-violet-400 filter group-hover:grayscale duration-300 ease-in-out object-contain object-center"
              src="/threejs.svg"
              alt="ThreeJS"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-28 w-28 rounded-full">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">74%</p>
              </div>
            </div>
          </div>{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
