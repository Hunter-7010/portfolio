import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
const WayvAgency = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundImage: "linear-gradient(to right, #512785, #2A1445)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date="September 2023"
      // iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="relative flex h-full w-full items-center justify-center">
          <Image
            layout="fill"
            src="/wayv.jpeg"
            alt="Wayv Agency"
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
          Wayv Agency
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Manage and optimize databases used by the website, ensuring data
          integrity, scalability, and efficient querying
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Collaborate with team members, and maintain code repositories.
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Identify and fix bugs and issues in the website's codebase to ensure a
          smooth and error-free user experience.
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Handling database operations, server maintenance, and implementing
          business logic as needed.
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Deploy the website using Docker containers to ensure consistency and
          portability across different environments.
        </li>
        <li className="pl-1 text-[14px] tracking-wider text-white">
          Manage the Docker containers and orchestrate them with Kubernetes to
          ensure scalability and easy management of the
          website.
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};
export default WayvAgency;
