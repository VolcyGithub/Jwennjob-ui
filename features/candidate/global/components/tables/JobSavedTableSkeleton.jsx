"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const JobSavedTableSkeleton = () => {
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
              <th className="px-4"><Skeleton width={40} height={14} /></th>
              <th className="px-4"><Skeleton width={80} height={14} /></th>
              <th className="px-4"><Skeleton width={50} height={14} /></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((index) => (
              <tr key={index} className="rounded-xl text-xs bg-white transition-shadow">
                {/* POSTE SKELETON */}
                <td className="rounded-l-xl px-4 py-4">
                  <div className="flex flex-col gap-2">
                    <Skeleton width={160} height={16} />
                    <Skeleton width={100} height={10} />
                  </div>
                </td>

                {/* ENTREPRISE SKELETON */}
                <td className="border-y border-gray-100 px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Skeleton circle width={40} height={40} />
                    <Skeleton width={130} height={16} />
                  </div>
                </td>

                {/* TYPE SKELETON */}
                <td className="border-y border-gray-100 px-4 py-4 whitespace-nowrap">
                  <Skeleton width={70} height={26} className="rounded-full" />
                </td>

                {/* DATE SKELETON */}
                <td className="border-y border-gray-100 px-4 py-4 whitespace-nowrap">
                  <Skeleton width={90} height={14} />
                </td>

                {/* ACTIONS SKELETON */}
                <td className="rounded-r-xl border-y border-r border-gray-100 px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Skeleton circle width={28} height={28} />
                    <Skeleton circle width={28} height={28} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobSavedTableSkeleton;