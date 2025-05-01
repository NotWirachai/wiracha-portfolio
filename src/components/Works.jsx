import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Modal from "./canvas/Modal";

const ProjectCard = ({ index, name, image, icon, points }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-fourthary p-5 rounded-2xl sm:w-[360px] w-full">
        <div onClick={() => setOpen(!open)} className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
      </Tilt>

      {open ? (
        <Modal>
          <div className="flex flex-col gap-2 bg-fourthary px-4 pb-4 rounded-lg">
            <h1 className="text-lg text-white mt-2 pr-48">{points}</h1>
            <div className="flex flex-col gap-2">
              <img src={image} alt={name} className="w-[736px] h-full object-cover rounded-2xl" />
            </div>
            <div className="flex flex-row gap-2">
              <button onClick={() => setOpen(!open)} className="flex-1 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg rounded-full">
                Close
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>My Works</p>
        <h2 className={`${styles.heroHeadText}`}>Web Application Project</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((e, i) => (
          <ProjectCard key={`project-${i}`} id={i} index={i} {...e} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
