"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function TimeLineCard({ work, isSecondCard }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#0090ff"
          className="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`timeline-start ${
          isSecondCard
            ? "md:timeline-end md:text-start"
            : "md:timeline-start md:text-end"
        } mb-10`}
      >
        <time className="italic font-bold">{work.date}</time>
        <h3 className="font-bold text-orange-500  md:text-xl my-4">{work.title}</h3>
        <p className="md:text-lg hidden sm:flex mb-10">
          {work.desktopPresentation}
        </p>
        <p className="md:lg sm:hidden mb-10">{work.mobilePresentation}</p>
      </motion.div>
      <hr className="bg-solid" />
    </>
  );
}
