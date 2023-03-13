import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
const StarWrapper = (Component:any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once:false, amount: 0.35 }}
        className={`relative z-0 mx-auto max-w-7xl`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
