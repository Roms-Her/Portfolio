'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import links from "../../../../src/site/socialLinks";
import LinkButton from "../../LinkButton";
export default function Welcome() {

function scrollToProjects() {
    const projectPage = document.querySelector('#project-page');
    if (projectPage) {
      projectPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Element with ID "project-page" not found.');
    }
  }

  return (
    <section className="flex flex-col items-center  2xl:py-10 text-newBlack">

    <div className="flex p-8 mt-20 lg:mt-28 flex-col w-full lg:w-5/6 2xl:w-4/6  md:mb-10 lg:flex-row-reverse lg:mb-14">
        <div className="flex w-60 h-60  bg-cover    justify-center mb-8 m-auto md:mb-12 md:w-70 md:h-70 xl:w-96 xl:h-96 ">
        <DotLottieReact src="/animation/animationWork-file.lottie" loop autoplay/>
        </div>
        <div className="md:pr-8">

            <p className="mb-2 text-lg md:mb-4 md:text-xl 2xl:text-2xl">Bonjour je suis <strong className="text-orange-500">Romain Hernandez</strong>,</p>
            <h1 className="mb-8 leading-none max-w-xl 2xl:max-w-2xl font-bold  text-6xl md:mb-10 2xl:text-8xl">Bienvenue sur mon portfolio!</h1>
            <p className="mb-6 text-lg md:mb-8 md:text-xl 2xl:text-2xl">Développeur full stack créatif et passionné.</p>
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
  )
}