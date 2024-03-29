/* eslint-disable react-refresh/only-export-components */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { Experience as ExperienceType } from "../types/global";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

const ExperienceCard: React.FC<ExperienceType> = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full ">
        <img
          src={icon}
          alt={company_name}
          className="object-contain rounded-full"
        />
      </div>
    }
  >
    <h3 className="text-[22px] font-bold text-white m-0">{title}</h3>
    <p className="text-secondary" style={{ margin: 0 }}>
      {company_name}
    </p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {points.map((point, index) => (
        <li key={index} className="text-secondary">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
