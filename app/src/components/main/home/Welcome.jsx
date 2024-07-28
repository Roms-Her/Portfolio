import { FaArrowDownLong } from "react-icons/fa6";
import LinkButton from "../../LinkButton";

export default function Welcome() {


const links = [
  {name: "github", url: "https://github.com/Roms-Her"},
  {name: "linkedin", url: "https://www.linkedin.com/in/romain-hernandez-romsher"},
  {name: "x", url: "https://twitter.com/dev_roms"},
  {name: "email", url: "mailto:romsher.dev@gmail.com"}
]

  return (
    <section className="flex flex-col items-center text-accessible 2xl:py-10">

    <div className="flex p-8 flex-col w-full lg:w-5/6 2xl:w-4/6  md:mb-10 lg:flex-row-reverse lg:mb-14">
        <div className="flex w-40 h-40 bg-roms bg-cover bg-opacity-30 border rounded-full justify-center mb-8 m-auto shadow-lg md:mb-12 md:w-60 md:h-60 xl:w-80 xl:h-80 ">
        </div>
        <div className="md:pr-8">

            <p className="mb-2 text-lg md:mb-4 md:text-xl 2xl:text-2xl">Bonjour, je suis Romain Hernandez</p>
            <h1 className="mb-8 leading-none max-w-xl 2xl:max-w-2xl font-bold  text-6xl md:mb-10 2xl:text-8xl">Bienvenue sur mon portfolio!</h1>
            <p className="mb-6 text-lg md:mb-8 md:text-xl 2xl:text-2xl">Développeur full stack. Créatif et passionné.</p>
            <ul className="flex gap-2 flex-wrap md:gap-4 xl:gap-4">

                {links.map((link, index) => (
                <li className="flex items-center justify-center" key={index}>
                    <LinkButton name={link.name} href={link.url}></LinkButton>
                </li>
                ))}

            </ul>
        </div>
    </div>
    <div className="flex gap-6 items-center justify-end p-8 w-full md:mb-10 lg:w-5/6 2xl:w-4/6">
        <div className="text-end uppercase leadin-4">
            <p className="text-xl  2xl:text-2xl">Let&apos;s go !</p>
            <p className="text-sm md:text-lg">Plus d&apos;informations par ici</p>
        </div>

        <div>
        <FaArrowDownLong size={40}/>

        </div>
    </div>

</section>
  )
}