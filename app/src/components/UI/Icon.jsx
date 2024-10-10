import Image from "next/image";
import Link from "next/link";

import { FiGithub, FiLink } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";

const MenuIcon = ({ size, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="xl:hidden p-2 rounded-m transition-all"
      aria-label="Ouvrir le menu"
    >
      <IoMenu size={size} color={color} />
    </button>
  );
};

const CloseIcon = ({ size, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6"
      aria-label="Fermer la modale"
    >
      <IoClose size={size} color={color} />
    </button>
  );
};

const IllustatrionImage = ({ width, height }) => {
  return (
    <Image
      src="/back/test.webp"
      alt="Animation"
      width={width}
      height={height}
    />
  );
};

const CVLink = () => {
  return (
    <Link
      className="px-4 py-2 border border-black rounded-xl text-center text-black uppercase tracking-widest font-medium text-sm hover:bg-orange-500 hover:shadow-lg transition-all ease-out duration-200"
      href="/pdf/CV.pdf"
      download="CV_romain-hernandez"
      target="_blank"
      aria-label="Télécharger le CV"
    >
      Télécharger le CV
    </Link>
  );
};

const IllustrationRoms = () => {
  return (
    <Image
      src="/back/Illustration-Roms.png"
      alt="Animation"
      width={500}
      height={200}
    />
  );
};

const LineArt = () => {
  return <Image src="/back/line.png" width={500} height={500} alt="dessin" />;
};

const GithubIconLinks = ({ href }) => {
  return (
    <Link href={href} target="_blank" aria-label="Voir le dépôt GitHub"
    className="p-3 border border-newBlack rounded-full hover:bg-orange-500 transition-all duration-200"
>
      <FiGithub size={20} color="#000"/>
    </Link>
  );
};

const ProjectLink = ({ href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label="Aller sur le site web du projet"
      className="p-3 border border-newBlack rounded-full hover:bg-orange-500 transition-all duration-200"
    >
      <FiLink size={20} color="#000"/>
    </Link>
  );
};
export {
  CloseIcon,
  CVLink,
  GithubIconLinks,
  IllustatrionImage,
  IllustrationRoms,
  LineArt,
  MenuIcon,
  ProjectLink
};

