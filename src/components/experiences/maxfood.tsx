import { VerticalTimelineElement } from "react-vertical-timeline-component";

const MaxFood = () => {
    return (
      <VerticalTimelineElement
  
        contentStyle={{
          backgroundImage: "linear-gradient(to right, #512785, #2A1445)",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date="October 2021"
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
          <h3 className="text-[24px] font-bold text-white">
            Marketing Assistant
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            Max Food Group Sp. z o.o
          </p>
        </div>
  
        <ul className="mt-5 ml-5 list-disc space-y-2">
          <li className="text-white-100 pl-1 text-[14px] tracking-wider">
            Assist in the development and maintenance of the company&apos;s website,
            including updating content, images, and layout.
          </li>
          <li className="text-white-100 pl-1 text-[14px] tracking-wider">
            Assist in the development of marketing campaigns and initiatives.
          </li>
          <li className="text-white-100 pl-1 text-[14px] tracking-wider">
            Maintain and update the company&apos;s website and social media platforms.{" "}
          </li>
          <li className="text-white-100 pl-1 text-[14px] tracking-wider">
            Monitor market trends and conduct market research.
          </li>
          <li className="text-white-100 pl-1 text-[14px] tracking-wider">
            Assist in the creation of marketing materials, such as presentations,
            social media content, and email campaigns.{" "}
          </li>
        </ul>
      </VerticalTimelineElement>
    );
  };

  export default MaxFood;