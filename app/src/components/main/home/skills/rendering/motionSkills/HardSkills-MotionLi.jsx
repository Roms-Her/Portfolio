import { motion } from "framer-motion";

import HardSkillLink from "../../../../../UX/HardSkillLink";

export default function HardSkillsMotionLi({ skill }) {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="uppercase font-semibold md:text-base"
    >
      <div className="w-16 h-16 p-4 backdrop-blur-lg bg-backgroundLigth hover:bg-orange-500 shadow-xl rounded-3xl ">
      <HardSkillLink skill={skill} />
      </div>
    </motion.li>
  );
}
