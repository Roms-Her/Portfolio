"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectOpen from './ProjectOpen';
function ProjectCard({ project, index, setModalVisible, setSelectedProject }) {
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

export default function Project() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Gestinvest",
      role: "Product Owner, Développeur fullstack",
      picture: "/project/gestinvest.png",
      alt: "Capture d'écran de l'application Gestinvest",
      technos:
        "React, Node JS, TypeScript, Express, Sqitch, Tailwildcss, Jest, PostgreSQL, Heroku",
      text: "Gestinvest est une application de gestion de portefeuille d'actifs. Elle permet de suivre l'évolution de ses investissements en temps réel. J'ai travaillé sur ce projet en tant que Product Owner. Créé pour un projet d'étude, nous étions 5 développeurs (2 front, 3 back) et avions un mois composé de 4 sprints, en comptant le sprint 0, pour le réaliser. J'ai essentiellement développé la partie back-end de l'application en Node.js et Express (API REST) qui permet de communiquer entre le front et le back.",
      text2:
        "La sécurité est un point important de notre application, c'est pourquoi nous avons choisi de mettre l'accent sur celle-ci. Nous avons développé des algorithmes de calcul de performance pour les actifs financiers détenus par les utilisateurs. Les données des actifs sont mises à jour automatiquement via un CRON que nous avons mis en place, lequel fait appel à différentes API externes pour insérer le prix des actifs à certains moments de la journée. Aujourd'hui, nous continuons d'améliorer le contenu de Gestinvest et de le maintenir en ligne par passion pour ce projet.",
      bio: "Application de gestion de portefeuille d'actifs financiers (SaaS). j'ai occupé le poste de Product Owner et de développeur fullstack sur ce projet.",
      link: "https://github.com/Roms-Her/Gestinvest-back",
    },
    {
      name: "Roms - Portfolio",
      role: "Développeur fullstack",
      picture: "/project/portfolio.png",
      alt: "Capture d'écran de mon portfolio",
      technos: "React, Next.JS, Tailwild CSS, HTML, Vercel",
      text: "Ce portfolio, créé par mes soins, retrace mon parcours de développeur, présente mes projets et inclut quelques éléments de ma vie professionnelle avant ma reconversion.",
      text2:
        "Ce site vitrine est d'abord réalisé avec Vue.js et TailwindCSS, puis recodé avec une technologie plus avancée : Next.js, basé sur React. Il est hébergé sur Vercel. Pour rendre le site adaptable à l'ajout éventuel d'une base de données, j'ai opté pour un traitement de données entièrement dynamique. Grâce à Next.js, le site est optimisé pour le SEO grâce à son rendu SSR.",
      bio: "Portfolio personnel, mise en avant de mes compétences et de mes projets professionels.",
      link: "https://romain-hernandez.com/",
    },
    {
      name: "Tennis de Table Farguais",
      role: "Développeur fullstack",
      picture: "/project/ttfarguais.png",
      alt: "Capture d'écran du site web du club de tennis de table T.T. Farguais",
      technos: "Node JS, React, Next.js, Tailwind CSS, Vercel",
      text: "Après la refonte graphique du club de tennis de table T.T. Farguais que j'ai effectuée en 2024, j'ai proposé mes services de développeur web pour la mise à jour de leur site web. Le site initial fut créé dans les années 2000 et n'a pas évolué au fil du temps. J'ai donc travaillé en collaboration avec les membres du bureau sur la refonte complète du site web en me focalisant sur une meilleure performance, une meilleure expérience utilisateur et un meilleur référencement.",
      text2:
        "Le site est réalisé sous Node.js avec le framework React et la surcouche Next.js. De cette manière, le traitement des données SSR (Server-Side Rendering) permet un référencement optimal et un temps de chargement inital plus rapide. Le site est hébergé sur Vercel. J'ai pris la décision d'utiliser TailwindCSS pour la rapidité de développement et la facilité de maintenance. Le site web ne contient aucune base de données, mais j'ai réalisé le code source de manière à ce que les futures données extraites de la BDD puissent être intégrées facilement.",
      bio: "Site web du club de tennis de table T.T. Farguais. J'ai occupé le poste de développeur fullstack sur ce projet.",
      link: "https://ttfarguais.fr/",
    },
    {
      name: "Météodou",
      role: "Développeur fullstack",
      picture: "/project/meteodou.png",
      alt: "Capture d'écran de l'application Météodou",
      technos: "Node JS, React, Next.js, Tailwind CSS, Vercel, WeatherAPI",
      text: "Météodou est une application météo qui permet de connaître la météo de la journée. J'ai travaillé sur ce projet en tant que développeur. C'est un simple projet qui a pour but de renforcer mes compétences en développement web.",
      text2:"L'application est réalisée avec Node.js, le framework React et la surcouche Next.js. Le site est hébergé sur Vercel. J'ai pris la décision d'utiliser TailwindCSS pour la rapidité de développement et la facilité de maintenance. Les données utilisées sont extraites de Weather API, une API dédiée à la météo. De ce fait, l'application web ne contient aucune base de données.",
      bio: "Application météo. Projet a but pédagogique pour renforcer mes compétences en développement web.",
      link: "https://meteodou.vercel.app/",
    },
    {
      name: "Blogart",
      role: "Développeur fullstack",
      picture: "/project/blogart.png",
      alt: "Capture d'écran de l'application Blogart",
      technos: "Node JS, React, Next.js, Tailwind CSS, Vercel",
      text: "Blogart est un blog personnel qui me permetra de partager des articles sur des sujets touchant a l'art. Ce projet est en cours de développement.",
      text2:"L'application est réalisée avec Node.js, le framework React et la surcouche Next.js. J'ai pris la décision d'utiliser TailwindCSS pour la rapidité de développement et la facilité de maintenance. Le site web contiendra une base de données complète qui me permettra de stocker les informations relatives à chaque blog, notamment les commentaires des futurs utilisateurs.",
      bio: "Blog personnel. Projet en cours de développement.",
      // link: "https://meteodou.vercel.app/",
      onDeveloppement: true,
    },
  ];

  return (
    <section
      id="project-page"
      className="flex flex-col items-center justify-center p-8 md:mb-10 lg:mb-14 text-accessible"
    >
      <div className="flex flex-col flex-wrap gap-10 lg:w-5/6 2xl:w-4/6 sm:flex-row justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            setModalVisible={setModalVisible}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      <div
        className={`fixed z-10 justify-center gap-8 h-[90%] bottom-0 w-full md:w-5/6 2xl:w-3/6 backdrop-blur-3xl bg-[#d6e0ff40] items-center rounded-tl-3xl rounded-tr-3xl shadow-2xl border-accessible border-x border-t transition-all ${
          modalVisible ? 'translate-y-0' : 'translate-y-full'
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


