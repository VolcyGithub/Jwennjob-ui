"use client";

import "slim-select/styles";
import Image from "next/image";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SlimSelect from "slim-select/react";
import {
  BiBookOpen,
  BiBriefcase,
  BiCalendar,
  BiCheckCircle,
  BiCog,
  BiEnvelope,
  BiFile,
  BiGlobe,
  BiIdCard,
  BiMap,
  BiPhone,
  BiUser,
  BiUserCheck,
  BiX,
  BiBuilding,
  BiMoney,
  BiFlag,
} from "react-icons/bi";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import { useCandidateAuth } from "@/app/lib/contexts/CandidateContext";
import CandidateProfileSkeleton from "@/components/recruiter/cards/CandidateProfileSkeleton";
import { useFilters } from "@/app/lib/api/hooks/queries/useFilters";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function Index() {
  const { candidate, isLoading } = useCandidateAuth();
  const { data: filters, isLoading: isLoadingFilters } = useFilters();

  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    birth_date: "",
    gender: "",
    nif: "",
    salary_id: "",
    education_id: "",
    study_level_id: "",
    department_id: "",
    sector_id: "",
    university_id: "",
    commune_id: "",
  });

  const [techSkills, setTechSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (candidate && filters) {
      const communeObj = filters.communes?.find((c) => c.title === candidate.commune);
      const educationObj = filters.experienceLevels?.find((e) => e.title === candidate.education);
      const universityObj = filters.universities?.find((u) => u.title === candidate.university);
      const studyLevelObj = filters.experienceLevels?.find((s) => s.title === candidate.studyLevel);
      const salaryObj = filters.salaries?.find((s) => s.title === candidate.salary);

      setFormData({
        first_name: candidate.first_name || "",
        last_name: candidate.last_name || "",
        email: candidate.email || "",
        phone: candidate.phone || "",
        address: candidate.address || "",
        bio: candidate.bio || "",
        birth_date: candidate.birth_date || "",
        gender: candidate.gender || "",
        nif: candidate.nif || "",
        salary_id: salaryObj?.id?.toString() || "",
        education_id: educationObj?.id?.toString() || "",
        study_level_id: studyLevelObj?.id?.toString() || "",
        department_id: candidate.department?.id?.toString() || "",
        sector_id: candidate.sector?.id?.toString() || "",
        university_id: universityObj?.id?.toString() || "",
        commune_id: communeObj?.id?.toString() || "",
      });

      if (candidate.competences) {
        setTechSkills(candidate.competences.map((c) => c.id.toString()));
      }

      if (candidate.languages) {
        setLanguages(candidate.languages.map((l) => l.id.toString()));
      }
    }
  }, [candidate, filters]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBioChange = (value) => {
    setFormData((prev) => ({ ...prev, bio: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      birth_date: formData.birth_date,
      gender: formData.gender,
      nif: formData.nif,
      commune_id: formData.commune_id ? parseInt(formData.commune_id) : null,
      education_id: formData.education_id ? parseInt(formData.education_id) : null,
      university_id: formData.university_id ? parseInt(formData.university_id) : null,
      study_level_id: formData.study_level_id ? parseInt(formData.study_level_id) : null,
      bio: formData.bio,
      competences: techSkills.map((id) => parseInt(id)),
      languages: languages.map((id) => parseInt(id)),
      department_id: formData.department_id ? parseInt(formData.department_id) : null,
      sector_id: formData.sector_id ? parseInt(formData.sector_id) : null,
      salary_id: formData.salary_id ? parseInt(formData.salary_id) : null,
    };

    console.log("Données à envoyer:", dataToSend);
    console.log("JSON:", JSON.stringify(dataToSend, null, 2));

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  if (isLoading || isLoadingFilters) {
    return <CandidateProfileSkeleton />;
  }

  if (!candidate || !filters) {
    return (
      <div className="p-8 text-center text-red-500">
        Erreur lors du chargement du profil
      </div>
    );
  }

  return (
    <div>
      <BreadCrumb items={[{ label: "Accueil", href: "/" }, { label: "Profil" }]} />

      {/* Header */}
      <div className="bg-primary mt-4 mb-6 text-white w-full rounded-[2rem] py-5 px-5">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-md md:text-4xl">
              <span className="text-white/75">Modifier votre </span> profil
            </h1>
            <p className="text-white/60 max-md:line-clamp-2 mb-3 text-xs md:text-sm leading-relaxed">
              Mettez à jour vos informations pour augmenter vos chances de trouver l'emploi idéal.
            </p>
          </div>
          <div>
            <Image width="230" height="230" className="max-w-full h-auto" src="/svgs/Forms-amico.png" alt="" />
          </div>
        </div>
      </div>

      <div className="relative gap-3 grid grid-cols-1 md:grid-cols-3">
        {/* Sidebar */}
        <div className="col-span-1">
          <div className="bg-white rounded-3xl p-4">
            <div className="flex gap-1 mt-4 flex-col items-center justify-center w-full">
              <div className="relative">
                <Image
                  width={80}
                  height={80}
                  className="size-14 md:size-20 rounded-full object-cover"
                  src={candidate.profile_photo?.trim() || "https://jwennjob.com/img/non-profile.png"}
                  alt={candidate.name}
                />
                <button className="absolute bottom-0 right-0 bg-secondary text-white p-1.5 rounded-full hover:bg-secondary/80 transition">
                  <BiUser className="w-3 h-3" />
                </button>
              </div>
              <span className="text-primary text-md font-semibold">{candidate.name}</span>
              <span className="text-gray-500 text-xs">{candidate.sector?.title || "Secteur non spécifié"}</span>
              <span className="text-gray-400 text-[10px] mt-1">{candidate.department?.title || "Département non spécifié"}</span>
            </div>

            <div className="flex my-4 px-4 md:px-6 items-center justify-between">
              <div className="flex text-xs text-primary items-center gap-2">
                <BiBriefcase className="size-4 text-secondary" />
                <span className="font-bold">Applications</span>
              </div>
              <span className="px-[8px] text-xs text-white font-bold py-1 bg-secondary rounded-full">{candidate.applications_count || 0}</span>
            </div>
            <div className="flex my-4 px-4 md:px-6 items-center justify-between">
              <div className="flex text-xs text-primary items-center gap-2">
                <BiUserCheck className="size-4 text-secondary" />
                <span className="font-bold">Sauvegardes</span>
              </div>
              <span className="px-[8px] text-xs text-white font-bold py-1 bg-secondary rounded-full">{candidate.saved_jobs_count || 0}</span>
            </div>
            <div className="flex my-4 px-4 md:px-6 items-center justify-between">
              <div className="flex text-xs text-primary items-center gap-2">
                <BiFile className="size-4 text-secondary" />
                <span className="font-bold">Documents</span>
              </div>
              <span className="px-[8px] text-xs text-white font-bold py-1 bg-secondary rounded-full">{candidate.documents_count || 0}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white rounded-3xl p-6">
            {/* Tabs */}
            <div className="overflow-y-auto">
              <div className="flex space-x-2 w-fit md:w-full bg-white p-1 border border-gray-400/50 rounded-full text-xs">
                {[
                  { id: "personal", icon: BiUser, label: "Informations personnelles" },
                  { id: "education", icon: BiBookOpen, label: "Formation" },
                  { id: "skills", icon: BiCog, label: "Compétences" },
                  { id: "preferences", icon: BiGlobe, label: "Préférences" },
                ].map((tab) => (
                  <div key={tab.id} className="flex items-center">
                    <input
                      type="radio"
                      name="options"
                      id={tab.id}
                      className="hidden peer"
                      checked={activeTab === tab.id}
                      onChange={() => setActiveTab(tab.id)}
                    />
                    <label
                      htmlFor={tab.id}
                      className="cursor-pointer font-bold flex gap-1 items-center text-nowrap rounded-full py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-secondary/20 peer-checked:text-primary"
                    >
                      <tab.icon className="size-4" />
                      {tab.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Alert */}
            {showSuccess && (
              <div className="flex items-center justify-between rounded-xl mt-8 mb-4 text-green-600 w-full bg-green-50 h-10">
                <div className="flex w-full h-10 gap-2 items-center">
                  <div className="h-full w-1.5 bg-green-500 rounded-l-xl"></div>
                  <div className="flex items-center">
                    <BiCheckCircle />
                    <p className="text-sm ml-2">Profil mis à jour avec succès !</p>
                  </div>
                </div>
                <button type="button" onClick={() => setShowSuccess(false)} className="active:scale-90 transition-all mr-3">
                  <BiX />
                </button>
              </div>
            )}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="mt-8 mb-2">
              {/* ONGLET 1: INFORMATIONS PERSONNELLES */}
              {activeTab === "personal" && (
                <section className="personal-info">
                  <div className="flex gap-3 w-full flex-wrap">
                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label htmlFor="first_name" className="text-sm font-bold text-gray-700">Prénom</label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <BiUser className="text-gray-400 ml-2" />
                        <input id="first_name" name="first_name" value={formData.first_name} onChange={handleInputChange} className="px-2 w-full h-full outline-none text-gray-700 bg-transparent" type="text" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label htmlFor="last_name" className="text-sm font-bold text-gray-700">Nom</label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <BiUser className="text-gray-400 ml-2" />
                        <input id="last_name" name="last_name" value={formData.last_name} onChange={handleInputChange} className="px-2 w-full h-full outline-none text-gray-700 bg-transparent" type="text" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <BiEnvelope className="text-gray-400 ml-2" />
                        <input id="email" name="email" value={formData.email} onChange={handleInputChange} className="px-2 w-full h-full outline-none text-gray-700 bg-transparent" type="email" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700">Téléphone</label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <BiPhone className="text-gray-400 ml-2" />
                        <input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="px-2 w-full h-full outline-none text-gray-700 bg-transparent" type="tel" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label htmlFor="address" className="text-sm font-bold text-gray-700">Adresse</label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <BiMap className="text-gray-400 ml-2" />
                        <input id="address" name="address" value={formData.address} onChange={handleInputChange} className="px-2 w-full h-full outline-none text-gray-700 bg-transparent" type="text" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label className="text-sm font-bold text-gray-700">Commune</label>
                      <SlimSelect
                        value={formData.commune_id ? [formData.commune_id] : []}
                        onChange={(values) => setFormData((prev) => ({ ...prev, commune_id: values[0] || "" }))}
                        placeholder="Sélectionnez votre commune"
                      >
                        {filters.communes?.map((comm) => (
                          <option key={comm.id} value={comm.id}>{comm.title}</option>
                        ))}
                      </SlimSelect>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label htmlFor="birth_date" className="text-sm font-bold text-gray-700">Date de naissance</label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <BiCalendar className="text-gray-400 ml-2" />
                        <input id="birth_date" name="birth_date" value={formData.birth_date} onChange={handleInputChange} className="px-2 w-full h-full outline-none text-gray-700 bg-transparent" type="date" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label htmlFor="gender" className="text-sm font-bold text-gray-700">Genre</label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <BiFlag className="text-gray-400 ml-2" />
                        <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} className="px-2 w-full h-full outline-none text-gray-700 bg-transparent">
                          <option value="">Sélectionnez</option>
                          {filters.sexes?.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label htmlFor="nif" className="text-sm font-bold text-gray-700">NIF</label>
                      <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded-2xl border-gray-500/30">
                        <BiIdCard className="text-gray-400 ml-2" />
                        <input id="nif" name="nif" value={formData.nif} onChange={handleInputChange} className="px-2 w-full h-full outline-none text-gray-700 bg-transparent" type="text" />
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* ONGLET 2: FORMATION */}
              {activeTab === "education" && (
                <section className="education">
                  <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Niveau d'étude</label>
                      <SlimSelect
                        value={formData.education_id ? [formData.education_id] : []}
                        onChange={(values) => setFormData((prev) => ({ ...prev, education_id: values[0] || "" }))}
                        placeholder="Sélectionnez"
                      >
                        {filters.experienceLevels?.map((level) => (
                          <option key={level.id} value={level.id}>{level.title}</option>
                        ))}
                      </SlimSelect>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Université / Établissement</label>
                      <SlimSelect
                        value={formData.university_id ? [formData.university_id] : []}
                        onChange={(values) => setFormData((prev) => ({ ...prev, university_id: values[0] || "" }))}
                        placeholder="Sélectionnez votre université"
                      >
                        {filters.universities?.map((uni) => (
                          <option key={uni.id} value={uni.id}>{uni.title}</option>
                        ))}
                      </SlimSelect>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Niveau d'expérience</label>
                      <SlimSelect
                        value={formData.study_level_id ? [formData.study_level_id] : []}
                        onChange={(values) => setFormData((prev) => ({ ...prev, study_level_id: values[0] || "" }))}
                        placeholder="Sélectionnez"
                      >
                        {filters.experienceLevels?.map((level) => (
                          <option key={level.id} value={level.id}>{level.title}</option>
                        ))}
                      </SlimSelect>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="bio" className="text-sm font-bold text-gray-700">Biographie</label>
                      <div className="quill-wrapper">
                        <ReactQuill
                          theme="snow"
                          value={formData.bio}
                          onChange={handleBioChange}
                          className="bg-white rounded-2xl"
                          style={{ height: "200px", marginBottom: "50px" }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* ONGLET 3: COMPÉTENCES */}
              {activeTab === "skills" && (
                <section className="skills">
                  <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Compétences techniques</label>
                      <SlimSelect
                        value={techSkills}
                        onChange={setTechSkills}
                        multiple
                        placeholder="Sélectionnez vos compétences"
                      >
                        {filters.competences?.map((comp) => (
                          <option key={comp.id} value={comp.id}>{comp.title}</option>
                        ))}
                      </SlimSelect>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Langues</label>
                      <SlimSelect
                        value={languages}
                        onChange={setLanguages}
                        multiple
                        placeholder="Sélectionnez les langues"
                      >
                        {filters.languages?.map((lang) => (
                          <option key={lang.id} value={lang.id}>{lang.title}</option>
                        ))}
                      </SlimSelect>
                    </div>
                  </div>
                </section>
              )}

              {/* ONGLET 4: PRÉFÉRENCES */}
              {activeTab === "preferences" && (
                <section className="preferences">
                  <div className="flex gap-3 w-full flex-wrap">
                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label className="text-sm font-bold text-gray-700">Département</label>
                      <SlimSelect
                        value={formData.department_id ? [formData.department_id] : []}
                        onChange={(values) => setFormData((prev) => ({ ...prev, department_id: values[0] || "" }))}
                        placeholder="Sélectionnez"
                      >
                        {filters.departments?.map((dept) => (
                          <option key={dept.id} value={dept.id}>{dept.title}</option>
                        ))}
                      </SlimSelect>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label className="text-sm font-bold text-gray-700">Secteur d'activité</label>
                      <SlimSelect
                        value={formData.sector_id ? [formData.sector_id] : []}
                        onChange={(values) => setFormData((prev) => ({ ...prev, sector_id: values[0] || "" }))}
                        placeholder="Sélectionnez"
                      >
                        {filters.sectors?.map((sector) => (
                          <option key={sector.id} value={sector.id}>{sector.title}</option>
                        ))}
                      </SlimSelect>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label className="text-sm font-bold text-gray-700">Type de contrat préféré</label>
                      <SlimSelect placeholder="Sélectionnez">
                        {filters.contracts?.map((contract) => (
                          <option key={contract.id} value={contract.id}>{contract.title}</option>
                        ))}
                      </SlimSelect>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-md">
                      <label className="text-sm font-bold text-gray-700">Préférence salariale</label>
                      <SlimSelect
                        value={formData.salary_id ? [formData.salary_id] : []}
                        onChange={(values) => setFormData((prev) => ({ ...prev, salary_id: values[0] || "" }))}
                        placeholder="Sélectionnez une fourchette"
                      >
                        {filters.salaries?.map((sal) => (
                          <option key={sal.id} value={sal.id}>{sal.title}</option>
                        ))}
                      </SlimSelect>
                    </div>
                  </div>
                </section>
              )}

              {/* Bouton */}
              <div className="mt-8 flex justify-end">
                <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enregistrement...
                    </>
                  ) : (
                    "Enregistrer les modifications"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}