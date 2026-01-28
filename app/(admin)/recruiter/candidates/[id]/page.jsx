"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {BiBookOpen,BiCog,BiWorld,BiUser} from "react-icons/bi";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import ProgressRing from "@/app/components/recruiter/stats/ProgressRing";
import CandidateDocsPage from "@/app/components/recruiter/cards/CandidateDocsPage";
import { useUser } from "@/app/lib/api/hooks/queries/useUsers";
import { useParams } from "next/navigation";

const tabs = ["personal", "study", "skills", "languages"];

export default function Show() {

  const params = useParams();
  const id = params.id;
  const {data , isLoading , error } = useUser(id);
  const [activeTab, setActiveTab] = useState("personal");

  // Données fictives
  const candidate = {
    name: "Jean-Robert Pierre-Louis",
    title: "Développeur Full-Stack React / Node.js",
    email: "jeanrobert.pl@example.ht",
    phone: "+509 37 01 2345",
    location: "Pétion-Ville, Port-au-Prince",
    department: "Ouest",
    degree: "Licence Informatique",
    institution: "Université d'État d'Haïti",
    studyLevel: ["Licence"],
    techSkills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    softSkills: ["Travail en équipe", "Communication", "Gestion du temps"],
    languages: ["Français", "Créole haïtien", "Anglais"],
    profileCompletion: 56,
    cvCompletion: 70,
    applications: 5,
  };

  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Accueil", href: "/recruiter" },
          { label: "Candidats", href: "/recruiter/candidates" },
          { label: candidate.name },
        ]}
      />
      <div className="flex my-4 w-full justify-between items-center">
        <h2 className="text-2xl text-primary">Profil</h2>
      </div>

      <div className="relative mt-4 gap-3 grid grid-cols-1 md:grid-cols-4">
        {/* Colonne gauche : carte résumé */}
        <div className="col-span-1">
          <div className="bg-white rounded-4xl p-10">
            <div className="flex flex-col items-center gap-3 w-full">
              <Image
                width={50}
                height={50}
                className="size-25 md:size-30 rounded-full object-cover"
                src="https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp"
                alt={candidate.name}
              />
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xl font-semibold">
                  {candidate.name}
                </span>
                <span className="text-gray-500 text-xs">{candidate.title}</span>
              </div>
            </div>

            <div className="mt-6 relative">
              <h4 className="text-xs text-center font-semibold text-gray-700 mb-4">
                Stats
              </h4>
              <div className="flex justify-center gap-4 items-center">
                <ProgressRing
                  percent={candidate.profileCompletion}
                  color="#2a2773"
                  label="Profil"
                />
                <ProgressRing
                  percent={candidate.cvCompletion}
                  color="#2a2773"
                  label="CV"
                />
              </div>
            </div>

            <div className="grid mt-6 grid-cols-1 gap-4 text-sm">
              <div>
                <span className="text-gray-500 text-xs">Nom complet</span>
                <p className="font-semibold text-primary">{candidate.name}</p>
              </div>
              <div>
                <span className="text-gray-500 text-xs">Poste recherché</span>
                <p className="font-semibold text-primary">{candidate.title}</p>
              </div>
              <div>
                <span className="text-gray-500 text-xs">E-mail</span>
                <p className="font-semibold text-primary">{candidate.email}</p>
              </div>
              <div>
                <span className="text-gray-400">Téléphone</span>
                <p className="font-semibold text-primary">{candidate.phone}</p>
              </div>
              <div>
                <span className="text-gray-500 text-xs">Adresse</span>
                <p className="font-semibold text-primary">
                  {candidate.location}
                </p>
              </div>
              <div>
                <span className="text-gray-500">Département</span>
                <p className="font-semibold text-gray-900">
                  {candidate.department}
                </p>
              </div>
            </div>

            <Link
              href="/recruiter/candidates/1"
              className="flex gap-5 items-center w-fit mt-5 px-4 py-2 text-xs border border-primary rounded-full text-white bg-primary transition hover:bg-white hover:border-primary hover:text-primary"
            >
              <BiUser />
              Telecharger CV
            </Link>
          </div>
        </div>

        {/* Colonne droite : onglets */}
        <div className="col-span-1 md:col-span-3">
          <div className="bg-white rounded-3xl p-6">
            {/* Tabs */}
            <div className="overflow-y-auto">
              <div className="flex space-x-2 w-fit md:w-full bg-white pb-2 border-b border-gray-300 text-xs">
                {tabs.map((tab) => (
                  <div key={tab} className="flex items-center">
                    <input
                      type="radio"
                      name="options"
                      id={tab}
                      className="hidden peer"
                      checked={activeTab === tab}
                      onChange={() => setActiveTab(tab)}
                    />
                    <label
                      htmlFor={tab}
                      className="cursor-pointer font-bold flex gap-1 items-center text-nowrap rounded-full py-2 px-4 text-primary transition-colors duration-200 peer-checked:bg-primary peer-checked:text-white"
                    >
                      {tab === "personal" && <BiUser className="size-4" />}
                      {tab === "study" && <BiBookOpen className="size-4" />}
                      {tab === "skills" && <BiCog className="size-4" />}
                      {tab === "languages" && <BiWorld className="size-4" />}
                      {tab === "personal" && "Biographie"}
                      {tab === "study" && "Formation académique"}
                      {tab === "skills" && "Compétences"}
                      {tab === "languages" && "Langues"}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Contenu en lecture */}
            <div className="mt-10">
              {/* Informations personnelles */}
              {activeTab === "personal" && (
                <section className="personal-info text-md text-gray-500">
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem natus sint maxime quae consequuntur, at saepe
                    consequatur voluptas veniam qui voluptate et beatae
                    perspiciatis voluptates itaque. Veritatis voluptatum nisi
                    deleniti praesentium, laudantium minus minima cumque. Ea
                    aspernatur labore unde similique enim, facilis repellendus.
                    Rem dolore perferendis corrupti! Esse voluptatem iure
                  </p>

                  <p>
                    assumenda dignissimos, amet consequuntur consectetur fugiat
                    asperiores quasi eum nostrum ipsam omnis modi et! Tempore
                    obcaecati cumque placeat praesentium atque adipisci dolor
                    saepe, exercitationem eos fugit hic reiciendis nihil illo
                    debitis similique numquam iure eveniet aliquid voluptates
                    dignissimos asperiores? Quod sed facere accusamus explicabo
                    accusantium atque ratione reiciendis praesentium in.
                  </p>
                </section>
              )}

              {/* Formation */}
              {activeTab === "study" && (
                <section className="study">
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-gray-500">Niveau d’étude</span>
                      <p className="font-semibold text-primary">
                        {candidate.studyLevel.join(", ")}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Diplôme</span>
                      <p className="font-semibold text-primary">
                        {candidate.degree}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Établissement</span>
                      <p className="font-semibold text-primary">
                        {candidate.institution}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* Compétences */}
              {activeTab === "skills" && (
                <section className="skills">
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-gray-500">
                        Compétences techniques
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {candidate.techSkills.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">
                        Compétences professionnelles
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {candidate.softSkills.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Langues */}
              {activeTab === "languages" && (
                <section className="languages">
                  <div className="text-sm">
                    <span className="text-gray-500">Langues parlées</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {candidate.languages.map((l) => (
                        <span
                          key={l}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>

          <h2 className="text-lg mb-2 mt-4 font-bold text-primary">Documents</h2>
          <CandidateDocsPage />
        </div>
      </div>
    </div>
  );
}
