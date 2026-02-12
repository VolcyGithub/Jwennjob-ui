"use client";

import { useState, useEffect } from "react";
import ProfileForm from "@/features/candidate/profile/components/forms/ProfileForm";
import {
  mapApiToForm,
  mapFormToApi,
} from "@/features/shared/mappers/global.mapper";

// Simulations des données API
const apiProfileData = {
  prenom: "Guillaume",
  pays: "ht",
  competences: ["react", "node"],
  cvFile: null, // fichier initialement vide
};

const countryOptions = [
  { value: "fr", label: "🇫🇷 France" },
  { value: "us", label: "🇺🇸 États-Unis" },
  { value: "ca", label: "🇨🇦 Canada" },
  { value: "ht", label: "🇭🇹 Haïti" },
];

const skillOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "node", label: "Node.js" },
  { value: "python", label: "Python" },
];

export default function ProfilePage() {

  const [defaultValues, setDefaultValues] = useState({});

  useEffect(() => {
    const mapped = mapApiToForm(apiProfileData, {
      pays: { type: "select", list: countryOptions },
      competences: { type: "multi-select", list: skillOptions },
    });
    setDefaultValues(mapped);
  }, []);

  const handleSubmit = (formData) => {
    const payload = mapFormToApi(formData);
    console.log("Payload prêt pour API :", payload);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mon profil</h1>
      <ProfileForm
        defaultValues={defaultValues}
        countryOptions={countryOptions}
        skillOptions={skillOptions}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
