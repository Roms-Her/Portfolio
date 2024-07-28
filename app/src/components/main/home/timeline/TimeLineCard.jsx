export default function TimeLineCard({ work, isSecondCard }) { 
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
  <div
    className={`timeline-start ${isSecondCard ? 'md:timeline-end md:text-start' : 'md:timeline-start md:text-end'} mb-10`}
  >
    <time className="italic">{work.date}</time>
    <h3 className="font-bold md:text-xl my-4">
      {work.title}
    </h3>
    <p className="md:text-lg hidden sm:flex mb-10">
      {work.desktopPresentation}
    </p>
    <p className="md:lg sm:hidden mb-10">
     {work.mobilePresentation}
    </p>
  </div>
  <hr className="bg-solid" />
    </>
  )
 }