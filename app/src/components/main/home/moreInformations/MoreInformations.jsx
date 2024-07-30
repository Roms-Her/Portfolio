import Link from "next/link";

export default function MoreInformations() {
  return (
    <section
      id="about"
      className="relative flex flex-col px-8 pt-24 pb-8 items-center text-accessible w-full h-full bg-backgroundColorWhite shadow-contrast " 
    >
      {/* <div className="absolute top-0 w-full h-full bg-orange-500 rounded-tl-full"></div> */}

      <div className="flex flex-col md:text-lg justify-center items-center lg:w-5/6 2xl:w-4/6">
        <h2 className=" text-3xl text-center w-3/4 mb-10 sm:w-2/5 md:text-3xl uppercase font-semibold">
          Quelques mots
        </h2>

        <p className="mb-8 text-sm md:text-base text-center sm:w-5/6">
          Ayant effectué une reconversion professionnelle, j&apos;ai enrichi mes
          compétences grâce à une formation approfondie dans une grande école du{" "}
          <span className=" font-bold">numérique</span>, me spécialisant en tant
          que <strong className="">développeur web et web mobile</strong>.
          Au cours de cette expérience, j&apos;ai eu l&apos;opportunité de
          collaborer sur divers projets, ce qui m&apos;a permis d&apos;acquérir
          une compréhension approfondie des{" "}
          <span className=" font-bold">technologies modernes</span>. Mon parcours
          professionnel m&apos;a conduit à concevoir et développer des sites web
          ainsi que des applications dynamiques complètes, mettant ainsi en
          pratique mes connaissances et démontrant ma capacité à créer des
          solutions de développement innovantes.
        </p>

        <p className="text-center sm:w-5/6 text-sm md:text-base mb-12">
          Je suis <span className=" font-bold">déterminé</span> à poursuivre mon
          chemin dans le développement en explorant de nouvelles technologies,
          en participant à des projets ambitieux et en m&apos;engageant dans des
          initiatives de formation continue. Mon objectif est de{" "}
          <strong className=" ">
            devenir un développeur web et mobile d&apos;excellence
          </strong>
          , capable de fournir des solutions innovantes et efficaces aux défis
          complexes du monde numérique.
        </p>

        <Link
          className="bg-accessible text-black px-4 py-2 rounded-xl uppercase font-medium text-sm border border-solid hover:bg-orange-500 hover:text-accessible hover:border-orange-800 hover:shadow-xl transition-all ease-out "
          href="/pdf/cv-romain-hernandez.pdf"
          download="CV_romain-hernandez"
          target="_blank"
        >
          Télécharger le CV
        </Link>
      </div>
    </section>
  );
}
