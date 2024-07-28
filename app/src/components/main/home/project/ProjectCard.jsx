'use client'
import { IoIosCloseCircle } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({project, setModalVisible}) {
  return (
    <>
      <div
        id="modal"
        className="absolute z-50 flex flex-col h-5/6 w-5/6 bg-accessible items-center rounded-3xl text-backgroundColor shadow-xl"
      >
        <button
          className="absolute z-50 flex justify-center w-10 top-4 right-4 cursor-pointer text-backgroundColor"
          onClick={() => setModalVisible(false)}
        >
          <IoIosCloseCircle className="text-5xl"/>

        </button>

        <figure className="relative w-full h-2/4 flex rounded-3xl">
          <Image
            className="flex w-full p-12 md:p-20 rounded-t-3xl object-contain"
            src={project.picture}
            width={500}
            height={500}
            alt={project.alt}
          />
        </figure>

        <div className="flex flex-col items-center p-8 overflow-y-auto h-full">
          <div className="flex flex-col gap-4 sm:w-3/4">
            <h3 className="text-center mb-4 font-bold text-gray-600">{project.name}</h3>
            <p className="text-center">{project.text}</p>
            <p className="text-center mb-4">{project.text2}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-center font-bold text-gray-600">
              Technos utilisées:
            </h4>
            <p className="text-center mb-6">{project.technos}</p>
            {project.link && (
              <Link
                className="text-sm uppercase font-bold text-solid"
                target="_blank"
                href={project.link}
              >
                Cliquez ici pour visiter le site web !
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
