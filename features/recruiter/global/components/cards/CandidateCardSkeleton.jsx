import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CandidateCardSkeleton() {
  return (
    <div className="w-full h-[350px] border-white transition cursor-pointer hover:border-primary bg-white rounded-4xl p-6 gap-4">
      <div className="flex relative w-full gap-6 items-center">
        {/* Avatar skeleton */}
        <Skeleton
          circle
          width={72}
          height={72}
          className="rounded-full object-cover"
        />

        <div className="space-y flex-1">
          <div className="flex gap-3 items-center">
            {/* Name skeleton */}
            <Skeleton width={120} height={20} />
          </div>

          {/* Title skeleton */}
          <Skeleton width={100} height={16} />

          {/* Location skeleton */}
          <div className="mt-2 flex gap-2 flex-wrap text-xs text-gray-400">
            <Skeleton width={80} height={14} />
          </div>
        </div>
      </div>

      <div className="flex mt-6 items-center gap-6">
        <div className="flex-1">
          <Skeleton width={100} height={14} />
          <div className="flex flex-wrap gap-2">
            {/* Skills skeletons */}
            {[1, 2, 3,5,6].map((i) => (
              <Skeleton key={i} width={60} height={15} borderRadius={9999} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 relative">
        {/* Profil button skeleton */}
        <div className="absolute flex gap-2 items-center bottom-2 right-0">
          <Skeleton width={80} height={28} borderRadius={9999} />
        </div>

       <Skeleton className="mb-4" width={100} height={14} />
        <div className="flex gap-4 items-center">
          {/* ProgressRing skeletons */}
          <Skeleton width={60} height={60} circle />
          <Skeleton width={60} height={60} circle />
        </div>
      </div>
    </div>
  );
}
