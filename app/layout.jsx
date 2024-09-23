
import { GoogleTagManager } from '@next/third-parties/google';
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/footer/Footer";
import Nav from "./src/components/header/Nav";
const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Roms - Développeur web et web mobile",
  description: "Bienvenue sur mon portfolio. Je suis développeur web et web mobile, je vous invite à découvrir mes projets et mes compétences.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <head>
      <meta name="google-site-verification" content="vK9uuYTsLXtSNH-Zqibp-3JGDLxJ4GdrIO8MnzszuOs" />
      </head>
      <body className={inter.className}>
      <GoogleTagManager gtmId="GTM-NBQ4NGNP" />
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
