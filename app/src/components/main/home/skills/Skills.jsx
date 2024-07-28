import logoCurieux from "../../../../../../public/softSkills/curious.svg";
import logoEmpathy from "../../../../../../public/softSkills/empathy.svg";
import logoCreatif from "../../../../../../public/softSkills/paintbrush.svg";
import logoPassion from "../../../../../../public/softSkills/passionate.svg";
import logoCoworking from "../../../../../../public/softSkills/team.svg";
import logoCss from "../../../../../../public/technos/css-black.svg";
import logoExpressJs from "../../../../../../public/technos/express.svg";
import logoGit from "../../../../../../public/technos/git-black.svg";
import logoGithub from "../../../../../../public/technos/github.svg";
import logoHtml from "../../../../../../public/technos/html-black.svg";
import logoJavascript from "../../../../../../public/technos/javascript-black.svg";
import logoNextJs from "../../../../../../public/technos/next.svg";
import logoNodeJs from "../../../../../../public/technos/node-black.svg";
import logoPostgresql from "../../../../../../public/technos/postgresql-black.svg";
import logoReact from "../../../../../../public/technos/react-black.svg";
import logoSequelize from "../../../../../../public/technos/sequelize-black.svg";
import logoSqitch from "../../../../../../public/technos/sqitch-black.svg";
import logoTailwindCss from "../../../../../../public/technos/tailwind-black.svg";
import HardSkills from "./typeSkills/HardSkills";
import SoftSkills from "./typeSkills/SoftSkills";
export default function Skills() {
  const hardSkills = [
    {
      logo: logoHtml,
      alt: "logo HTML",
      doc: "https://developer.mozilla.org/fr/docs/Web/HTML",
    },
    {
      logo: logoCss,
      alt: "logo CSS",
      doc: "https://developer.mozilla.org/fr/docs/Web/CSS",
    },
    {
      logo: logoJavascript,
      alt: "logo Javascript",
      doc: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    },
    {
      logo: logoReact,
      alt: "Logo React",
      doc: "https://fr.react.dev/reference/react",
    },
    {
      logo: logoNextJs,
      alt: "Logo Next.JS",
      doc: "https://nextjs.org/",
    },
    {
      logo: logoTailwindCss,
      alt: "logo Tailwind CSS",
      doc: "https://tailwindcss.com/",
    },
    {
      logo: logoNodeJs,
      alt: "logo Node.JS",
      doc: "https://nodejs.org/en/about",
    },
    {
      logo: logoExpressJs,
      alt: "logo Express JS",
      doc: "https://expressjs.com",
    },
    {
      logo: logoSequelize,
      alt: "logo Sequelize",
      doc: "https://sequelize.org/",
    },
    {
      logo: logoPostgresql,
      alt: "logo Postgres sql",
      doc: "https://www.postgresql.org/",
    },
    {
      logo: logoSqitch,
      alt: "logo Sqitch",
      doc: "https://sqitch.org/",
    },
    {
      logo: logoGit,
      alt: "logo Git",
      doc: "https://git-scm.com/",
    },
    {
      logo: logoGithub,
      alt: "logo Github",
      doc: "https://github.com/",
    },
  ];

  const softSkills = [
    {
      logo: logoEmpathy,
      alt: "image représentant l'empathie",
      description: "Empathique",
      doc: "https://www.rh-partners.com/lempathie-au-travail-un-remede-a-lennui-et-a-la-demotivation/",
    },
    {
      logo: logoCreatif,
      alt: "image représentant la créativité",
      description: "Créatif",
      doc: "https://www.bloom-idees.fr/etre-creatif-etre-soi/#:~:text=%C3%8Atre%20cr%C3%A9atif%2C%20%C3%A7a%20veut%20dire,s'adapter%20au%20monde%20environnant.",
    },
    {
      logo: logoCurieux,
      alt: "image représentant la curiosité",
      description: "Curieux",
      doc: "https://www.penserchanger.com/7-raisons-detre-curieux/",
    },
    {
      logo: logoPassion,
      alt: "image représentant la passion",
      description: "Passionné",
      doc: "https://www.radiofrance.fr/franceculture/podcasts/le-pourquoi-du-comment-philo/pourquoi-faut-il-etre-passionne-4305197",
    },
    {
      logo: logoCoworking,
      alt: "image représentant le travail d'équipe",
      description: "équipe",
      doc: "https://asana.com/fr/resources/teamwork-in-the-workplace",
    },
  ];

  return (
    <section
      id="skills"
      class="flex flex-col p-8 mb-10 sm:items-center md:mb-24 text-accessible"
    >
      <div class="backdrop-blur-xl bg-[#d6e0ff40] shadow-xl flex flex-col w-full rounded-3xl p-4 items-center lg:w-5/6 2xl:w-4/6 md:p-8 mb-10">
        <h2 class="font-bold mb-6 uppercase text-2xl">Hards Skills</h2>
        <div class="flex mb-4 w-full justify-center">
          <ul class="flex gap-4 max-w-full flex-wrap justify-center items-center w-full md:gap-8 lg:w-4/5">
            {hardSkills.map((skill, index) => (
              <li class="uppercase font-semibold md:text-base" key={index}>
                <HardSkills skill={skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="backdrop-blur-xl bg-[#d6e0ff40] shadow-xl flex flex-col w-full rounded-3xl p-4 items-center lg:w-5/6 2xl:w-4/6 md:p-8">
        <h2 class="font-bold mb-6 uppercase text-2xl">Softs Skills</h2>

        <div class="flex mb-4 w-full justify-center">
          <ul class="flex gap-4 max-w-full flex-wrap justify-center items-center w-full md:gap-10 lg:w-4/5">
            {softSkills.map((skill, index) => (
              <li key={index} class="uppercase font-semibold md:text-base">
                <SoftSkills skill={skill}></SoftSkills>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
