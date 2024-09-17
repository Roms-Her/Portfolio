"use client";
import { useState } from "react";
import projects from "../../../../../src/data/projects";
import ProjectMotiondiv from "./Project-Motiondiv";
import ProjectOpen from "./Project-Open";

export default function Project() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="project-page"
      className="flex flex-col items-center justify-center p-8 md:mb-10 lg:mb-14 text-accessible"
    >
      <div className="flex flex-col flex-wrap gap-10 lg:w-5/6 2xl:w-4/6 sm:flex-row justify-center">
        {projects.map((project, index) => (
          <ProjectMotiondiv
            key={index}
            project={project}
            index={index}
            setModalVisible={setModalVisible}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      <div
        className={`fixed z-10 justify-center gap-8 h-[89%] bottom-0 w-full md:w-5/6 2xl:w-3/6 backdrop-blur-3xl bg-[#d6e0ff40] items-center rounded-tl-3xl rounded-tr-3xl shadow-2xl border-accessible border-x border-t transition-all ${
          modalVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {modalVisible && selectedProject && (
          <ProjectOpen
            project={selectedProject}
            setModalVisible={setModalVisible}
          />
        )}
      </div>
    </section>
  );
}
