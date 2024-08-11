import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const socialIcons = [
    {
      name: "Linkedin",
      icon: "/sociaux/linkedin.svg",
      link: "https://www.linkedin.com/in/romain-hernandez-romsher",
      alt: "Logo Linkedin",
    },
    {
      name: "X",
      icon: "/sociaux/x.svg",
      link: "https://twitter.com/dev_roms",
      alt: "Logo Twitter",
    },
    {
      name: "Github",
      icon: "/sociaux/github.svg",
      link: "https://github.com/Roms-Her",
      alt: "Logo Github",
    },
    {
      name: "mail",
      icon: "/sociaux/mail.svg",
      link: "/contact",
      alt: "Logo mail",
    },
  ];

  return (
    <section className="footer relative footer-center w-full m-auto p-10 text-accessible gap-4 bg-backgroundColorWhite ">
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-lg">Merci pour votre temps.</h3>
        <nav>
          <div className="grid grid-flow-col">
            <ul className="flex gap-4 md:gap-8">
              {socialIcons.map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <Link
                    href={item.link}
                    className="w-8 md:w-12 rounded-xl uppercase tracking-widest font-medium"
                    target="_blank"
                  >
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={500}
                      height={500}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <aside>
          <p className="font-bold text-xs md:text-base">
            Conçu et créé par <strong>Roms</strong>.
          </p>
          <p className="text-xs md:text-base">
            Copyright © 2024 - <strong>Roms</strong>
          </p>
        </aside>
      </div>
    </section>
  );
}
