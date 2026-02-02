import Skeleton from "react-loading-skeleton";


const JobCardSkeleton = () => (
  <div className="bg-white rounded-[2.5rem] p-6 border border-gray-100 h-full">
    <div className="flex justify-between items-start mb-6">
      <Skeleton width={64} height={64} borderRadius={16} />
      <Skeleton width={60} height={20} borderRadius={8} />
    </div>
    <div className="space-y-3">
      <Skeleton width="80%" height={24} />
      <Skeleton width="40%" height={16} />
      <div className="pt-4 space-y-2">
        <Skeleton width="50%" height={14} />
        <Skeleton width="60%" height={14} />
      </div>
    </div>
    <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center">
      <div className="flex -space-x-2">
        <Skeleton circle width={32} height={32} />
        <Skeleton circle width={32} height={32} />
      </div>
      <Skeleton width={80} height={20} />
    </div>
  </div>
);

export default JobCardSkeleton;