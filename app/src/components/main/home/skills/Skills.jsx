"use client";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import {
  hardSkills,
  ortherSkills,
  softSkills,
} from "../../../../../src/data/skills";
import HardSkills from "./typeSkills/HardSkills";
import SoftSkills from "./typeSkills/SoftSkills";
const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });
export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col  p-10 md:p-16 sm:items-center text-newBlack bg-backgroundDegrade bg-center gap-10 w-full h-full"
    >
      <div className="flex flex-col md:flex-row gap-10 2xl:w-3/4">
        {/* Hard Skills */}
        <div className="bg-white shadow-xl flex flex-col p-4 items-center w-full md:w-[60%] md:p-10 ">
          <div className="flex flex-col gap-10 mb-4 w-full items-center">
            <h2
              className={`font-bold  uppercase text-xl ${orbitron.className}`}
            >
              Hards Skills
            </h2>
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
        </div>

        {/* Soft Skills */}
        <div className="bg-white shadow-xl flex flex-col p-4 items-center w-full md:w-[40%]   md:p-10">
          <div className="flex flex-col gap-10 mb-4 w-full items-center">
            <h2 className={`font-bold uppercase text-xl ${orbitron.className}`}>
              Softs Skills
            </h2>
            <ul className="flex gap-4 max-w-full flex-wrap justify-center items-center w-full md:gap-6 lg:w-4/5">
              {softSkills.map((skill, index) => (
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="md:text-base"
                  key={index}
                >
                  <SoftSkills skill={skill}></SoftSkills>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* methodologies  */}
      <div className="w-full 2xl:w-3/4">
        <div className="bg-white shadow-xl flex flex-col p-4 items-center w-full md:p-10">
          <div className="flex flex-col max-w-full flex-wrap justify-center items-center w-full  lg:w-4/5">
            <h3
              className={`font-bold uppercase text-xl mb-10 ${orbitron.className}`}
            >
              Méthodologie
            </h3>
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
        </div>
      </div>
    </section>
  );
}
