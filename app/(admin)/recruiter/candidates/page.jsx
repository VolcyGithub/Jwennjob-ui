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

        <div className="bg-primary mt-4 mb-8 text-white w-full rounded-[2rem] py-5 px-5">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-md md:text-4xl font-black">
                <span className="text-white">Rechercher le candidat idéal</span>
              </h1>
              <p className="text-white/60 max-md:line-clamp-2 mb-3 text-xs md:text-sm leading-relaxed">
                Trouve l'opportunité qui te correspond parmi des centaines
                d'offres d'emploi.
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
