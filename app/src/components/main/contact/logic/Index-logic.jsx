"use client";

import ApiService from "../../../../service/apiService";
import { SubmitContactForm } from "../../../../usecases/submitContactForm";
import Form from "../rendering/Form";

import { useState } from "react";

export default function FormLogic() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiService = new ApiService();

    const submitFormUseCase = new SubmitContactForm(apiService);
    await submitFormUseCase.execute(formData, setFormData);
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
    />
  );
}
