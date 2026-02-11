import Image from "next/image";
import { BiDotsVertical, BiDotsVerticalRounded } from "react-icons/bi";

export default function FileCard({ file }) {
  return (
    <div className="group relative bg-white rounded-3xl  duration-200 border border-gray-100 p-4 w-full">
      
      <div className="w-full flex text-gray-500 text-xs mb-6 justify-between items-center">
          <span>{file.size}</span>
          <BiDotsVerticalRounded className="text-lg"/>
      </div>

      {/* Icône type fichier */}
      <div className="w-full rounded-lg flex items-center justify-center mb-3">
          <Image width={40} height={40} className="size-20" alt="Jwennjob-File" src="/svgs/pdf-svgrepo-com (1).svg"/>
      </div>

      {/* Nom du fichier */}
      <h3 className="font-semibold text-center text-gray-900 text-sm truncate mb-1">
        {file.title}
      </h3>

      {/* Info secondaire */}
      <p className="text-xs capitalize text-center text-gray-500 mb-3">
         {file.type}
      </p>

    </div>
  );
}