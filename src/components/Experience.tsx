import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import OnlineInfinity from "./experiences/onlineInfinity";
import WayvAgency from "./experiences/wayv";
import MaxFood from "./experiences/maxfood";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className="opacity-70">What I have done so far</p>
        <h2 className="text-5xl font-black">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex min-h-screen flex-col">
        <VerticalTimeline>
          <WayvAgency />
          <OnlineInfinity />
          <MaxFood />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
