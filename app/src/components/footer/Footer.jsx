import { Orbitron } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import socialIcons from "../../data/socialIcons";
const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });
export default function Footer() {


  return (
    <section className="footer relative footer-center w-full m-auto p-10 text-accessible gap-10 bg-backRetroGray bg-center ">
      <div className="flex flex-col gap-6">
        <h3 className={`font-bold text-lg ${orbitron.className}`}>Merci pour votre temps.</h3>
        <nav>
          <div className="grid grid-flow-col">
            <ul className="flex gap-4 md:gap-8">
              {socialIcons.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="w-6 md:w-8 rounded-xl uppercase tracking-widest font-medium"
                    target="_blank"
                  >
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <aside>
          <p className="font-bold text-xs">
            Conçu et créé par <strong>Roms</strong>.
          </p>
          <p className="text-xs">
            Copyright © 2024 - <strong>Roms</strong>
          </p>
        </aside>
      </div>
    </section>
  );
}
