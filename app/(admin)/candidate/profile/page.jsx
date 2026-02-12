"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BiBriefcase,
  BiUserCheck,
  BiFile,
  BiUser,
  BiBookOpen,
  BiCog,
  BiGlobe,
  BiMap,
  BiPhone,
  BiEnvelope,
  BiCalendar,
  BiIdCard,
  BiEdit,
  BiDownload,
  BiLinkExternal,
} from "react-icons/bi";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import { useCandidateAuth } from "@/features/candidate/shared/contexts/CandidateContext";
import CandidateProfileSkeleton from "@/features/recruiter/shared/components/cards/CandidateProfileSkeleton";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfileView() {
  const { candidate, isLoading, error } = useCandidateAuth();
  const [activeTab, setActiveTab] = useState("personal");

  if (isLoading) {
    return <CandidateProfileSkeleton />;
  }

  const tabs = [
    { id: "personal", label: "Informations personnelles", icon: BiUser },
    { id: "education", label: "Formation", icon: BiBookOpen },
    { id: "skills", label: "Compétences", icon: BiCog },
    { id: "preferences", label: "Préférences", icon: BiGlobe },
  ];

  // Calcul du pourcentage de complétion du profil
  const calculateProfileCompletion = () => {
    const fields = [
      candidate.first_name,
      candidate.last_name,
      candidate.email,
      candidate.phone,
      candidate.birth_date,
      candidate.education,
      candidate.bio,
      candidate.competences?.length > 0,
    ];
    const filledFields = fields.filter(Boolean).length;
    return Math.round((filledFields / fields.length) * 100);
  };

  const completionRate = calculateProfileCompletion();

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <div className="w-full space-y-6">
        <BreadCrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Mon Profil" }]}
        />

        {/* Header Section avec Cover */}
        <div className="relative">
          {/* Cover Image */}
          <div className="h-48 md:h-64 rounded-3xl overflow-hidden relative bg-primary">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          {/* Profile Info Card */}
          <div className="relative -mt-20 mx-4 md:mx-8">
            <div className="bg-white rounded-4xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                {/* Avatar */}
                <div className="relative -mt-16 md:-mt-24">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-white">
                    <Image
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                      src={
                        candidate.profile_photo?.trim() ||
                        "https://jwennjob.com/img/non-profile.png"
                      }
                      alt={candidate.name}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    {candidate.name}
                  </h1>
                  <p className="text-primary font-medium mb-2">
                    {candidate.sector?.title || "Secteur non spécifié"}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <BiMap className="text-secondary" />
                      {candidate.department?.title ||
                        "Localisation non spécifiée"}
                    </span>
                    <span className="flex items-center gap-1">
                      <BiEnvelope className="text-secondary" />
                      {candidate.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <BiPhone className="text-secondary" />
                      {candidate.phone?.title || "Non spécifié"}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href="/candidate/profile/edit"
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-3xl font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    <BiEdit className="w-4 h-4" />
                    <span className="hidden sm:inline">Modifier</span>
                  </Link>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-3xl font-medium hover:border-primary hover:text-primary transition-all">
                    <BiDownload className="w-4 h-4" />
                    <span className="hidden sm:inline">CV</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs Navigation */}
            <div className="bg-white rounded-3xl p-2 ">
              <div className="flex flex-wrap gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-3xl font-medium text-sm transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl overflow-hidden">
              {/* Personal Info */}
              {activeTab === "personal" && (
                <div className="p-4 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg text-primary flex items-center gap-2">
                      <BiUser className="text-primary" />
                      Informations personnelles
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoCard
                      icon={BiUser}
                      label="Prénom"
                      value={candidate.first_name}
                    />
                    <InfoCard
                      icon={BiUser}
                      label="Nom"
                      value={candidate.last_name}
                    />
                    <InfoCard
                      icon={BiEnvelope}
                      label="Email"
                      value={candidate.email}
                    />
                    <InfoCard
                      icon={BiPhone}
                      label="Téléphone"
                      value={candidate.phone?.title}
                    />
                    <InfoCard
                      icon={BiMap}
                      label="Adresse"
                      value={candidate.address?.title}
                    />
                    <InfoCard
                      icon={BiMap}
                      label="Commune"
                      value={candidate.commune?.title}
                    />
                    <InfoCard
                      icon={BiCalendar}
                      label="Date de naissance"
                      value={candidate.birth_date}
                    />
                    <InfoCard
                      icon={BiUser}
                      label="Genre"
                      value={candidate.gender?.title}
                    />
                    <InfoCard
                      icon={BiIdCard}
                      label="NIF"
                      value={candidate.nif}
                      fullWidth
                    />
                  </div>
                </div>
              )}

              {/* Education */}
              {activeTab === "education" && (
                <div className="p-4 md:p-8">
                  <h2 className="text-lg text-primary mb-6 flex items-center gap-2">
                    <BiBookOpen className="text-primary" />
                    Formation & Parcours
                  </h2>

                  <div className="space-y-6">
                    {/* Education Level */}
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-3xl">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        <BiBookOpen className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">
                          Niveau d'études
                        </p>
                        <p className="font-semibold text-sm md:text-md text-gray-800">
                          {candidate.education?.title || "Non spécifié"}
                        </p>
                      </div>
                    </div>

                    {/* University */}
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-3xl">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        <BiUser className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">
                          Université / Établissement
                        </p>
                        <p className="font-semibold text-sm md:text-md text-gray-800">
                          {candidate.university?.title || "Non spécifié"}
                        </p>
                      </div>
                    </div>

                    {/* Experience Level */}
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-3xl">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        <BiBriefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">
                          Niveau d'expérience
                        </p>
                        <p className="font-semibold text-sm md:text-md text-gray-800">
                          {candidate.studyLevel?.title || "Non spécifié"}
                        </p>
                      </div>
                    </div>

                    {/* Bio */}
                    {candidate.bio && (
                      <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-3">
                          Biographie
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{ __html: candidate.bio }}
                          className="p-4 bg-gray-50 rounded-xl text-gray-600 leading-relaxed"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Skills */}
              {activeTab === "skills" && (
                <div className="p-4 md:p-8">
                  <h2 className="text-lg text-primary mb-6 flex items-center gap-2">
                    <BiCog className="text-primary" />
                    Compétences & Expertises
                  </h2>

                  {/* Technical Skills */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-700 mb-4">
                      Compétences techniques
                    </h3>
                    {candidate.competences &&
                    candidate.competences.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {candidate.competences.map((comp, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-medium hover:bg-indigo-100 transition-colors cursor-default"
                          >
                            {comp.title}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 italic">
                        Aucune compétence spécifiée
                      </p>
                    )}
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-4">
                      Langues
                    </h3>
                    {candidate.languages && candidate.languages.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {candidate.languages.map((lang, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-green-50 text-green-700 rounded-xl text-sm font-medium flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            {lang.title}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 italic">
                        Aucune langue spécifiée
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Preferences */}
              {activeTab === "preferences" && (
                <div className="p-4 md:p-8">
                  <h2 className="text-lg text-primary mb-6 flex items-center gap-2">
                    <BiGlobe className="text-primary" />
                    Préférences de recherche
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PreferenceCard
                      icon={BiMap}
                      label="Département souhaité"
                      value={candidate.department?.title}
                    />
                    <PreferenceCard
                      icon={BiBriefcase}
                      label="Secteur d'activité"
                      value={candidate.sector?.title}
                    />
                    <PreferenceCard
                      icon={BiIdCard}
                      label="Préférence salariale"
                      value={candidate.salary?.title}
                      fullWidth
                    />
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Améliorez vos chances
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Complétez votre profil pour être visible par les
                          recruteurs
                        </p>
                      </div>
                      <Link
                        href="/candidate/profile/edit"
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition"
                      >
                        Compléter
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white rounded-3xl p-4">
              <h3 className="font-bold text-gray-800 mb-4">Activité</h3>

              <div className="space-y-4">
                <StatRow
                  icon={BiBriefcase}
                  label="Candidatures"
                  value={candidate.applications_count || 0}
                  color="bg-primary"
                />
                <StatRow
                  icon={BiUserCheck}
                  label="Emplois sauvegardés"
                  value={candidate.saved_jobs_count || 0}
                  color="bg-primary"
                />
                <StatRow
                  icon={BiFile}
                  label="Documents"
                  value={candidate.documents_count || 0}
                  color="bg-primary"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Profil complété</span>
                  <span className="text-sm font-bold text-primary">
                    {completionRate}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${completionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Profile Completion Tips */}
            {completionRate < 100 && (
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <BiCog className="text-orange-500" />
                  Complétez votre profil
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {!candidate.bio && (
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                      Ajoutez une biographie
                    </li>
                  )}
                  {!candidate.competences?.length && (
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                      Listez vos compétences
                    </li>
                  )}
                  {!candidate.profile_photo?.trim() && (
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                      Ajoutez une photo de profil
                    </li>
                  )}
                </ul>
                <Link
                  href="/candidate/profile/edit"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                >
                  Compléter maintenant
                  <BiLinkExternal className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Member Since */}
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">Membre depuis</p>
              <p className="font-semibold text-gray-800">
                {new Date().toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component: Info Card
function InfoCard({ icon: Icon, label, value, fullWidth = false }) {
  return (
    <div
      className={`flex items-start gap-3 p-3 bg-gray-50 rounded-3xl ${fullWidth ? "md:col-span-2" : ""}`}
    >
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500 mb-1">
          {label}
        </p>
        <p className="text-sm md:text-md font-bold text-gray-800 truncate">
          {value || <span className="text-gray-400 italic">Non spécifié</span>}
        </p>
      </div>
    </div>
  );
}

// Component: Preference Card
function PreferenceCard({ icon: Icon, label, value, fullWidth = false }) {
  return (
    <div
      className={`flex items-center gap-4 p-3 border border-gray-100 rounded-xl hover:border-primary/30 transition-colors ${fullWidth ? "md:col-span-2" : ""}`}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className="font-semibold text-sm md:text-md text-gray-800">
          {value || (
            <span className="text-gray-400 font-normal">Non spécifié</span>
          )}
        </p>
      </div>
    </div>
  );
}

// Component: Stat Row
function StatRow({ icon: Icon, label, value, color }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-3xl">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white shadow-sm`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-medium text-gray-700 text-sm">{label}</span>
      </div>
      <span className="px-3 py-1 bg-white text-gray-800 font-bold rounded-lg shadow-sm text-sm">
        {value}
      </span>
    </div>
  );
}
