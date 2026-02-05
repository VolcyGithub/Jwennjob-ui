"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const JobDetailSkeleton = () => {
  return (
    <main className="bg-[#fdfdfd] min-h-screen pb-100 font-sans text-gray-900">
      {/* BANNER SKELETON */}
      <div className="absolute top-0 left-0 w-full h-[400px] 2xl:h-[500px] overflow-hidden">
        <Skeleton height={500} width="100%" />
      </div>

      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 py-8 relative top-32 md:top-90">
        <div className="grid lg:grid-cols-12 gap-10">

          {/* COLONNE GAUCHE - JOB DETAILS */}
          <div className="lg:col-span-8">
            
            {/* HEADER CARD SKELETON */}
            <div className="border border-gray-100 rounded-4xl p-6 shadow-sm mb-8 bg-white">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex-1 w-full">
                  
                  {/* COMPANY INFO SKELETON */}
                  <div className="flex items-center gap-3 mb-4">
                    <Skeleton circle width={48} height={48} />
                    <Skeleton width={120} height={16} />
                  </div>

                  {/* TITLE SKELETON */}
                  <Skeleton width="90%" height={40} className="mb-6" />

                  {/* JOB META SKELETON */}
                  <div className="flex flex-1 md:space-x-12 space-y-8 mb-6 flex-wrap md:flex-nowrap items-center">
                    <div className="space-y-3 w-full md:w-auto">
                      <Skeleton width={140} height={20} className="mb-4" />
                      <Skeleton width={180} height={16} />
                      <Skeleton width={200} height={16} />
                      <Skeleton width={160} height={16} />
                    </div>
                    
                    <div className="h-[150px] min-h-[1em] hidden md:block w-px bg-gray-200"></div>
                    
                    <div className="space-y-3 w-full md:w-auto">
                      <Skeleton width={160} height={20} className="mb-4" />
                      <Skeleton width={140} height={16} />
                      <Skeleton width={120} height={16} />
                      <Skeleton width={150} height={16} />
                    </div>
                  </div>

                  {/* BUTTONS SKELETON */}
                  <div className="flex gap-3 w-full md:w-auto shrink-0">
                    <Skeleton width={140} height={48} className="rounded-full" />
                    <Skeleton width={160} height={48} className="rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* DESCRIPTION SECTION SKELETON */}
            <div className="bg-[#f8f8f8] rounded-4xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-8">
                <Skeleton width={24} height={4} />
                <Skeleton width={120} height={28} />
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <Skeleton width={200} height={22} />
                  <Skeleton width="100%" height={16} />
                  <Skeleton width="100%" height={16} />
                  <Skeleton width="95%" height={16} />
                  <Skeleton width="98%" height={16} />
                  <Skeleton width="90%" height={16} />
                </div>
              </div>
            </div>

            {/* VIDEOS SECTION SKELETON */}
            <div className="bg-white rounded-4xl p-8 border border-gray-100">
              <Skeleton width={250} height={28} className="mb-8" />
              <div className="grid md:grid-cols-2 gap-6">
                <Skeleton height={200} className="rounded-4xl" />
                <Skeleton height={200} className="rounded-4xl" />
              </div>
            </div>
          </div>

          {/* COLONNE DROITE - SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6 sticky top-40 h-fit">
            
            {/* DISCOVER COMPANY SKELETON */}
            <div className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100">
              <Skeleton height={164} width="100%" />
              <div className="p-6 bg-primary">
                <Skeleton width={200} height={24} className="mb-4" />
                <Skeleton width="100%" height={40} className="mb-6" />
                <div className="flex flex-col gap-2">
                  <Skeleton height={44} className="rounded-full" />
                  <Skeleton height={44} className="rounded-full" />
                </div>
              </div>
            </div>

            {/* COMPANY INFO SKELETON */}
            <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <Skeleton width={32} height={4} />
                <Skeleton width={120} height={22} />
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <Skeleton width={40} height={40} className="rounded" />
                <Skeleton width={140} height={18} />
              </div>

              <div className="space-y-4 mb-8">
                <Skeleton width="80%" height={16} />
                <Skeleton width="60%" height={16} />
                <Skeleton width="70%" height={16} />
              </div>

              <div className="space-y-2">
                <Skeleton width={100} height={16} />
                <Skeleton width={140} height={16} />
              </div>
            </div>

            {/* BENEFITS SKELETON */}
            <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100">
              <Skeleton width={150} height={22} className="mb-6" />
              <div className="space-y-4">
                <Skeleton width="90%" height={16} />
                <Skeleton width="85%" height={16} />
                <Skeleton width="95%" height={16} />
                <Skeleton width="80%" height={16} />
              </div>
            </div>

            {/* SOCIAL ICONS SKELETON */}
            <div className="flex justify-center gap-6 py-4">
              <Skeleton circle width={22} height={22} />
              <Skeleton circle width={22} height={22} />
              <Skeleton circle width={22} height={22} />
              <Skeleton circle width={22} height={22} />
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
};

export default JobDetailSkeleton;