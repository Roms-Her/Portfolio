"use client";

import { Orbitron } from "next/font/google";
import HardSkills from "./divSkills/HardSkills";
import Methodologies from "./divSkills/Methodologies";
import SoftSkills from "./divSkills/SoftSkills";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export default function Index() {
  return (
    <section
      id="skills"
      className="flex flex-col  p-10 md:p-16 mb-16 md:mb-20 justify-center sm:items-center text-newBlack bg-backRetroGray bg-center gap-10 w-full min-h-lvh"
    >
      {/* hard and soft skills */}
      <div className="flex flex-col md:flex-row gap-10 2xl:w-3/4">
        <HardSkills orbitron={orbitron} />

        <SoftSkills orbitron={orbitron} />
      </div>

      {/* methodologies  */}
      <div className="w-full 2xl:w-3/4">
        <Methodologies orbitron={orbitron} />
      </div>
    </section>
  );
}
