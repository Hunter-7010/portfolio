import { VerticalTimelineElement } from "react-vertical-timeline-component";

const OnlineInfinity = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundImage: "linear-gradient(to right, #101212, #08201D)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date="April 2023"
      // iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="/onlineInfinity.jpeg"
            alt="Online Infinity"
            className="h-[100%] w-[100%] rounded-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">
         Full-Stack Developer
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
         Online Infinity
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        <li className="text-white pl-1 text-[14px] tracking-wider">
          Assist in the development and maintenance of the company&apos;s
          website.
        </li>
        <li className="text-white pl-1 text-[14px] tracking-wider">
          Devloping unique animations with Framer-motion and GSAP.
        </li>
        <li className="text-white pl-1 text-[14px] tracking-wider">
          Speeding up the development process.
        </li>
        <li className="text-white pl-1 text-[14px] tracking-wider">
          Solving problems with responsive design and libraries.
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};
export default OnlineInfinity;
