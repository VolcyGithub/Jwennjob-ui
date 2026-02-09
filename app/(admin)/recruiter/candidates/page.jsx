"use client";
import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import CandidateFilterBar from "@/app/components/recruiter/grids/CandidateFilter";
import CandidateGrid from "@/app/components/recruiter/grids/CandidateGrid";
import {
  BiBuilding, BiCog, BiGlobe, BiMap, BiSolidGraduation,
  BiMoney, BiBriefcase, BiMaleFemale, BiBook, BiHome,
} from "react-icons/bi";

const FILTERS_CONFIG = [
  { key: "department", title: "Départements", icon: BiMap, dataKey: "departments" },
  { key: "commune", title: "Communes", icon: BiHome, dataKey: "communes" },
  { key: "sector", title: "Secteurs", icon: BiBuilding, dataKey: "sectors" },
  { key: "university", title: "Universités", icon: BiSolidGraduation, dataKey: "universities" },
  { key: "competences", title: "Compétences", icon: BiCog, dataKey: "competences", multiple: true },
  { key: "langues", title: "Langues", icon: BiGlobe, dataKey: "languages", multiple: true },
  { key: "experience", title: "Expérience", icon: BiBriefcase, dataKey: "experienceLevels" },
  { key: "contract", title: "Contrats", icon: BiBook, dataKey: "contracts" },
  { key: "salary", title: "Salaires", icon: BiMoney, dataKey: "salaries" },
  { key: "gender", title: "Genre", icon: BiMaleFemale, dataKey: "sexes" },
];

// Vérifie si des filtres sont actifs
const hasActiveFilters = (filters) => {
  return Object.values(filters).some(v => 
    v !== "" && v !== null && v?.length !== 0
  );
};

export default function Index() {
  const [activeFilters, setActiveFilters] = useState({});

  return (
    <SkeletonTheme baseColor="#e7e8ea" highlightColor="#ffffff">
      <div>
        <BreadCrumb
          items={[
            { label: "Accueil", href: "/recruiter" },
            { label: "Recherche" },
          ]}
        />

        <div className="my-6 gap-4 grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1">
            <CandidateFilterBar 
              configFilters={FILTERS_CONFIG}
              onApply={setActiveFilters}
            />
          </div>
          
          <div className="col-span-1 md:col-span-3">
            {hasActiveFilters(activeFilters) ? (
              <CandidateGrid filters={activeFilters} />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

// État vide quand aucun filtre
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] bg-white rounded-3xl border border-dashed border-gray-300">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Recherchez des candidats
      </h3>
      <p className="text-gray-500 text-center max-w-sm">
        Utilisez les filtres à gauche pour trouver les candidats qui correspondent à vos critères.
      </p>
    </div>
  );
}