"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from "next/link";

export default function MoreInformations() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center text-newBlack w-full h-full p-10 md:px-16 lg:p-16 mt-10"
    >
      {/* Uncomment or customize the background shape */}
      {/* <div className="absolute top-0 w-full h-full bg-orange-500 rounded-tl-full"></div> */}
    <div className='flex flex-col-reverse md:flex-row-reverse 2xl:w-3/4 items-center'>

      <div className="flex flex-col md:text-lg justify-center w-ful md:w-3/4">
        <h2 className="text-3xl mb-10 uppercase font-semibold">
          Quelques mots
        </h2>

        <p className="mb-8 text-sm md:text-base text-justify">
          Ayant effectué une reconversion professionnelle, j&apos;ai enrichi mes compétences grâce à une formation approfondie dans une grande école du{" "}
          <span className="font-bold">numérique</span>, me spécialisant en tant que{" "}
          <strong>développeur web et web mobile</strong>. Au cours de cette expérience, j&apos;ai eu l&apos;opportunité de collaborer sur divers projets, ce qui m&apos;a permis d&apos;acquérir une compréhension approfondie des{" "}
          <span className="font-bold">technologies modernes</span>. Mon parcours professionnel m&apos;a conduit à concevoir et développer des sites web ainsi que des applications dynamiques complètes, mettant ainsi en pratique mes connaissances et démontrant ma capacité à créer des solutions de développement innovantes.
        </p>

        <p className="text-justify text-sm md:text-base mb-12">
          Je suis <span className="font-bold">déterminé</span> à poursuivre mon chemin dans le développement en explorant de nouvelles technologies, en participant à des projets ambitieux et en m&apos;engageant dans des initiatives de formation continue. Mon objectif est de{" "}
          <strong>devenir un développeur web et mobile d&apos;excellence</strong>, capable de fournir des solutions innovantes et efficaces aux défis complexes du monde numérique.
        </p>

        <Link
          className="bg-solid px-4 py-2 rounded-xl w-3/5 text-center text-white uppercase tracking-widest font-medium text-sm hover:bg-orange-500 hover:shadow-lg transition-all ease-out duration-200"
          href="/pdf/CV.pdf"
          download="CV_romain-hernandez"
          target="_blank"
        >
          Télécharger le CV
        </Link>
      </div>
      
      <div className="hidden sm:flex sm:w-[80%] justify-center w-full">
        <DotLottieReact src="/animation/animation-file.lottie" loop autoplay/>
      </div>
    </div>
    </section>
  );
}
