// import { IoIosCloseCircle } from "react-icons/io";
import { Orbitron } from "next/font/google"; // Assuming you have a Orbitron font
import { IoCloseSharp } from "react-icons/io5";
import LinkButton from "../../../LinkButton"; // Assuming you have a LinkButton component
const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export default function ProjectOpen({ project, setModalVisible }) {
  const technosSplit = project.technos.split(", ");
  let technosArray = [];
  technosArray.push(...technosSplit);

  return (
    <div id="modal" className="flex flex-col h-full w-full ">
      <button
        className="absolute z-50 flex justify-center w-10 top-4 right-4 cursor-pointer text-newBlack hover:text-orange-500 transition-all"
        onClick={() => setModalVisible(false)}
      >
        <IoCloseSharp className="text-3xl md:text-5xl" />
      </button>

      <div className="flex flex-col gap-4 items-center justify-around p-8 overflow-y-auto h-full">
        <h3 className={`text-center mb-4 font-bold text-2xl text-newBlack ${orbitron.className} uppercase`}>
          {project.name}
        </h3>
        <div className="flex flex-col gap-4 sm:w-3/4 text-newBlack text-sm md:text-base">
          <p className="text-center">
            <span className="font-bold">Poste:</span> {project.role}
          </p>
          <p className="text-justify md:text-center">{project.text}</p>
          <p className="text-justify md:text-center mb-4">{project.text2}</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-3/4">
          <h4 className="text-center font-bold text-newBlack mb-4">
            Technos utilisées:
          </h4>
          <p className="flex flex-wrap gap-2 mb-6 md:justify-center">
            {technosArray.map((techno, index) => (
              <span
                className="badge badge-outline badge-lg text-bold text-center text-orange-500"
                key={index}
              >
                {techno}
              </span>
            ))}
          </p>
        </div>
        {project.link && (
          <LinkButton href={project.link} name={"Visiter le site web"} />
        )}
      </div>
   
    </div>
  );
}
