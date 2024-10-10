import { motion } from "framer-motion";
import Link from "next/link";

export default function MethodologiesMotionLi({ skill }) {
  return (
    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Link
        href={skill.doc}
        target="_blank"
        className="px-4 py-2 bg-backgroundLigth text-black hover:text-white hover:bg-orange-500 hover:shadow-lg rounded-lg"
      >
        {skill.description}
      </Link>
    </motion.li>
  );
}
