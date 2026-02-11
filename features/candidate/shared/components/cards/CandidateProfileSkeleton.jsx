"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProfileSkeleton() {
  return (
    <div>
      {/* Breadcrumb Skeleton */}
      <div className="flex items-center gap-2 my-4">
        <Skeleton width={60} height={16} />
        <span className="text-gray-400">/</span>
        <Skeleton width={80} height={16} />
      </div>

      {/* Header Banner Skeleton */}
      <div className="bg-gray-200 mt-4 mb-6 w-full rounded-[2rem] py-5 px-5">
        <div className="flex items-center justify-between">
          <div className="space-y-2 w-full max-w-md">
            <Skeleton height={32} width="80%" className="rounded-lg" />
            <Skeleton height={16} width="90%" className="rounded-lg" />
            <Skeleton height={16} width="60%" className="rounded-lg" />
          </div>
          <Skeleton width={230} height={230} className="rounded-2xl" />
        </div>
      </div>

      <div className="relative gap-3 grid grid-cols-1 md:grid-cols-3">
        {/* Sidebar Skeleton */}
        <div className="col-span-1">
          <div className="bg-white rounded-3xl p-4">
            {/* Avatar et nom */}
            <div className="flex gap-1 mt-4 flex-col items-center justify-center w-full">
              <Skeleton circle width={80} height={80} />
              <Skeleton width={140} height={20} className="mt-2" />
              <Skeleton width={100} height={14} className="mt-1" />
            </div>

            {/* Stats */}
            <div className="mt-6 space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex px-4 md:px-6 items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Skeleton circle width={16} height={16} />
                    <Skeleton width={80} height={14} />
                  </div>
                  <Skeleton width={32} height={20} className="rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white rounded-3xl p-6">
            {/* Tabs Skeleton */}
            <div className="overflow-y-auto">
              <div className="flex space-x-2 w-fit bg-white p-1">
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

            {/* Alert Skeleton */}
            <div className="mt-8 mb-4">
              <Skeleton height={40} className="rounded-xl" />
            </div>

            {/* Form Fields Skeleton */}
            <div className="mt-8 space-y-4">
              <div className="flex gap-3 w-full flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 w-full max-w-md"
                  >
                    <Skeleton width={120} height={16} />
                    <Skeleton height={48} className="rounded-2xl" />
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button Skeleton */}
            <div className="mt-8 flex justify-end">
              <Skeleton width={140} height={36} className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}