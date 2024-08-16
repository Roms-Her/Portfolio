import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/footer/Footer";
import Nav from "./src/components/header/Nav";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Roms - Développeur web et web mobile",
  description: "Bienvenue sur mon portfolio. Je suis développeur web et web mobile, je vous invite à découvrir mes projets et mes compétences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-NBQ4NGNP" />
      <body className={inter.className}>
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
