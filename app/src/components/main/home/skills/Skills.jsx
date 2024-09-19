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

  return (
    <section
      id="skills"
      className="flex flex-col p-8 mb-10 sm:items-center md:mb-24 text-accessible gap-10"
    >
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
        className="backdrop-blur-xl bg-[#d6e0ff40] shadow-xl flex flex-col w-full rounded-3xl p-4 items-center lg:w-5/6 2xl:w-4/6 md:p-8"
      >
        <h2 className="font-bold mb-10 uppercase text-xl">Hards Skills</h2>
        <div className="flex flex-col gap-10 mb-4 w-full items-center">
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

          <div className="flex flex-col max-w-full flex-wrap justify-center items-center w-full  lg:w-4/5">
            <h3 className="font-bold uppercase text-xl mb-10">Autres</h3>
            <ul className="flex gap-6 max-w-full flex-wrap justify-center items-center w-full">
              {ortherSkills.map((skill, index) => (
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="uppercase font-semibold md:text-base"
                  key={index}
                >
                  <Link href={skill.doc} target="_blank" className="px-4 py-2 bg-white text-black hover:text-white hover:bg-orange-500 rounded-lg">
                    {skill.description}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

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
        className="backdrop-blur-xl bg-[#d6e0ff40] shadow-xl flex flex-col w-full rounded-3xl p-4 items-center lg:w-5/6 2xl:w-4/6 md:p-8"
      >
        <h2 className="font-bold mb-10 uppercase text-xl">Softs Skills</h2>

        <div className="flex mb-4 w-full justify-center">
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
    </section>
  );
}
