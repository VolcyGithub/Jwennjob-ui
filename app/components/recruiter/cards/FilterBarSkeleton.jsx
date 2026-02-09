"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FilterBarSkeleton() {
  return (
    <div className="w-full shadow-sm bg-white rounded-4xl p-6 h-[780px] overflow-y-auto">
      <div className="h-fit">
        {/* Header */}
        <div className="flex items-center border-b border-gray-200 pb-2 justify-between mb-10">
          <Skeleton width={60} height={20} borderRadius={4} />
          <Skeleton width={80} height={28} borderRadius={9999} />
        </div>

        {/* Localisation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton width={100} height={16} borderRadius={4} />
          </div>
          <Skeleton height={38} borderRadius={6} />
        </div>

        {/* Niveau d'étude */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton width={100} height={16} borderRadius={4} />
          </div>
          <Skeleton height={38} borderRadius={6} />
        </div>

        {/* Université */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton width={80} height={16} borderRadius={4} />
          </div>
          <Skeleton height={38} borderRadius={6} />
        </div>

        {/* Compétences */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton width={90} height={16} borderRadius={4} />
          </div>
          <Skeleton height={38} borderRadius={6} />
        </div>

        {/* Langues */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton width={70} height={16} borderRadius={4} />
          </div>
          <Skeleton height={38} borderRadius={6} />
        </div>

        {/* Expérience */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton width={80} height={16} borderRadius={4} />
          </div>
          <Skeleton height={38} borderRadius={6} />
        </div>

        {/* Type de contrat */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton width={110} height={16} borderRadius={4} />
          </div>
          <Skeleton height={38} borderRadius={6} />
        </div>

        {/* Fourchette salaire */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton width={130} height={16} borderRadius={4} />
          </div>
          <Skeleton height={38} borderRadius={6} />
        </div>
      </div>
    </div>
  );
}