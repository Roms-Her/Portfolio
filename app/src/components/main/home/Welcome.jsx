import LinkButton from "../../LinkButton"
export default function Welcome() {


const links = [
  {name: "github", url: "https://github.com/Roms-Her"},
  {name: "linkedin", url: "https://www.linkedin.com/in/romain-hernandez-romsher"},
  {name: "x", url: "https://twitter.com/dev_roms"},
  {name: "email", url: "mailto:romsher.dev@gmail.com"}
]

  return (
    <section className="flex flex-col items-center text-accessible">

    <div v-motion-slide-visible-once-left className="flex p-8 flex-col w-full lg:w-5/6 2xl:w-4/6  md:mb-10 lg:flex-row-reverse lg:mb-14">
        <div className="portrait flex w-40 h-40 bg-card bg-opacity-30  rounded-full justify-center mb-8 m-auto md:mb-12 lg:m-auto lg:w-60 lg:h-60 xl:w-64 xl:h-64 ">
        </div>
        <div className="md:pr-8">

            <p className="mb-2 text-base2 md:mb-4">Bonjour, je suis Romain Hernandez</p>
            <h1 className="mb-8 leading-none max-w-xl font-bold  md:text-max md:mb-10">Bienvenue sur mon portfolio!</h1>
            <p className="mb-6 text-base2 md:mb-8">Développeur full stack. Créatif et passionné.</p>
            <ul className="flex gap-2 flex-wrap md:gap-4 xl:gap-4">

                {links.map((link, index) => (
                <li className="flex items-center justify-center" key={index}>
                    <LinkButton name={link.name} href={link.url}></LinkButton>
                </li>
                ))}

            </ul>
        </div>
    </div>
    <div className="flex bottom-0 right-0 gap-8 items-center justify-end p-8 sm:w-5/6 md:mb-10 lg:mb-14 xl:w-3/4 2xl:w-3/5">
        <div className="text-end uppercase leadin-4">
            <p className="text-3xl">Let&apos;s go !</p>
            <p className="md:text-base2">Plus d&apos;informations par ici</p>
        </div>

        <div>
            <svg className="black-arrow lg:h-30" xmlns="http://www.w3.org/2000/svg" width="30" height="70" viewBox="0 0 30 109"
                fill="none">
                <path
                    d="M15 53.5052L17 53.5052L15 53.5052ZM13.5858 107.654C14.3668 108.435 15.6332 108.435 16.4142 107.654L29.1421 94.9264C29.9232 94.1453 29.9232 92.879 29.1421 92.098C28.3611 91.3169 27.0948 91.3169 26.3137 92.098L15 103.412L3.68629 92.098C2.90524 91.3169 1.63891 91.3169 0.857865 92.098C0.0768164 92.879 0.0768163 94.1453 0.857865 94.9264L13.5858 107.654ZM13 0.770325L13 53.5052L17 53.5052L17 0.770325L13 0.770325ZM13 53.5052L13 106.24L17 106.24L17 53.5052L13 53.5052Z"
                    fill="#f1f4fd" />
            </svg>
        </div>
    </div>

</section>
  )
}