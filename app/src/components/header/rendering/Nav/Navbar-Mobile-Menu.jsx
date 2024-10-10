import Image from "next/image";
import Link from "next/link";

import { CloseIcon } from "../../../UI/Icon";

export default function NavbarMobileMenu({
  navLinks,
  socialIcons,
  orbitron,
  menuOpen,
  setMenuOpen,
}) {
  
  return (
    <ul
      className={`xl:hidden fixed z-20 flex flex-col justify-center  gap-4 sm:gap-8 h-lvh top-0 right-0 w-4/6 md:w-2/6 bg-orange-500 bg-center p-12 sm:p-20 text-xl transition-all ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
     <CloseIcon color={"#FFF"} size={40} onClick={() => setMenuOpen(!menuOpen)} />

      {navLinks.map((link, index) => (
        <li key={index} className="relative  flex flex-col w-full">
          <div className="flex items-center gap-5 mb-4 sm:mb-6">
            <Link
              href={link.url}
              className={`gap-6 px-4 py-2 ${orbitron.className} text-bold text-white underline underline-offset-8`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {link.title}
            </Link>
          </div>
        </li>
      ))}
      
      <div className="flex px-4 py-2 gap-4">
        {socialIcons.map((icon, index) => (
          <li key={index} className="flex">
            <Link
              href={icon.link}
              className="gap-4 text-white ${orbitron.className} "
              target="_blank"
            >
              <Image src={icon.icon} alt={icon.alt} width={40} height={40} />
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
}
