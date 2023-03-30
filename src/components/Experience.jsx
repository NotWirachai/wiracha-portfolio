import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experiences }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#082f49", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #082f49" }}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div>
        <img src={experiences.icon} alt={experiences.company_name} className="flex justify-center items-center w-full h-full" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experiences.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experiences.company_name}
      </p>
      <p className="text-white-100 text-[14px] pl-1 tracking-wider" style={{ margin: 0 }}>
        {experiences.points[0]}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>What I Have Done So Far</p>
        <h2 className={`${styles.heroHeadText}`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, i) => (
            <ExperienceCard key={i} experiences={experiences} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
