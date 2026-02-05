import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FileCardSkeleton() {
  return (
    <div className="group relative bg-white rounded-3xl duration-200 border border-gray-100 p-4 w-full">
      
      {/* Header : Taille + Menu */}
      <div className="w-full flex text-gray-500 text-xs mb-6 justify-between items-center">
        <Skeleton width={40} height={12} />
        <Skeleton circle width={20} height={20} />
      </div>

      {/* Icône fichier */}
      <div className="w-full rounded-lg flex items-center justify-center mb-3">
        <Skeleton circle width={80} height={80} />
      </div>

      {/* Nom du fichier */}
      <div className="flex justify-center mb-1">
        <Skeleton width="80%" height={16} />
      </div>

      {/* Date */}
      <div className="flex justify-center">
        <Skeleton width={60} height={12} />
      </div>

    </div>
  );
}