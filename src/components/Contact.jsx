import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { phone, gmail, home } from "../assets";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-300 p-8 rounded-2xl">
        <p className={`${styles.sectionHeadText}`}>Contact</p>
        <label className="flex flex-row" style={{ alignItems: "baseline" }}>
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={phone} alt="phone" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="text-white font-medium mb-4">+66 (0)83 9425254</p>
        </label>
        <label className="flex flex-row" style={{ alignItems: "baseline" }}>
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={gmail} alt="gmail" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="text-white font-medium mb-4">notwirachai@gmail.com</p>
        </label>
        <label className="flex flex-row" style={{ alignItems: "baseline" }}>
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={home} alt="home" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="text-white font-medium mb-4">150 Moo 4 Nong Pho Nong Ya Sai Supha Buri 72240</p>
        </label>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
