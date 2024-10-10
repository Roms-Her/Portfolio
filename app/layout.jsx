import { GoogleTagManager } from "@next/third-parties/google";
import { Orbitron, Play } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import Footer from "./src/components/footer/rendering/Index";
import Header from "./src/components/header/rendering/Index";

const play = Play({ subsets: ["latin"], weight: "400" });
const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Roms - Développeur fullstack",
  description:
    "Bienvenue sur mon portfolio. Je suis développeur web et web mobile, je vous invite à découvrir mes projets et mes compétences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="vK9uuYTsLXtSNH-Zqibp-3JGDLxJ4GdrIO8MnzszuOs"
        />
      </head>
      <body className={`${play.className}`}>
        <GoogleTagManager gtmId="GTM-NBQ4NGNP" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
