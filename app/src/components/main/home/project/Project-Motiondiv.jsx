import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`flex p-6 backdrop-blur-xl bg-[#d6e0ff40]  shadow-xl sm:w-full md:w-2/6 xl:w-3/12 rounded-3xl`}
    >
      <div className="flex flex-col gap-6 items-center justify-between">
        <h2 className="text-center font-bold text-lg md:text-xl uppercase">
          {project.name}
        </h2>
        <p className="text-sm md:text-base text-center">{project.bio}</p>
        <button
          className="bg-solid px-4 py-2 rounded-xl font-medium text-sm border border-solid hover:bg-orange-500 hover:border-orange-800 hover:shadow-lg transition duration-200"
          onClick={() => {
            setModalVisible(true);
            setSelectedProject(project);
          }}
        >
          En savoir plus
        </button>
      </div>
    </motion.div>
  );
}
