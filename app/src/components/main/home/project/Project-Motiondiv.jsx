import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";
import { useInView } from "react-intersection-observer";
const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export default function ProjectMotiondiv({
  project,
  index,
  setModalVisible,
  setSelectedProject,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`relative flex p-6 border bg-white text-black justify-center  shadow-xl sm:w-full md:w-2/6 xl:w-3/12 `}
      >
      <div className="flex flex-col gap-6 items-center justify-between">
        <h2
          className={`text-center font-bold text-lg uppercase ${orbitron.className}`}
        >
          {project.name}
        </h2>
        <p className="text-sm text-center">{project.bio}</p>
        <button
          className="border border-black px-4 py-2 font-bold rounded-lg text-sm  hover:bg-orange-500 hover:text-white hover:shadow-lg transition duration-200"
          onClick={() => {
            setModalVisible(true);
            setSelectedProject(project);
          }}
        >
          En savoir plus
        </button>
      </div>
    </motion.div>
    </>
  );
}
