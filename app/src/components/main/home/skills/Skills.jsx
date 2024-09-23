"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  hardSkills,
  ortherSkills,
  softSkills,
} from "../../../../../src/data/skills";
import HardSkills from "./typeSkills/HardSkills";
import SoftSkills from "./typeSkills/SoftSkills";
export default function Skills() {
  const { ref: hardSkillsRef, inView: hardSkillsView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: softSkillsRef, inView: softSkillsView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: methodologiesRef, inView: methodologiesViews } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="flex flex-col  p-10 md:p-16 sm:items-center text-newBlack bg-backgroundDegrade bg-center gap-10 w-full h-full"
    >
      <div className="flex flex-col md:flex-row gap-10 2xl:w-3/4">
        {/* Hard Skills */}
        <motion.div
          ref={hardSkillsRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: hardSkillsView ? 1 : 0,
            scale: hardSkillsView ? 1 : 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="bg-white shadow-xl flex flex-col p-4 items-center w-full md:w-[60%] md:p-10 "
        >
          <div className="flex flex-col gap-10 mb-4 w-full items-center">
            <h2 className="font-bold  uppercase text-xl orbitron">Hards Skills</h2>
            <ul className="flex gap-4 max-w-full flex-wrap justify-center items-center w-full md:gap-6 lg:w-4/5">
              {hardSkills.map((skill, index) => (
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="uppercase font-semibold md:text-base"
                  key={index}
                >
                  <HardSkills skill={skill} />
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          ref={softSkillsRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: softSkillsView ? 1 : 0,
            scale: softSkillsView ? 1 : 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="bg-white shadow-xl flex flex-col p-4 items-center w-full md:w-[40%]   md:p-10"
        >
          <div className="flex flex-col gap-10 mb-4 w-full items-center">
            <h2 className="font-bold uppercase text-xl orbitron">Softs Skills</h2>
            <ul className="flex gap-4 max-w-full flex-wrap justify-center items-center w-full md:gap-6 lg:w-4/5">
              {softSkills.map((skill, index) => (
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className=" font-semibold md:text-base"
                  key={index}
                >
                  <SoftSkills skill={skill}></SoftSkills>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* methodologies  */}
      <div className="w-full 2xl:w-3/4">
        <motion.div
          ref={methodologiesRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: methodologiesViews ? 1 : 0,
            scale: methodologiesViews ? 1 : 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="bg-white shadow-xl flex flex-col p-4 items-center w-full md:p-10"
        >
          <div className="flex flex-col max-w-full flex-wrap justify-center items-center w-full  lg:w-4/5">
            <h3 className="font-bold uppercase text-xl mb-10 orbitron">Méthodologie</h3>
            <ul className="flex gap-6 md:gap-10 max-w-full flex-wrap justify-center items-center w-3/4">
              {ortherSkills.map((skill, index) => (
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  
                  key={index}
                >
                  <Link
                    href={skill.doc}
                    target="_blank"
                    className="px-4 py-2 bg-backgroundLigth text-black hover:text-white hover:bg-orange-500 hover:shadow-lg rounded-lg"
                  >
                    {skill.description}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
