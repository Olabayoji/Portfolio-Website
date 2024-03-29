/* eslint-disable react-refresh/only-export-components */
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import React from "react";
import { SectionWrapper } from "../hoc";

// testing github account change

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a dynamic software engineer with a proven mobile and web
        application development track record. I am Proficient in Typescript,
        Javascript and frameworks like Next, React and React Native. I am
        committed to lifelong learning and I enjoy collaborating closely with
        clients to create efficient, scalable, and user-friendly solutions that
        solve real-world problems. Let's build the future together.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

type ServiceType = {
  index: number;
  title: string;
  icon: string;
};
const ServiceCard: React.FC<ServiceType> = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
