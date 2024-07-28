"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
export default function Project() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      name: "Gestinvest",
      // picture: gestinvest,
      alt: "image du logo gestinvest",
      technos:
        "React, Node JS, Express, Sqitch, Tailwildcss, Jest, PostgreSQL, Heroku",
      text: "Gestinvest est une application de gestion de portefeuille d'actifs. Elle permet de suivre l'évolution de ses investissements en temps réel. J'ai travaillé sur ce projet en tant que Product Owner. Créé pour un projet d'étude, nous étions 5 développeurs (2 front, 3 back) et avions un mois composé de 4 sprints, en comptant le sprint 0, pour le réaliser. J'ai essentiellement développé la partie back-end de l'application en Node.js et Express (API REST) qui permet de communiquer entre le front et le back.",
      texte2:
        "La sécurité est un point important de notre application, c'est pourquoi nous avons choisi de mettre l'accent sur celle-ci. Nous avons développé des algorithmes de calcul de performance pour les actifs financiers détenus par les utilisateurs. Les données des actifs sont mises à jour automatiquement via un CRON que nous avons mis en place, lequel fait appel à différentes API externes pour insérer le prix des actifs à certains moments de la journée. Aujourd'hui, nous continuons d'améliorer le contenu de Gestinvest et de le maintenir en ligne par passion pour ce projet.",
      bio: "Application de gestion de portefeuille d'actifs financiers (SaaS). j'ai occupé le poste de Product Owner et de développeur fullstack sur ce projet.",
      // link: "https://gestinvest-front-8af1ad4ce95a.herokuapp.com/",
    },
    {
      name: "Roms - Portfolio",
      // picture: portfolio,
      alt: "Image du portfolio de Roms",
      technos: "Vue.js, Tailwildcss, HTML, Vite, Vercel",
      text: "Ce portfolio créer par mes soin retrace mon parcours de développeur, mes projet ainsi que quelques élément de ma vie professionnel avant ma reconversion professionnel.",
      texte2:
        "Ce site vitrine est réalisé avec Vue.js et TailwindCSS. Il est hébergé sur Vercel. J'ai utilisé Vite pour la compilation du projet. J'ai également ajouté des animations pour rendre le site plus dynamique et mis en place un système de modales pour afficher les détails de mes projets.",
      bio: "Portfolio personnel, mise en avant de mes compétences et de mes projets professionels.",
      link: "https://romain-hernandez.com/",
    },
    {
      name: "Tennis de Table Farguais",
      // picture: ttFarguais,
      alt: "Image du T.T. Farguais",
      technos: "Node JS, React, Next.js, Tailwindcss, Vercel",
      text: "Après la refonte graphique du club de tennis de table T.T. Farguais que j'ai effectuée en 2024, j'ai proposé mes services de développeur web pour la mise à jour de leur site web. Le site initial fut créé dans les années 2000 et n'a pas évolué au fil du temps. J'ai donc travaillé en collaboration avec les membres du bureau sur la refonte complète du site web en me focalisant sur une meilleure performance, une meilleure expérience utilisateur et un meilleur référencement.",
      texte2:
        "Le site est réalisé sous Node.js avec le framework React et la surcouche Next.js. De cette manière, le traitement des données SSR (Server-Side Rendering) permet un référencement optimal et un temps de chargement inital plus rapide. Le site est hébergé sur Vercel. J'ai pris la décision d'utiliser TailwindCSS pour la rapidité de développement et la facilité de maintenance. Le site web ne contient aucune base de données, mais j'ai réalisé le code source de manière à ce que les futures données extraites de la BDD puissent être intégrées facilement.",
      bio: "Site web du club de tennis de table T.T. Farguais. J'ai occupé le poste de développeur fullstack sur ce projet.",
      link: "https://tt-farguais.vercel.app/",
    },
  ];

  return (
    <section
      id="project-page"
      class="flex flex-col items-center justify-center p-8 md:mb-10 lg:mb-14 text-accessible"
    >
      <div class="flex flex-col flex-wrap gap-10 lg:w-5/6 2xl:w-4/6 sm:flex-row  justify-center">
        {projects.map((project, index) => (
          <div
            class="flex p-6 backdrop-blur-xl bg-[#d6e0ff40] shadow-xl sm:w-full md:w-2/6 xl:w-3/12 rounded-3xl"
            key={index}
          >
            <div class="flex flex-col gap-6 items-center justify-between">
              <h2 class="text-center font-bold text-lg md:text-xl uppercase">{project.name}</h2>
              <p class="text-sm md:text-base text-center">{project.bio}</p>
              <div class="">
                <button
                  class="bg-solid px-4 py-2 rounded-xl  font-medium text-sm border border-solid hover:bg-orange-500 hover:border-orange-800 hover:shadow-lg transition duration-200"
                  onClick={() => {
                    setModalVisible(true), setSelectedProject(project);
                  }}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalVisible && selectedProject && (
        <ProjectCard
          project={selectedProject}
          setModalVisible={setModalVisible}
        />
      )}
    </section>
  );
}
