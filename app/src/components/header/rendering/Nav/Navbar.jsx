"use client";

import { Orbitron } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import RomsLogo from "../../../../../../public/roms-logo.svg";
import { MenuIcon } from "../../../../components/UI/Icon";
import socialIcons from "../../../../data/socialIcons";
import navLinks from "../../../../site/links";
import DesktopMenu from "./Navbar-Desktop-Menu";
import MobileMenu from "./Navbar-Mobile-Menu";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="flex items-center justify-between gap-10 w-full lg:w-5/6 2xl:w-4/6 m-auto  p-2   md:p-4  md:mb-10 text-newBlack bg-[#fefff3] bg-center h-20">
      <Link href="/">
        <Image
          src={RomsLogo}
          alt="Logo de The House Of Art"
          width={100}
          height={100}
          className="pl-2 w-auto"
        />
      </Link>

     <MenuIcon color={"#000"} size={40} onClick={() => setMenuOpen(!menuOpen)} />

      {/* mobile menu */}
      <MobileMenu
        navLinks={navLinks}
        socialIcons={socialIcons}
        orbitron={orbitron}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* desktop menu */}
      <DesktopMenu navLinks={navLinks} orbitron={orbitron} />
    </nav>
  );
}
