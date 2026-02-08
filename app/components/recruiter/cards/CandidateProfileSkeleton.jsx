"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CandidateProfileSkeleton() {
  return (
    <div>
      {/* BREADCRUMB SKELETON */}
      <div className="flex items-center gap-2 mb-4">
        <Skeleton width={60} height={14} />
        <Skeleton width={10} height={14} />
        <Skeleton width={70} height={14} />
        <Skeleton width={10} height={14} />
        <Skeleton width={120} height={14} />
      </div>

      {/* HEADER SKELETON */}
      <div className="flex my-4 w-full justify-between items-center">
        <Skeleton width={100} height={32} />
      </div>

      <div className="relative mt-4 gap-3 grid grid-cols-1 md:grid-cols-4">
        {/* COLONNE GAUCHE - CARTE RÉSUMÉ */}
        <div className="col-span-1">
          <div className="bg-white rounded-4xl p-10">
            <div className="flex flex-col items-center gap-3 w-full">
              {/* AVATAR SKELETON */}
              <Skeleton circle width={120} height={120} />
              
              <div className="flex flex-col gap-2 items-center w-full">
                <Skeleton width={150} height={24} />
                <Skeleton width={120} height={14} />
              </div>
            </div>

            {/* STATS PROGRESS RINGS SKELETON */}
            <div className="mt-6 relative">
              <Skeleton width={60} height={16} className="mx-auto mb-4" />
              <div className="flex justify-center gap-4 items-center">
                <Skeleton circle width={80} height={80} />
                <Skeleton circle width={80} height={80} />
              </div>
            </div>

            {/* INFOS GRID SKELETON */}
            <div className="grid mt-6 grid-cols-1 gap-4 text-sm">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i}>
                  <Skeleton width={80} height={12} className="mb-1" />
                  <Skeleton width="100%" height={18} />
                </div>
              ))}
            </div>

            {/* BOUTON TÉLÉCHARGER SKELETON */}
            <div className="mt-5">
              <Skeleton width={140} height={36} className="rounded-full" />
            </div>
          </div>
        </div>

        {/* COLONNE DROITE - ONGLETS */}
        <div className="col-span-1 md:col-span-3">
          <div className="bg-white rounded-3xl p-6">
            {/* TABS NAVIGATION SKELETON */}
            <div className="overflow-y-auto">
              <div className="flex space-x-2 w-fit md:w-full bg-white pb-2 border-b border-gray-200">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton 
                    key={i} 
                    width={120} 
                    height={36} 
                    className="rounded-full" 
                  />
                ))}
              </div>
            </div>

            {/* CONTENU TAB SKELETON */}
            <div className="mt-10 space-y-4">
              {/* Titres de section */}
              <Skeleton width="90%" height={16} />
              <Skeleton width="95%" height={16} />
              <Skeleton width="85%" height={16} />
              <Skeleton width="90%" height={16} />
              <Skeleton width="60%" height={16} />
              
              <div className="mt-6 space-y-3">
                <Skeleton width={100} height={14} />
                <div className="flex flex-wrap gap-2">
                  <Skeleton width={80} height={28} className="rounded-full" />
                  <Skeleton width={100} height={28} className="rounded-full" />
                  <Skeleton width={90} height={28} className="rounded-full" />
                  <Skeleton width={70} height={28} className="rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION DOCUMENTS SKELETON */}
          <div className="mt-4">
            <Skeleton width={120} height={24} className="mb-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 p-4">
                  <div className="flex justify-between mb-6">
                    <Skeleton width={30} height={12} />
                    <Skeleton circle width={20} height={20} />
                  </div>
                  <Skeleton circle width={80} height={80} className="mx-auto mb-3" />
                  <Skeleton width="80%" height={16} className="mx-auto mb-1" />
                  <Skeleton width="60%" height={12} className="mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
