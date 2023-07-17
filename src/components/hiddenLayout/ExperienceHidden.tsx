import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import OnlineInfinity from "../experiences/onlineInfinity";
import MaxFood from "../experiences/maxfood";

const ExperienceHidden = () => {
  return (
    <>
      <div>
        <p className="opacity-70">What I have done so far</p>
        <h2 className="text-5xl font-black">Work Experience.</h2>
      </div>

      <div className="mt-20 flex min-h-screen flex-col">
        <VerticalTimeline>
          <OnlineInfinity />
          <MaxFood />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default ExperienceHidden;
