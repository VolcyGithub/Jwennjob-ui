import "react-loading-skeleton/dist/skeleton.css";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import CandidateFilterBar from "@/app/components/recruiter/grids/CandidateFilter";
import CandidateGrid from "@/app/components/recruiter/grids/CandidateGrid";

import Image from "next/image";
import { SkeletonTheme } from "react-loading-skeleton";


export default function Index() {

  return (
    <SkeletonTheme baseColor="#e7e8ea" highlightColor="#ffffff">
      <div>
        <BreadCrumb
          items={[
            { label: "Accueil", href: "/recruiter" },
            { label: "Recherche de candidat" },
          ]}
        />

        
        <div className="my-6 gap-4 grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1">
            <div className="sticky top-25">
              <CandidateFilterBar />
              {/* Boutons d'action */}
              <div className="mt-6 w-full space-y-3">
                <button
                  className="w-full bg-primary text-sm hover:bg-blue-700 text-white py-2 px-4 rounded-full font-medium transition"
                >
                  Appliquer les filtres
                </button>
                <button
                  className="w-full bg-gray-100 text-sm hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-full font-medium transition"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
             <CandidateGrid/>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
