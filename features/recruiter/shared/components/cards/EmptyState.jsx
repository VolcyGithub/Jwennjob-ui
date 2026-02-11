import { BiSearch } from "react-icons/bi";

// État vide quand aucun filtre
export default function EmptyState({icon , title , text , height = "350px"}) {
  return (
    <div  className={`flex flex-col items-center  justify-center bg-white rounded-3xl h-[${height}]`}>
      <div className="text-5xl text-gray-600">{icon}</div>
      <h3 className="text-md font-semibold text-gray-600/70 mb-2">
        {title}
      </h3>
      <p className="text-gray-500/70 text-center text-sm">
        {text}
      </p>
    </div>
  );
}