import Skeleton from "react-loading-skeleton";


export default function JobCardSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-4xl h-full">
      {/* Banner */}
      <div className="relative h-52 w-full rounded-4xl overflow-hidden mb-6">
        <Skeleton height={208} containerClassName="h-full w-full block" />
      </div>

      <div className="flex-1 px-6">
        {/* Title */}
        <div className="mb-4">
          <Skeleton height={28} width="85%" />
        </div>

        {/* Info rows */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton height={16} width="60%" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton height={16} width="40%" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton circle width={16} height={16} />
            <Skeleton height={16} width="50%" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mb-6 px-6">
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <Skeleton circle width={40} height={40} />
          <div className="space-y-1">
            <Skeleton height={14} width={80} />
            <Skeleton height={12} width={60} />
          </div>
        </div>

        <Skeleton height={20} width={90} />
      </div>
    </div>
  );
}