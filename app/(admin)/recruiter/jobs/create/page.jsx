"use client";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import SlimSelect from "slim-select/react";
import "slim-select/styles";
import "../../../../globals.css";
import InfoAlert from "@/app/components/recruiter/alerts/InfoAlert";

export default function CreateJob() {
  /* données fictives pour les selects */
  const countries = ["Haïti", "France", "Canada", "États-Unis"];
  const cities = [
    "Port-au-Prince",
    "Carrefour",
    "Delmas",
    "Pétion-Ville",
    "À distance",
  ];
  const levels = [
    "Baccalauréat",
    "Licence",
    "Master",
    "Doctorat",
    "Autodidacte",
  ];
  const contractTypes = ["CDI", "CDD", "Stage", "Freelance", "Temps partiel"];
  const salaryRanges = ["0-30 k", "30-60 k", "60-100 k", "100 k+"];
  const skills = [
    "React",
    "Node",
    "Python",
    "Figma",
    "AWS",
    "Docker",
    "GraphQL",
  ];

  /* helper */
  const buildOpts = (arr, placeholder) => [
    { placeholder: true, text: placeholder },
    ...arr.map((t) => ({ text: t, value: t })),
  ];

  return (
    <div>
      {/* breadcrumb */}
      <BreadCrumb
        items={[
          { label: "Accueil", href: "/recruiter" },
          { label: "Publier un emploi" },
        ]}
      />

      {/* contenu */}
      <div className="w-full">
        <h1 className="text-2xl font-bold text-primary my-6">
          Publier un emploi
        </h1>

        <InfoAlert title="Recommendations JwennJob">
          <span className="text-gray-600">
            Lorsque vous postez une offre d'emploi sur JwennJob, nous signalons
            automatiquement des candidats potentiels du même secteur afin
            d'accélérer votre recrutement. <br /> Remplissez tous les champs
            pour maximiser la visibilité de votre offre dans les recherches.
            Merci pour votre compréhension !
          </span>
        </InfoAlert>

        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            {/* -------- Section 1 : Infos générales -------- */}
            <Section title="Informations générales">
              <Input
                label="Titre du poste"
                placeholder="ex. Développeur Full-Stack"
              />
              <TextArea
                label="Description du poste"
                placeholder="Décrivez les missions, responsabilités…"
                rows={5}
              />
              <TextArea
                label="Profil recherché"
                placeholder="Compétences, qualités, expérience…"
                rows={4}
              />
            </Section>
            {/* -------- Section 3 : Niveau & Contrat -------- */}
            <Section title="Niveau et contrat">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Niveau d’étude requis"
                  options={levels}
                  placeholder="Choisir un niveau"
                />
                <Select
                  label="Type de contrat"
                  options={contractTypes}
                  placeholder="Choisir un contrat"
                />
              </div>
              <Select
                label="Fourchette salariale"
                options={salaryRanges}
                placeholder="Choisir une fourchette"
              />
            </Section>
          </div>
          <div className="col-span-1">
            {/* -------- Section 2 : Localisation -------- */}
            <Section title="Localisation">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Pays"
                  options={countries}
                  placeholder="Sélectionner un pays"
                />
                <Select
                  label="Ville"
                  options={cities}
                  placeholder="Sélectionner une ville"
                />
              </div>
              <Input
                label="Adresse complète"
                placeholder="Rue, numéro, immeuble…"
              />
            </Section>
            {/* -------- Section 4 : Compétences -------- */}
            <Section title="Compétences souhaitées">
              <Select
                label="Pays"
                options={skills}
                simple={false}
                placeholder="Sélectionner une compétence"
              />
            </Section>
            {/* -------- Section 5 : Bio entreprise -------- */}
            <Section title="À propos de l’entreprise">
              <TextArea
                label="Brève présentation"
                placeholder="Présentez votre entreprise en quelques lignes…"
                rows={4}
              />
              <Input label="Site web" placeholder="https://www.exemple.com" />
            </Section>
          </div>
        </div>

        {/* -------- Actions -------- */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 rounded-full text-sm bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
            Annuler
          </button>
          <button className="px-6 py-2 rounded-full text-sm bg-primary text-white hover:bg-indigo-700 transition">
            Publier l’offre
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------- sous-composants ------------- */
function Section({ title, children }) {
  return (
    <div className="bg-white rounded-4xl p-6 mb-6">
      <h2 className="text-base font-semibold pb-2 border-b border-gray-200 text-primary mb-8">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium font-bold text-primary mb-3">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring focus:ring-primary"
      />
    </div>
  );
}

function TextArea({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-3">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring focus:ring-primary"
      />
    </div>
  );
}

function Select({ label, options, placeholder, simple = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-3">
        {label}
      </label>
      <div className="text-sm">
        <SlimSelect
          data={[
            { placeholder: true, text: placeholder },
            ...options.map((o) => ({ text: o, value: o })),
          ]}
          settings={{
            placeholderText: placeholder,
            allowDeselect: true,
            isMultiple: true,
          }}
        />
      </div>
    </div>
  );
}
