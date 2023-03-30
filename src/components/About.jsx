import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServeiceCard = ({ index, title, icon, path }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        {path == `projects` ? (
          <a href={`#${path}`}>
            <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-fourthary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
          </a>
        ) : (
          <div
            onClick={() => window.open(path, "_blank")}
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-fourthary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        )}
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>Introduction</p>
        <h2 className={`${styles.heroHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I really love playing games. When I had the opportunity to try to create a game, I really like it too. Therefore, I want to develop myself to be able to continue working on
        this career path proficiently.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((e, i) => (
          <ServeiceCard key={e.title} id={i} index={i} {...e} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
