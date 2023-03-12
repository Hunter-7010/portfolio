import React from "react";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundImage: "linear-gradient(to right, #101212, #08201D)",
        color: "#fff",
      }}
    
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
       date="October 2022"
      // iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="/maxfood.jpeg"
            alt="Maxfood"
            className="h-[100%] w-[100%] rounded-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">Web devloper</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          max food
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        <li
          key={`experience-point-1`}
          className="text-white-100 pl-1 text-[14px] tracking-wider"
        >
          1{" "}
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className="opacity-70">What I have done so far</p>
        <h2 className="text-5xl font-black">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col min-h-screen">
        <VerticalTimeline>
          <ExperienceCard key={`experience-1`} />
          <ExperienceCard key={`experience-1`} />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
