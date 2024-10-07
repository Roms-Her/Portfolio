"use client";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import links from "../../../../src/site/socialLinks";
import LinkButton from "../../LinkButton";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });
export default function Welcome() {
  return (
    <section className="flex flex-col items-center  2xl:py-10 text-newBlack">
      <div className="flex p-8 flex-col w-full lg:w-5/6 2xl:w-4/6 mb-16 md:mb-20 lg:flex-row-reverse ">
        <div className="flex w-60   bg-cover    justify-center mb-8 m-auto md:mb-12 md:w-80  2xl:w-96  ">
          <Image
            src="/animation/test.webp" // Remplace href par src
            alt="Animation"
            width={500} // Largeur
            height={200} // Hauteur
          />
        </div>
        <div className="md:pr-8">
          <p className="mb-2 text-lg md:mb-4 md:text-xl 2xl:text-2xl ">
            Bonjour je suis{" "}
            <strong className="text-orange-500">Romain Hernandez</strong>,
          </p>
          <h1
            className={` mb-8 leading-none max-w-xl 2xl:max-w-2xl font-bold  text-5xl md:text-6xl 2xl:text-7xl ${orbitron.className}`}
          >
            Bienvenue sur mon{" "}
            <span className="text-orange-500 font-bold">portfolio</span> !
          </h1>
          <p className="mb-6 text-lg md:mb-8 md:text-xl ">
            Développeur fullstack créatif et passionné.
          </p>
          <ul className="flex gap-2 flex-wrap md:gap-4 xl:gap-4">
            {links.map((link, index) => (
              <li className="flex items-center justify-center" key={index}>
                <LinkButton name={link.name} href={link.url}></LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
