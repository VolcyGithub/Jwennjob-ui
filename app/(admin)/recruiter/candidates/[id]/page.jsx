"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { BiBookOpen, BiCog, BiWorld, BiUser } from "react-icons/bi";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import ProgressRing from "@/features/recruiter/shared/components/stats/ProgressRing";


import ErrorState from "@/features/candidate/shared/components/cards/CardError";
import { useRecruiterCandidatesById } from "@/features/recruiter/shared/hooks/queries/useRecruiters";
import CandidateProfileSkeleton from "@/features/recruiter/shared/components/cards/CandidateProfileSkeleton";
import CandidateDocsPage from "@/features/recruiter/shared/components/cards/CandidateDocsPage";

const tabs = ["personal", "study", "skills", "languages"];

export default function Show() {
  const params = useParams();
  const id = params.id;
  const {
    data: response,
    isLoading,
    error,
    refetch,
  } = useRecruiterCandidatesById(id);
  const [activeTab, setActiveTab] = useState("personal");

  if (isLoading) {
    return <CandidateProfileSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        title="Impossible de charger le profil"
        message="Nous n'avons pas pu récupérer les informations de ce candidat."
        onRetry={refetch}
      />
    );
  }

  if (!response?.data) {
    return (
      <ErrorState
        title="Candidat non trouvé"
        message="Ce candidat n'existe pas ou a été supprimé."
      />
    );
  }

  const candidate = response.data;

  console.log(candidate);

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
        <Link
          href={`mailto:${candidate.email}`}
          className="flex gap-2 items-center justify-center px-5 py-2 text-xs border border-primary rounded-full text-white bg-primary transition hover:bg-white hover:border-primary hover:text-primary"
        >
          <BiUser />
          Contacter
        </Link>
      </div>

      <div className="relative mt-4 gap-3 grid grid-cols-1 md:grid-cols-4">
        {/* Colonne gauche : carte résumé */}
        <div className="col-span-1">
          <div className="bg-white rounded-4xl p-6 md:p-10">
            <div className="flex flex-col items-center gap-3 w-full">
              <div
                className={`size-15 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-sm`}
              >
                {candidate.name?.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl font-semibold">
                  {candidate.name}
                </span>
                <span className="text-gray-500 text-xs">
                  {candidate.sector?.title || "Secteur non spécifié"}
                </span>
              </div>
            </div>

            <div className="mt-6 relative">
              <h4 className="text-xs text-center font-semibold text-gray-700 mb-4">
                Stats
              </h4>
              <div className="flex justify-center gap-4 items-center">
                <ProgressRing
                  percent={candidate.applications_count > 0 ? 100 : 50}
                  color="#2a2773"
                  label="Profil"
                />
                <ProgressRing
                  percent={candidate.cvs[0].completion_rate}
                  color="#2a2773"
                  label="CV"
                />
              </div>
            </div>

            <div className="grid mt-6 grid-cols-1 gap-4 text-sm">
              <div>
                <span className="text-gray-500 text-xs block mb-1">
                  Nom complet
                </span>
                <p className="font-semibold text-primary">{candidate.name}</p>
              </div>
              <div>
                <span className="text-gray-500 text-xs block mb-1">E-mail</span>
                <p className="font-semibold text-primary text-xs break-all">
                  {candidate.email}
                </p>
              </div>
              <div>
                <span className="text-gray-500 text-xs block mb-1">
                  Téléphone
                </span>
                <p className="font-semibold text-primary">
                  {candidate.phone || "Non renseigné"}
                </p>
              </div>
              <div>
                <span className="text-gray-500 text-xs block mb-1">
                  Adresse
                </span>
                <p className="font-semibold text-primary">
                  {candidate.address || "Non renseignée"}
                </p>
              </div>
              <div>
                <span className="text-gray-500 text-xs block mb-1">
                  Département
                </span>
                <p className="font-semibold text-gray-900">
                  {candidate.department?.title || "Non renseigné"}
                </p>
              </div>
              <div>
                <span className="text-gray-500 text-xs block mb-1">
                  Niveau d'études
                </span>
                <p className="font-semibold text-primary">
                  {candidate.education?.title || "Non renseigné"}
                </p>
              </div>
              <div>
                <span className="text-gray-500 text-xs block mb-1">Genre</span>
                <p className="font-semibold text-primary">
                  {candidate.gender?.title || "Non renseigné"}
                </p>
              </div>
              <div>
                <span className="text-gray-500 text-xs block mb-1">
                  Date de naissance
                </span>
                <p className="font-semibold text-primary">
                  {candidate.birth_date
                    ? new Date(candidate.birth_date).toLocaleDateString("fr-FR")
                    : "Non renseignée"}
                </p>
              </div>
            </div>
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
                      {tab === "study" && "Formation"}
                      {tab === "skills" && "Compétences"}
                      {tab === "languages" && "Langues"}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Contenu */}
            <div className="mt-10">
              {/* Biographie */}
              {activeTab === "personal" && (
                <section className="personal-info text-sm text-gray-600">
                  {candidate.bio ? (
                    <div>
                      <h3 className="font-semibold text-primary mb-3">
                        À propos
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: candidate.bio }}
                        className="leading-relaxed whitespace-pre-line"
                      ></p>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-400 italic">
                        Aucune biographie renseignée
                      </p>
                    </div>
                  )}
                </section>
              )}

              {/* Formation */}
              {activeTab === "study" && (
                <section className="study space-y-6">
                  <h3 className="font-semibold text-primary mb-4">Formation</h3>
                  <div className="space-y-4 text-sm">
                    <div className="bg-gray-50 rounded-2xl px-6 py-3">
                      <span className="text-gray-500 text-xs block mb-1">
                        Niveau d'études
                      </span>
                      <p className="font-semibold text-primary">
                        {candidate.education?.title || "Non renseigné"}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl px-6 py-3">
                      <span className="text-gray-500 text-xs block mb-1">
                        Secteur d'activité
                      </span>
                      <p className="font-semibold text-primary">
                        {candidate.sector?.title || "Non renseigné"}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl px-6 py-3">
                      <span className="text-gray-500 text-xs block mb-1">
                        Département
                      </span>
                      <p className="font-semibold text-primary">
                        {candidate.department?.title || "Non renseigné"}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* Compétences */}
              {activeTab === "skills" && (
                <section className="skills">
                  {candidate.competences?.length > 0 ? (
                    <div>
                      <h3 className="font-semibold text-primary mb-4">
                        Domaines de compétence
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {candidate.competences.map((comp) => (
                          <span
                            key={comp.id}
                            className="px-4 flex items-center gap-1 py-2 text-xs font-semibold bg-primary/10 text-primary rounded-full"
                          >
                            <BiCog/>
                            {comp.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-400 italic">
                        Aucune compétence renseignée
                      </p>
                    </div>
                  )}
                </section>
              )}

              {/* Langues */}
              {activeTab === "languages" && (
                <section className="languages">
                  {candidate.languages?.length > 0 ? (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-primary mb-4">
                        Langues maîtrisées
                      </h3>
                      <div className="flex flex-wrap gap-2 items-center">
                        {candidate.languages.map((lang) => (
                          <div
                            key={lang.id}
                            className="flex items-center justify-between bg-primary/10 rounded-3xl px-4 py-2"
                          >
                            <div className="flex items-center gap-1">
                              <BiWorld className="text-primary text-md" />
                              <span className="font-semibold text-xs text-primary">
                                {lang.title}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-400 italic">
                        Aucune langue renseignée
                      </p>
                    </div>
                  )}
                </section>
              )}
            </div>
          </div>

          {/* Documents */}
          <h2 className="text-lg mb-2 mt-6 font-bold text-primary">
            Documents
          </h2>
          <CandidateDocsPage docs={candidate.documents} />
        </div>
      </div>
    </div>
  );
}
