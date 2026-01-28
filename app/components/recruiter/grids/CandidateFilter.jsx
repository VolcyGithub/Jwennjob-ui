"use client";
import React, { useState } from "react";
import SlimSelect from "slim-select/react";
import "slim-select/styles";
import "../../../globals.css";
import {
  BiBuilding,
  BiCog,
  BiGlobe,
  BiMap,
  BiSolidGraduation,
  BiTrash,
  BiX,
} from "react-icons/bi";

const TalentSearchFilter = ({ onFiltersChange }) => {
  /* --------------- états --------------- */
  const [filters, setFilters] = useState({
    location: "",
    education: "",
    university: "",
    skills: [],
    languages: [],
    experience: "",
    contractType: [],
    salaryRange: "",
  });

  /* --------------- helpers --------------- */
  const buildOpts = (arr, placeholder) => [
    { placeholder: true, text: placeholder },
    ...arr.map((t) => ({ text: t, value: t })),
  ];

  // Corrigé : gestion des valeurs SlimSelect
  const slimValues = (v) => {
    if (!v) return [];
    return Array.isArray(v) ? v.map((i) => i.value) : [v.value];
  };

  const handleSelectChange = (field, values) => {
    const newFilters = { ...filters, [field]: values };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearAllFilters = () => {
    const empty = {
      location: "",
      education: "",
      university: "",
      skills: [],
      languages: [],
      experience: "",
      contractType: [],
      salaryRange: "",
    };
    setFilters(empty);
    onFiltersChange?.(empty);
  };

  /* --------------- données --------------- */
  const locations = [
    "Port-au-Prince",
    "Carrefour",
    "Pétion-Ville",
    "Delmas",
    "À distance",
  ];
  const educationLevels = [
    "Baccalauréat",
    "Licence",
    "Master",
    "Doctorat",
    "Autodidacte",
  ];
  const universities = [
    "Université d'État d'Haïti",
    "Université Quisqueya",
    "Université Notre-Dame d'Haïti",
    "Institut Haïtien de Technologie",
    "Étrangère",
  ];
  const skills = [
    "Développement Web",
    "Gestion de Projet",
    "Marketing Digital",
    "Design Graphique",
    "Analyse de Données",
    "Ressources Humaines",
    "Comptabilité",
    "Communication",
  ];
  const languages = [
    "Français",
    "Créole Haïtien",
    "Anglais",
    "Espagnol",
    "Portugais",
  ];
  const experienceLevels = [
    "0-1 an (Débutant)",
    "1-3 ans (Junior)",
    "3-5 ans (Intermédiaire)",
    "5-10 ans (Senior)",
    "10+ ans (Expert)",
  ];
  const contractTypes = ["CDI", "CDD", "Stage", "Freelance", "Temps partiel"];
  const salaryRanges = [
    "0 - 30 000 HTG",
    "30 000 - 60 000 HTG",
    "60 000 - 100 000 HTG",
    "100 000+ HTG",
  ];

  /* --------------- styles SlimSelect --------------- */
  const slimSettings = (placeholder, isMulti = false) => ({
    placeholderText: placeholder,
    allowDeselect: true,
    isMultiple: isMulti,
    closeOnSelect: !isMulti,
    showSearch: isMulti,
    searchPlaceholder: "Rechercher…",
  });

  /* --------------- rendu --------------- */
  return (
    <div className="w-full shadow-sm bg-white rounded-4xl p-6 h-[780px] overflow-y-auto">
      <div className="h-fit">
        {/* header */}
        <div className="flex items-center  border-b border-gray-300 pb-2 justify-between mb-10">
          <h2 className="text-md font-semibold text-primary">
            Filtre
          </h2>
          <button
            onClick={clearAllFilters}
            className="text-lg px-3 py-1 rounded-full text-primary hover:opacity-90"
          >
            <BiTrash />
          </button>
        </div>

        {/* Localisation */}
        <Section icon={<BiMap />} title="Localisation">
          <SlimSelect
            data={buildOpts(locations, "Sélectionner une ville")}
            settings={slimSettings("Localisation")}
            onChange={(v) =>
              handleSelectChange("location", slimValues(v)[0] || "")
            }
          />
        </Section>

        {/* Niveau d'étude */}
        <Section icon={<BiSolidGraduation />} title="Niveau d'étude">
          <SlimSelect
            data={buildOpts(educationLevels, "Choisir un niveau")}
            settings={slimSettings("Niveau d'étude")}
            onChange={(v) =>
              handleSelectChange("education", slimValues(v)[0] || "")
            }
          />
        </Section>

        {/* Université */}
        <Section icon={<BiBuilding />} title="Université">
          <SlimSelect
            data={buildOpts(universities, "Choisir une université")}
            settings={slimSettings("Université")}
            onChange={(v) =>
              handleSelectChange("university", slimValues(v)[0] || "")
            }
          />
        </Section>

        {/* Compétences */}
        <Section icon={<BiCog />} title="Compétences">
          <SlimSelect
            data={skills.map((s) => ({ text: s, value: s }))}
            settings={slimSettings("Compétences", true)}
            onChange={(v) => handleSelectChange("skills", slimValues(v))}
          />
        </Section>

        {/* Langues */}
        <Section icon={<BiGlobe />} title="Langues">
          <SlimSelect
            data={languages.map((l) => ({ text: l, value: l }))}
            settings={slimSettings("Langues", true)}
            onChange={(v) => handleSelectChange("languages", slimValues(v))}
          />
        </Section>

        {/* Expérience */}
        <Section title="Expérience">
          <SlimSelect
            data={buildOpts(experienceLevels, "Choisir une fourchette")}
            settings={slimSettings("Expérience")}
            onChange={(v) =>
              handleSelectChange("experience", slimValues(v)[0] || "")
            }
          />
        </Section>

        {/* Type de contrat */}
        <Section title="Type de contrat">
          <SlimSelect
            data={contractTypes.map((t) => ({ text: t, value: t }))}
            settings={slimSettings("Contrats", true)}
            onChange={(v) => handleSelectChange("contractType", slimValues(v))}
          />
        </Section>

        {/* Fourchette salaire */}
        <Section title="Fourchette salariale">
          <SlimSelect
            data={buildOpts(salaryRanges, "Sélectionner une fourchette")}
            settings={slimSettings("Salaire")}
            onChange={(v) =>
              handleSelectChange("salaryRange", slimValues(v)[0] || "")
            }
          />
        </Section>
      </div>
    </div>
  );
};

/* --------------- sous-composant --------------- */
const Section = ({ icon, title, children }) => (
  <div className="mb-6 text-sm">
    <h3 className="text-xs font-bold text-primary mb-2 flex items-center gap-2">
      {icon} {title}
    </h3>
    {children}
  </div>
);

export default TalentSearchFilter;
