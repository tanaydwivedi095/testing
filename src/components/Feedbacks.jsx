import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { hobbies } from "../constants";

const HobbyCard = ({ index, hobby, description }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">🎯</p>

    <div className="mt-1">
      <p className="text-white font-bold text-[20px]">{hobby}</p>
      <p className="text-white tracking-wider text-[16px] mt-2">{description}</p>
    </div>
  </motion.div>
);

const Hobbies = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I Love Doing</p>
          <h2 className={styles.sectionHeadText}>My Hobbies.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {hobbies.map((hobby, index) => (
          <HobbyCard key={hobby.hobby} index={index} {...hobby} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Hobbies, "");
