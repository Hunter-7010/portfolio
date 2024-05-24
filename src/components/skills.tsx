import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import SkillCloud from "./skillCloud";
const Skills = () => {
  return (
    <section className="min-h-screen">
      <motion.div variants={textVariant(0)}>
        <h2 className="text-5xl font-black">Skills</h2>
      </motion.div>
      <motion.p
        variants={textVariant(0.8)}
        className="hidden opacity-70 md:block"
      >
        Hover over to view proficiency.
      </motion.p>
      <div className="flex w-full items-center justify-center">
        <SkillCloud
          iconSlugs={[
            "react",
            "next.js",
            "tailwindcss",
            "typescript",
            "mongodb",
            "prisma",
            "nodejs",
            "express",
            "threedotjs",
            "html5",
            "css3",
            "trpc",
            "javascript",
            "python",
            "nextdotjs",
            "vercel",
            "git",
            "figma",
            "framer",
            "react-native",
            "nextui",
            "auth0",
            "postgres",
            "drizzle",
            "postgresql",
            "supabase",
            "amazons3",
            "shopify",
            "strapi",
            "expo",
            "prismic",
            "greensock"
          ]}
        />
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
