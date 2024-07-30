"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidStatus, setIsValidStatus] = useState(null);

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const isValidEmail = regexEmail.test(formData.email);

    if (!isValidEmail) {
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la soumission du formulaire");
      }

      const data = await res.json();
      setIsValidStatus(true);
      setResponseMessage(data.message);
      setFormData({
        name: "",
        companyName: "",
        email: "",
        message: "",
      });
      setIsSubmitted(false);
    } catch (error) {
      console.error("Erreur:", error);
      setIsValidStatus(false);
      setResponseMessage("Erreur lors de la soumission du formulaire");
    }
  };

  const isValidEmail = regexEmail.test(formData.email);

  return (
    <section className="flex flex-col gap-6 mb-12">
      <h1 className="w-full text-center text-3xl font-bold p-6">
        Fomulaire de contact
      </h1>
      <div className="m-auto text-lg flex flex-col gap-4 p-6 sm:w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 text-justify">
        <p>
          Vous souhaitez lancer votre activité professionnelle ou bien mettre en
          avant vos compétences ? Alors, je serai ravi de vous accompagner.
        </p>
        <p className="font-bold">
          Vous êtes une entreprise et mon profil vous intéresse ? Je serai ravi
          de m&apos;entretenir avec vous.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-10 w-full sm:w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 m-auto p-6"
      >
        <div className="flex flex-col w-full  gap-4">
          <label className="font-bold text-xl" htmlFor="name">
            Nom : <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 backdrop-blur-3xl text-lg bg-[#d6e0ff40] border text-accessible rounded-lg"
            required
            placeholder=""
          />
        </div>
        <div className="flex flex-col w-full  gap-4">
          <label className="font-bold text-xl" htmlFor="companyName">
            Entreprise :
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 backdrop-blur-3xl text-lg bg-[#d6e0ff40] border text-accessible rounded-lg"
            placeholder=""
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <label className="font-bold text-xl" htmlFor="email">
            Email : <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 backdrop-blur-3xl text-lg bg-[#d6e0ff40] border text-accessible rounded-lg"
            required
            placeholder=""
          />
          {isSubmitted && !isValidEmail && (
            <p className="text-red-600">
              Veuillez entrer une adresse email valide (ex:
              mon.adresse@gmail.com) *
            </p>
          )}
        </div>
        <div className="flex flex-col w-full gap-4">
          <label className="font-bold text-xl" htmlFor="message">
            Message : <span className="text-red-600">*</span>
          </label>
          <textarea
          
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-40 p-2 backdrop-blur-3xl text-lg bg-[#d6e0ff40] border text-accessible rounded-lg"
            required
            placeholder=""
          ></textarea>
        </div>

        {responseMessage ? (
          <p
            className={`py-2 px-4 ${
              isValidStatus ? "bg-solid" : "bg-red-600"
            } `}
          >
            {responseMessage}
          </p>
        ) : null}

        <p className="">
          <span className="text-red-600">*</span> Champs obligatoires
        </p>

        <button
          type="submit"
          className="bg-solid w-2/4 px-4 py-2 rounded-xl uppercase border border-solid tracking-widest font-medium text-sm hover:bg-orange-500 hover:border-orange-800 hover:shadow-xl transition-all ease-out duration-200"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
