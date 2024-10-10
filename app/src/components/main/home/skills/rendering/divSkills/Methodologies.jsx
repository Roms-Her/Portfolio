import { ortherSkills } from '../../../../../../data/skills'
import MethodologiesMotionLi from '../motionSkills/Methodologies-MotionLi'
export default function Methodologies({orbitron}) {
  return (
    <div className="bg-[#fefff3] shadow-xl flex flex-col p-4 items-center w-full md:p-10">
    <div className="flex flex-col max-w-full flex-wrap justify-center items-center w-full  lg:w-4/5">
      <h2
        className={`font-bold uppercase text-xl mb-10 ${orbitron.className}`}
      >
        Méthodologie
      </h2>
      <ul className="flex gap-6 md:gap-10 max-w-full flex-wrap justify-center items-center w-3/4">
        {ortherSkills.map((skill, index) => (
         <MethodologiesMotionLi key={index} skill={skill}/>
        ))}
      </ul>
    </div>
  </div>
  )
}
