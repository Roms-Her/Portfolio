import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./src/components/header/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roms - Portfolio",
  description: "Bienvenue sur mon portfolio. Je suis développeur web et mobile, je vous invite à découvrir mes projets et mes compétences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header><Nav /></header>
        <main>{children}</main>
        <footer></footer>
        </body>
    </html>
  );
}
