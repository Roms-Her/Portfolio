"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import RomsLogo from "../../../../public/roms.svg";
import navLinks from "../../../src/site/links";
import socialIcons from "../../data/socialIcons";
export default function Nav() {
  

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed flex items-center justify-between h-[9%] gap-10 w-full px-2  md:px-4  lg:px-20 xl:px-28 2xl:px-72 md:mb-10  shadow-contrast backdrop-blur-md z-50"
    >
      <Link href="/">
        <Image
          src={RomsLogo}
          alt="Logo de The House Of Art"
          width={500}
          height={500}
          className="w-auto"
        />
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="xl:hidden p-2 rounded-m transition-all"
      >
        <IoMenu className="h-10 w-10 text-newBlack" />
      </button>

       {/* mobile menu */}
      <ul
        className={`xl:hidden fixed z-10 flex flex-col justify-center  gap-4 sm:gap-8 h-lvh top-0 right-0 w-4/6 md:w-2/6 bg-backgroundLateralDegrade bg-center p-12 sm:p-20 text-xl transition-all ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="fixed top-8 right-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoClose className="h-10 w-10 text-white" />
        </button>

        {navLinks.map((link, index) => (
          <li key={index} className="relative  flex flex-col w-full text-newBlack">
            <div className="flex items-center gap-5 mb-4 sm:mb-6">
              <Link
                href={link.url}
                className="flex  w-full  transition gap-6 px-4 py-2 orbitron text-bold text-white underline underline-offset-8"
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
              className="flex items-center gap-4 text-white"
              target="_blank"
            >
              <Image
                src={icon.icon}
                alt={icon.alt}
                width={40}
                height={40}
              />
            </Link>
          </li>)
        )}
        </div>
      </ul>

      {/* desktop menu */}
      <ul className="hidden xl:flex gap-2">
        {navLinks.map((link, index) => (
          <li key={index} className="relative flex items-center">
            <Link
              href={link.url}
              className="flex items-center py-2 px-2 gap-4 hover:text-orange-500 transition text-newBlack"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
