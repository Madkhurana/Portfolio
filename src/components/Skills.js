import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolue dark:text-dark dark:bg-light "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        {/* <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light  shadow-dark cursor-pointer p-6 ml-12"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div> */}

        <Skill name="HTML5" x="-4vw" y="2vw" />
        <Skill name="CSS3" x="-7vw" y="-17vw" />
        <Skill name="Javascript" x="25vw" y="10vw" />
        <Skill name="ReactJS" x="-5vw" y="14vw" />
        <Skill name="Spring" x="-20vw" y="-15vw" />
        <Skill name="Java" x="15vw" y="-12vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="App Development" x="-20vw" y="-18vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="-6vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
