"use client";
import { Orbitron } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Form from "../logic/Index-logic";
const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export default function Index() {
  return (
    <section className="flex flex-col gap-6 mb-12 min-h-lvh justify-center text-newBlack">
      <h1
        className={`w-full text-center text-3xl font-bold p-4 ${orbitron.className}`}
      >
        Me contacter
      </h1>
      <div className="mx-auto flex flex-col gap-4 p-6 sm:w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 text-justify">
        <p>
          Vous souhaitez lancer votre activité professionnelle ou bien mettre en
          avant vos compétences ? Alors, je serai ravi de vous accompagner.
        </p>
        <p className="font-bold">
          Vous êtes une entreprise et mon profil vous intéresse ? Je serai ravi
          de m&apos;entretenir avec vous.
        </p>
      </div>
      <Form />
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        position="top-right"
        rtl={false}
        theme="colored"
      />
    </section>
  );
}
