"use client";

import "slim-select/styles";
import "@/app/resources/globals.css";
import Image from "next/image";
import { useState } from "react";
import SlimSelect from "slim-select/react";
import {BiBookOpen,BiBriefcase,BiCheckCircle,BiCog,BiFile,BiUser,BiUserCheck,BiWorld,BiX,} from "react-icons/bi";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";


export default function Index() {
  
  const [activeTab, setActiveTab] = useState("personal");
  const [techSkills, setTechSkills] = useState(["react", "node", "mongodb"]);
  const [softSkills, setSoftSkills] = useState(["team", "comm"]);
  const [languages, setLanguages] = useState(["fr", "ht", "en"]);
  const [studyLevel, setStudyLevel] = useState(["bac", "licence", "diplome"]);

  const studyOptions = [
    { value: "bac", text: "Baccalaureat 1" },
    { value: "licence", text: "Licence" },
    { value: "diplome", text: "Diplome" },
    { value: "bac2", text: "Baccalaureat 2" },
  ];

  const langOptions = [
    { value: "fr", text: "Français" },
    { value: "ht", text: "Créole haïtien" },
    { value: "en", text: "Anglais" },
    { value: "es", text: "Espagnol" },
    { value: "pt", text: "Portugais" },
    { value: "de", text: "Allemand" },
    { value: "it", text: "Italien" },
    { value: "zh", text: "Chinois" },
    { value: "ar", text: "Arabe" },
  ];

  const techOptions = [
    { value: "react", text: "React" },
    { value: "node", text: "Node.js" },
    { value: "mongodb", text: "MongoDB" },
    { value: "tailwind", text: "Tailwind CSS" },
    { value: "ts", text: "TypeScript" },
    { value: "express", text: "Express.js" },
    { value: "next", text: "Next.js" },
    { value: "vue", text: "Vue.js" },
    { value: "python", text: "Python" },
    { value: "docker", text: "Docker" },
  ];

  const softOptions = [
    { value: "team", text: "Travail en équipe" },
    { value: "comm", text: "Communication" },
    { value: "project", text: "Gestion de projet" },
    { value: "problem", text: "Résolution de problèmes" },
    { value: "lead", text: "Leadership" },
    { value: "time", text: "Gestion du temps" },
  ];

  return (
    <div>
      <BreadCrumb
        items={[{ label: "Accueil", href: "/" }, { label: "Profil" }]}
      />
      <div className="bg-primary mt-4 mb-6 text-white w-full rounded-[2rem] py-5 px-5">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-md md:text-4xl">
              <span className="text-white/75">Compléter votre </span> profil
            </h1>
            <p className="text-white/60 max-md:line-clamp-2 mb-3 text-xs md:text-sm leading-relaxed">
              Trouve l’opportunité qui te correspond parmi des centaines
              d’offres d’emploi.
            </p>
          </div>
          <div>
            <Image
              width="230"
              height="230"
              className="max-w-full h-auto"
              src="/svgs/Forms-amico.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative gap-3 grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1">
          <div className="bg-white rounded-3xl p-4">
            <div className="flex gap-1 mt-4 flex-col items-center justify-center w-full">
              <Image
                width={50}
                height={50}
                className="size-14 md:size-20 rounded-full object-cover"
                src="https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp"
                alt="Rounded avatar"
              />
              <span className="text-primary text-md">Jane Doe</span>
              <span className="text-gray-500 text-xs">Web Developer</span>
            </div>
            <div className="flex my-4 px-4 md:px-6 items-center justify-between">
              <div className="flex text-xs text-primary items-center gap-2">
                <BiBriefcase className="size-4 text-secondary" />
                <span className="font-bold">Applications</span>
              </div>
              <span className="px-[8px] text-xs text-white font-bold py-1 bg-secondary rounded-full">
                5
              </span>
            </div>
            <div className="flex my-4 px-4 md:px-6 items-center justify-between">
              <div className="flex text-xs text-primary items-center gap-2">
                <BiUserCheck className="size-4 text-secondary" />
                <span className="font-bold">Profil</span>
              </div>
              <span className="px-[8px] text-xs text-white font-bold py-1 bg-secondary rounded-full">
                56%
              </span>
            </div>
            <div className="flex my-4 px-4 md:px-6 items-center justify-between">
              <div className="flex text-xs text-primary items-center gap-2">
                <BiFile className="size-4 text-secondary" />
                <span className="font-bold">CV</span>
              </div>
              <span className="px-[8px] text-xs text-white font-bold py-1 bg-secondary rounded-full">
                70%
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white rounded-3xl p-6">
            <div className="overflow-y-auto">
              <div className="flex space-x-2 w-fit md:w-full bg-white p-1 border border-gray-400/50 rounded-full text-xs">
                {/* Informations personnelles */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="options"
                    id="personal"
                    className="hidden peer"
                    checked={activeTab === "personal"}
                    onChange={() => setActiveTab("personal")}
                  />
                  <label
                    htmlFor="personal"
                    className="cursor-pointer font-bold flex gap-1 items-center text-nowrap rounded-full py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-secondary/20 peer-checked:text-primary"
                  >
                    <BiUser className="size-4" />
                    Informations personnelles
                  </label>
                </div>

                {/* Formation Académique */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="options"
                    id="study"
                    className="hidden peer"
                    checked={activeTab === "study"}
                    onChange={() => setActiveTab("study")}
                  />
                  <label
                    htmlFor="study"
                    className="cursor-pointer font-bold flex gap-1 items-center text-nowrap rounded-full py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-secondary/20 peer-checked:text-primary"
                  >
                    <BiBookOpen className="size-4" />
                    Formation Académique
                  </label>
                </div>

                {/* Compétences */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="options"
                    id="skills"
                    className="hidden peer"
                    checked={activeTab === "skills"}
                    onChange={() => setActiveTab("skills")}
                  />
                  <label
                    htmlFor="skills"
                    className="cursor-pointer font-bold flex gap-1 items-center text-nowrap rounded-full py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-secondary/20 peer-checked:text-primary"
                  >
                    <BiCog className="size-4" />
                    Compétences
                  </label>
                </div>

                {/* Langues */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="options"
                    id="languages"
                    className="hidden peer"
                    checked={activeTab === "languages"}
                    onChange={() => setActiveTab("languages")}
                  />
                  <label
                    htmlFor="languages"
                    className="cursor-pointer font-bold flex gap-1 items-center text-nowrap rounded-full py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-secondary/20 peer-checked:text-primary"
                  >
                    <BiWorld className="size-4" />
                    Langues
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl mt-8 mb-4 text-blue-600 w-full bg-blue-50 h-10">
              <div className="flex w-full h-10 gap-2 items-center">
                <div className="h-full w-1.5 bg-primary rounded-l-xl"></div>
                <div className="flex items-center">
                  <BiCheckCircle />
                  <p className="text-sm ml-2">
                    Success! Your task is fully completed.
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label="close"
                className="active:scale-90 transition-all mr-3"
              >
                <BiX />
              </button>
            </div>

            {/* Formulaire unique englobant tous les onglets */}
            <form className="mt-8 mb-2">
              {/* Informations personnelles */}
              {activeTab === "personal" && (
                <section className="personal-info">
                  <div className="flex gap-3 w-full flex-wrap">
                    {/* Nom complet */}
                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label
                        htmlFor="fullName"
                        className="text-sm font-bold text-gray-700"
                      >
                        Nom complet
                      </label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <input
                          id="fullName"
                          name="fullName"
                          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
                          type="text"
                          placeholder="Nom complet"
                          defaultValue="Jean-Robert Pierre-Louis"
                        />
                        <svg
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M15 15.75v-1.5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1.5m9-10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Titre du poste recherché */}
                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label
                        htmlFor="jobTitle"
                        className="text-sm font-bold text-gray-700"
                      >
                        Titre du poste recherché
                      </label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <input
                          id="jobTitle"
                          name="jobTitle"
                          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
                          type="text"
                          placeholder="Titre du poste recherché"
                          defaultValue="Développeur Full-Stack React / Node.js"
                        />
                        <svg
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M3.75 3.75v10.5a.75.75 0 0 0 .75.75h9a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75zM16.5 4.5v9a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V4.5M12 13.5V2.25M6 13.5V2.25"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold text-gray-700"
                      >
                        Adresse e-mail
                      </label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <input
                          id="email"
                          name="email"
                          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
                          type="email"
                          placeholder="Adresse e-mail"
                          defaultValue="jeanrobert.pl@example.ht"
                        />
                        <svg
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M3.75 4.5h10.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75zM16.5 4.5l-7.5 4.5-7.5-4.5"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label
                        htmlFor="phone"
                        className="text-sm font-bold text-gray-700"
                      >
                        Numéro de téléphone
                      </label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <input
                          id="phone"
                          name="phone"
                          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
                          type="tel"
                          placeholder="Numéro de téléphone"
                          defaultValue="+509 37 01 2345"
                        />
                        <svg
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.5 12.75v1.5a1.5 1.5 0 0 1-1.635 1.493 17.93 17.93 0 0 1-7.8-2.771 17.93 17.93 0 0 1-2.77-7.8A1.5 1.5 0 0 1 5.25 3h1.5a1.5 1.5 0 0 1 1.5 1.293 11.99 11.99 0 0 0 .655 2.7 1.5 1.5 0 0 1-.353 1.614l-.75.75a12 12 0 0 0 4.242 4.242l.75-.75a1.5 1.5 0 0 1 1.614-.353 11.99 11.99 0 0 0 2.7.655A1.5 1.5 0 0 1 16.5 12.75z"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Localisation */}
                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label
                        htmlFor="location"
                        className="text-sm font-bold text-gray-700"
                      >
                        Adresse
                      </label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <input
                          id="location"
                          name="location"
                          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
                          type="text"
                          placeholder="Localisation"
                          defaultValue="Pétion-Ville, Port-au-Prince"
                        />
                        <svg
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 1.5c-2.25 0-4.25 1.75-4.25 4.25 0 2.25 4.25 8.5 4.25 8.5s4.25-6.25 4.25-8.5C13.25 3.25 11.25 1.5 9 1.5zM9 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Departement */}
                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label
                        htmlFor="department"
                        className="text-sm font-bold text-gray-700"
                      >
                        Departement
                      </label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <input
                          id="department"
                          name="department"
                          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
                          type="text"
                          placeholder="Département"
                          defaultValue="Ouest"
                        />
                        <svg
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 1.5c-2.25 0-4.25 1.75-4.25 4.25 0 2.25 4.25 8.5 4.25 8.5s4.25-6.25 4.25-8.5C13.25 3.25 11.25 1.5 9 1.5zM9 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Formation Académique */}
              {activeTab === "study" && (
                <section className="study">
                  <div className="space-y-6">
                    {/* Niveau d'étude */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">
                        Niveau d'étude
                      </label>
                      <SlimSelect
                        value={studyLevel}
                        onChange={setStudyLevel}
                        name="studyLevel"
                        placeholder="Sélectionnez votre niveau"
                        allowDeselect
                      >
                        {studyOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.text}
                          </option>
                        ))}
                      </SlimSelect>
                    </div>

                    {/* Diplôme */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="degree"
                        className="text-sm font-bold text-gray-700"
                      >
                        Diplôme
                      </label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <input
                          id="degree"
                          name="degree"
                          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
                          type="text"
                          placeholder="Diplôme obtenu"
                          defaultValue="Licence Informatique"
                        />
                        <svg
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 1.5L3.75 4.5v6l5.25 3 5.25-3v-6L9 1.5zM9 13.5L3.75 10.5M9 13.5l5.25-3M9 7.5v6"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Établissement */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="institution"
                        className="text-sm font-bold text-gray-700"
                      >
                        Établissement
                      </label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <input
                          id="institution"
                          name="institution"
                          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
                          type="text"
                          placeholder="Nom de l'établissement"
                          defaultValue="Université d'État d'Haïti"
                        />
                        <svg
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M3.75 3.75v10.5a.75.75 0 0 0 .75.75h9a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75zM16.5 4.5v9a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V4.5M12 13.5V2.25M6 13.5V2.25"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Compétences */}
              {activeTab === "skills" && (
                <section className="skills">
                  <div className="space-y-6">
                    {/* Compétences techniques */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">
                        Compétences techniques
                      </label>
                      <SlimSelect
                        value={techSkills}
                        onChange={setTechSkills}
                        name="techSkills"
                        multiple
                        placeholder="Sélectionnez ou ajoutez des compétences"
                        allowDeselect
                      >
                        {techOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.text}
                          </option>
                        ))}
                      </SlimSelect>
                    </div>

                    {/* Compétences professionnelles */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">
                        Compétences professionnelles
                      </label>
                      <SlimSelect
                        value={softSkills}
                        onChange={setSoftSkills}
                        name="softSkills"
                        multiple
                        placeholder="Sélectionnez ou ajoutez des compétences"
                        allowDeselect
                      >
                        {softOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.text}
                          </option>
                        ))}
                      </SlimSelect>
                    </div>
                  </div>
                </section>
              )}

              {/* Langues */}
              {activeTab === "languages" && (
                <section className="languages">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">
                      Langues parlées
                    </label>
                    <SlimSelect
                      value={languages}
                      onChange={setLanguages}
                      name="languages"
                      multiple
                      placeholder="Sélectionnez les langues que vous parlez"
                      allowDeselect
                    >
                      {langOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.text}
                        </option>
                      ))}
                    </SlimSelect>
                  </div>
                </section>
              )}

              {/* Bouton de soumission global */}
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-full text-xs font-medium hover:bg-primary/90 transition"
                >
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
