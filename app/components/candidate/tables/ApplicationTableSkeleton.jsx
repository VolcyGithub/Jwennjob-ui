"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ApplicationTableSkeleton = () => {
  // Générer 5 lignes de skeleton
  const rows = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[800px] md:w-full border-separate border-spacing-y-[15px] text-left text-sm text-gray-700">
          {/* HEAD SKELETON */}
          <thead>
            <tr className="text-xs font-bold text-gray-900">
              <th className="px-4"><Skeleton width={60} height={14} /></th>
              <th className="px-4"><Skeleton width={80} height={14} /></th>
              <th className="px-4"><Skeleton width={50} height={14} /></th>
              <th className="px-4"><Skeleton width={40} height={14} /></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((index) => (
              <tr key={index} className="rounded-xl text-xs bg-white transition-shadow">
                {/* POSTE SKELETON */}
                <td className="rounded-l-xl border-y border-l border-transparent px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Skeleton width={150} height={16} />
                  </div>
                </td>

                {/* ENTREPRISE SKELETON */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Skeleton circle width={32} height={32} />
                    <Skeleton width={120} height={16} />
                  </div>
                </td>

                {/* STATUT SKELETON */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <Skeleton width={80} height={24} className="rounded-full" />
                </td>

                {/* DATE SKELETON */}
                <td className="rounded-r-xl border-y border-r border-transparent px-4 py-3 whitespace-nowrap">
                  <Skeleton width={80} height={14} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationTableSkeleton;