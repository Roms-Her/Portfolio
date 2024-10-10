import { softSkills } from "../../../../../../data/skills";
import SoftSkillsMotionLi from "../motionSkills/SoftSkills-Motion";

export default function SoftSkills({ orbitron }) {
  return (
    <div className="bg-[#fefff3] shadow-xl flex flex-col p-4 items-center w-full md:w-[40%]   md:p-10 border border-black">
      <div className="flex flex-col gap-10 mb-4 w-full items-center">
        <h2
          className={` text-center font-bold uppercase text-xl ${orbitron.className}`}
        >
          Softs Skills
        </h2>
        <ul className="flex gap-4 max-w-full flex-wrap justify-center items-center w-full md:gap-6 lg:w-4/5">
          {softSkills.map((skill, index) => (
            <SoftSkillsMotionLi key={index} skill={skill}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
