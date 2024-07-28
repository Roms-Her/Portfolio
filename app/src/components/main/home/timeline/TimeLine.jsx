import TimeLineCard from "./TimeLineCard"

export default function TimeLine() {

  const worskPath = [
    {
      date: "2021 - 2024",
      title: " Golden Square - Auto-entreprenneur",
      desktopPresentation: " Golden Square est une entreprise individuelle ainsi qu'une marque de vêtements artisanale et responsable. Cette expérience m'a permis de     développer mes compétences en gestion de projet, en communication, en marketing ainsi que des compétences technique tel que les outils de DAO (Dessin assistés par ordinateur). J'ai également acquis une expérience précieuse dans la gestion des clients et des fournisseurs.",
      mobilePresentation: " Marque de vêtements artisanale et responsable. Gestion de projet, Communication, Marketing, Graphisme (DAO), Gestion des clients et des fournisseurs."
    },
    {
      date: "2022 - 2023",
      title: "Université de Bordeaux - Laborentin - Neurosciences",
      desktopPresentation: " Embauché en tant que technicien de laboratoire, j'ai pu travailler sur le bien-être animal et ainsi accompagner les chercheurs dans leurs projets. J'ai pu développer mes compétences de communication et d'écoute au vu des problématiques rencontrées. J'ai par la suite passé une formation d'applicateur de méthodes alternatives à l'expérimentation animale.",
      mobilePresentation: " En tant que technicien de laboratoire, j'ai pu travailler sur le bien-être animal et ainsi accompagner les chercheurs dans leurs projets. J'ai par la suite passé une formation d'applicateur de méthodes alternatives à l'expérimentation animale."
    },
    {
      date: "2023 - 2024",
      title: "École O'clock - Étudiant",
      desktopPresentation: "Formation de développeur web et web mobile. Cette formation m'a permis d'acquérir des compétences en développement web et web mobile. J'ai pu travailler sur des projets en groupe et en autonomie.",
      mobilePresentation: "Formation DWWM. Compétences en développement web et web mobile. Travaille en équipe et en autonomie."
    },
    {
      date: "Mars/Avril 2024",
      title: "Gestinvest - Développeur web fullstack",
      desktopPresentation: "Gestinvest est un projet d'étude. Il s'agit d'une application web de gestion de portefeuille d'actif. Cette application permet de suivre        l'évolution de son portefeuille d'actions en temps réel. J'ai pu            travailler en équipe sur ce projet et j'ai pu mettre en pratique mes            compétences en développement web.",
      mobilePresentation: "Projet d'étude. Application web de gestion de portefeuille d'actif. Mise en pratique de mes compétences en développement web."
    },
    {
      date: "Juin 2024",
      title: "Diplôme de Développeur Web et Web Mobile",
      desktopPresentation: "Soutenance de mon projet Gestinvest et obtention du titre professionnel de Développeur Web et Web Mobile avec succès.",
      mobilePresentation: "Soutenance de mon projet Gestinvest et obtention du titre professionnel de Développeur Web et Web Mobile avec succès."
    },
    {
      date: "Juillet 2024 - Aujourd'hui",
      title: "Freelance - Développeur web fullstack",
      desktopPresentation: "Je perfectionne mes compétences en développement web et web mobile en travaillant sur des projets personnels et professionnels. Je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences.",
      mobilePresentation: "Je perfectionne mes compétences en développement web et web mobile en travaillant sur des projets personnels et professionnels. Je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences."
    }
  ]

  return (
    <section id="timeline"
    className="relative flex flex-col items-center justify-center w-full px-8 pb-10 md:pb-20 text-accessible"
  >

    <ul
      className="timeline timeline-snap-icon max-md:timeline-compact w-full timeline-vertical  lg:w-5/6 2xl:w-4/6"
    >
    {worskPath.map((work, index) => (
      <li key={index}>
        <TimeLineCard work={work} isSecondCard={index % 2 ? true : false} />
      </li>
    ))}
    </ul>
  </section>
  )
}