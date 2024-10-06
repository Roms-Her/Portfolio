"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Orbitron } from "next/font/google";
import Link from "next/link";
const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });
export default function MoreInformations() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center text-newBlack w-full h-full p-10 sm:pt-0 md:px-16 lg:px-16 xl:py-10 xl:mt-10 lg:mb-20"
    >
  
      <div className="flex flex-col-reverse xl:flex-row-reverse xl:w-3/4 items-center">
        <div className="flex flex-col md:text-lg justify-center w-ful md:w-3/4">
          <h2 className={`text-3xl mb-10 uppercase font-bold ${orbitron.className}`}>
            Quelques mots
          </h2>

          <p className="mb-8 text-sm md:text-base text-justify">
            Passionné par les technologies et la programmation, je me définis volontiers comme un{" "}
            <span className="font-bold">geek</span>. Après plusieurs années dans
            divers domaines, j&apos;ai décidé de suivre ma passion pour les{" "}
            <span className="font-bold">nouvelles technologies</span> en
            entamant une reconversion professionnelle. Aujourd&apos;hui, je suis{" "}
            <span className="font-bold">développeur fullstack</span>, capable de
            travailler à la fois sur le front-end et le back-end. Ma polyvalence
            est un atout : grâce à mon parcours, je maîtrise aussi bien la
            gestion de projet que le design, tout en restant profondément ancré
            dans le développement web.
          </p>

          <p className="text-justify text-sm md:text-base mb-12">
            Je suis particulièrement motivé à contribuer à des <span className="font-bold">projets innovants
            qui allient technologie et créativité</span>, où je peux mettre à profit
            mon expertise en développement tout en collaborant avec des équipes
            multidisciplinaires pour atteindre des objectifs ambitieux.
          </p>

          <Link
            className="bg-solid px-4 py-2 rounded-xl text-center text-white uppercase tracking-widest font-medium text-sm hover:bg-orange-500 hover:shadow-lg transition-all ease-out duration-200"
            href="/pdf/CV.pdf"
            download="CV_romain-hernandez"
            target="_blank"
          >
            Télécharger le CV
          </Link>
        </div>

        <div className="flex sm:w-[100%] lg:w-[80%] xl:w-full justify-center w-full mb-10">
          <DotLottieReact
            src="/animation/animation-stack.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
}
