import { motion } from "framer-motion";

import SoftSkillsLink from "../../../../../UX/SoftSkillsLink";

export default function SoftSkillsMotionLi({ skill }) {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="md:text-base"
    >
      <figure className="flex flex-col items-center justify-center gap-4">
        <SoftSkillsLink skill={skill} />
        <figcaption>{skill.description}</figcaption>
      </figure>
    </motion.li>
  );
}
