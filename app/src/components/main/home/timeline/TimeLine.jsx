import worksPath from "../../../../../src/data/worksPath";
import TimeLineCard from "./TimeLineCard";
export default function TimeLine() {
  return (
    <section
      id="timeline"
      className="relative flex flex-col items-center justify-center w-full px-8 pb-10 md:pb-20 text-accessible"
    >
      <ul className="timeline timeline-snap-icon max-md:timeline-compact w-full timeline-vertical  lg:w-5/6 2xl:w-4/6">
        {worksPath.map((work, index) => (
          <li key={index}>
            <TimeLineCard work={work} isSecondCard={index % 2 ? true : false} />
          </li>
        ))}
      </ul>
    </section>
  );
}
