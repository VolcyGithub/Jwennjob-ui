"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EnterpriseDetailSkeleton = () => {
  return (
    <main className="bg-third min-h-screen pb-80 font-sans text-gray-900">
      {/* BANNER SKELETON */}
      <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden">
        <Skeleton height={400} width="100%" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 py-8 relative top-60 md:top-75">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* COLONNE GAUCHE - CONTENU PRINCIPAL */}
          <div className="lg:col-span-8">
            
            {/* HEADER CARD SKELETON */}
            <div className="rounded-4xl p-8 shadow-sm bg-primary mb-16">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* LOGO SKELETON */}
                <div className="w-24 h-24 rounded-3xl shrink-0">
                  <Skeleton circle width={88} height={88} />
                </div>
                
                {/* INFO ENTREPRISE SKELETON */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="flex items-center gap-2">
                    <Skeleton width={250} height={36} />
                    <Skeleton circle width={24} height={24} />
                  </div>
                  <Skeleton width={150} height={20} />
                </div>
              </div>
            </div>

            {/* TABS SKELETON */}
            <div className="space-y-6">
              {/* TAB NAVIGATION */}
              <div className="flex gap-2 border-b border-gray-200 pb-4">
                <Skeleton width={120} height={40} className="rounded-full" />
                <Skeleton width={120} height={40} className="rounded-full" />
                <Skeleton width={120} height={40} className="rounded-full" />
              </div>

              {/* TAB CONTENT */}
              <div className="bg-white rounded-4xl p-8 space-y-6">
                <Skeleton width="60%" height={28} />
                <div className="space-y-3">
                  <Skeleton width="100%" height={16} />
                  <Skeleton width="100%" height={16} />
                  <Skeleton width="90%" height={16} />
                  <Skeleton width="95%" height={16} />
                  <Skeleton width="80%" height={16} />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <Skeleton height={120} className="rounded-2xl" />
                  <Skeleton height={120} className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE - SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6 sticky top-40 h-fit">
            
            {/* CHIFFRES CLÉS SKELETON */}
            <div className="bg-primary rounded-4xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-2 mb-8">
                <Skeleton width={32} height={4} className="rounded-full" />
                <Skeleton width={140} height={24} />
              </div>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-center gap-4">
                  <Skeleton circle width={48} height={48} />
                  <div className="space-y-2 flex-1">
                    <Skeleton width={80} height={12} />
                    <Skeleton width={120} height={16} />
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex items-center gap-4">
                  <Skeleton circle width={48} height={48} />
                  <div className="space-y-2 flex-1">
                    <Skeleton width={80} height={12} />
                    <Skeleton width={100} height={16} />
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex items-center gap-4">
                  <Skeleton circle width={48} height={48} />
                  <div className="space-y-2 flex-1">
                    <Skeleton width={80} height={12} />
                    <Skeleton width={140} height={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL & WEB SKELETON */}
            <div className="bg-white/50 rounded-4xl p-8">
              <Skeleton width={150} height={24} className="mb-6" />
              
              <div className="grid grid-cols-2 gap-3">
                <Skeleton height={44} className="rounded-4xl" />
                <Skeleton height={44} className="rounded-4xl" />
              </div>

              <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
                <Skeleton circle width={24} height={24} />
                <Skeleton circle width={24} height={24} />
                <Skeleton circle width={24} height={24} />
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
};

export default EnterpriseDetailSkeleton;