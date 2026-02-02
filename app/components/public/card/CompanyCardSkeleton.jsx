import Skeleton from "react-loading-skeleton";

// --- COMPOSANT SKELETON ---
const CompanyCardSkeleton = () => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm h-full">
    <Skeleton height={140} />
    <div className="p-6 relative">
      <div className="absolute -top-10 left-6">
        <Skeleton circle width={64} height={64} />
      </div>
      <div className="mt-8 space-y-3">
        <Skeleton width="70%" height={24} />
        <Skeleton width="40%" height={16} />
        <div className="flex gap-4 pt-4">
          <Skeleton width={80} height={14} />
          <Skeleton width={80} height={14} />
        </div>
      </div>
    </div>
  </div>
);

export default CompanyCardSkeleton;