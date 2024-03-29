import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
const OnlineInfinity = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundImage: "linear-gradient(to right, #512785, #2A1445)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date="April 2023"
      // iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="relative flex h-full w-full items-center justify-center">
          <Image
            layout="fill"
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
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Assist in the development and maintenance of the company&apos;s
          website.
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Devloping unique animations with Framer-motion and GSAP.
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Developing unique 3D carousel using framer motion
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Maintaining Strapi CMS
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Speeding up the development process.
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Solving problems with responsive design and libraries.
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};
export default OnlineInfinity;
