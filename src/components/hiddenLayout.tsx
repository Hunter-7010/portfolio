import { motion, useMotionTemplate, MotionValue } from "framer-motion";
import AboutHidden from "./hiddenLayout/aboutHidden";
import ContactHidden from "./hiddenLayout/contactHidden";
import ProjectsHidden from "./hiddenLayout/projectsHidden";
import SkillsHidden from "./hiddenLayout/skillsHidden";
import ExperienceHidden from "./hiddenLayout/ExperienceHidden";
import FooterHidden from "./hiddenLayout/footerHidden";
import HeroHidden from "./hiddenLayout/heroHidden";
import NavbarHidden from "./hiddenLayout/navbarHidden";

type Props = {
  circleRadiusSpring: MotionValue<number>;
  mouseXSpring: MotionValue<number>;
  mouseYSpring: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  circleRadius: MotionValue<number>;
};

const HiddenLayout = ({
  circleRadiusSpring,
  mouseXSpring,
  mouseYSpring,
}: Props) => {
  return (
    <motion.div
      style={{
        clipPath: useMotionTemplate`circle(${circleRadiusSpring}px at ${mouseXSpring}px ${mouseYSpring}px) `,
      }}
      className="absolute inset-0 z-[100] bg-purple-200 "
    >
      <NavbarHidden />
      <HeroHidden />
      <div className="mx-auto max-w-7xl">
        <span className="hash-span">&nbsp;</span>
        <AboutHidden />
      </div>
      <div className="mx-auto max-w-7xl">
        <span className="hash-span">&nbsp;</span>
        <ExperienceHidden />
      </div>

      <div className="mx-auto max-w-7xl">
        <span className="hash-span">&nbsp;</span>
        <SkillsHidden />
      </div>
      <div className="mx-auto max-w-7xl">
        <span className="hash-span">&nbsp;</span>
        <ProjectsHidden />
      </div>
      <div className="mx-auto max-w-7xl">
        <span className="hash-span">&nbsp;</span>
        <ContactHidden />
      </div>

      <FooterHidden />
    </motion.div>
  );
};

export default HiddenLayout;
