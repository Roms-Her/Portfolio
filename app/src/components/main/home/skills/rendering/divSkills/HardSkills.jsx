import { hardSkills } from "../../../../../../data/skills";
import HardSkillsMotionLi from "../motionSkills/HardSkills-MotionLi";

export default function SkillsCard({ orbitron }) {
  return (
    <div className="bg-[#fefff3] shadow-xl flex flex-col p-4 items-center w-full md:w-[60%] md:p-10 border border-black">
      <div className="flex flex-col gap-10 mb-4 w-full items-center h-full ">
        <h2
          className={`flex font-bold text-center  uppercase text-xl ${orbitron.className}`}
        >
          Hards Skills
        </h2>
        <ul className="flex h-full gap-4 max-w-full flex-wrap justify-center items-center w-full md:gap-6 lg:w-4/5">
          {hardSkills.map((skill, index) => (
            <HardSkillsMotionLi key={index} skill={skill} />
          ))}
        </ul>
      </div>
    </div>
  );
}
