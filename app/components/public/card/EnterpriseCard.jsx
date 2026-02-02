import Image from "next/image";
import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import { BiInfoCircle, BiMap } from "react-icons/bi";

export default function EnterpriseCard({ enterprise }) {
  return (
    <Link
      href={`/enterprises/${enterprise.id}`}
      className="group flex flex-col bg-white/50 rounded-4xl hover:border-primary transition-all duration-300 h-full border border-gray-100"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-4xl">
        <Image
          src={`https://jwennjob.com/${enterprise.banner}`}
          alt={enterprise.nom}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
          style={{ clipPath: "url(#clip)" }}
        />
      </div>

      <div className="px-5 -mt-8">
        <div className="relative top-[-2] flex justify-center items-center w-16 h-16 rounded-2xl border-2 border-third overflow-hidden shadow-sm bg-white">
          <Image
            src={enterprise.photo}
            alt={enterprise.nom}
            width={70}
            height={70}
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-5 flex-1 gap-3 flex flex-col">
        <h3 className="text-xl text-primary group-hover:text-secondary transition">
          {enterprise.nom}
        </h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2 flex items-center">
          <BiInfoCircle className="text-primary mr-1" />
          {enterprise.sector || "Indéfini"}
        </p>
        <div className="mt-4 space-y-1 text-xs text-gray-500">
          <p className="flex items-center gap-x-1 text-md">
            <FiUsers className="text-secondary" /> {enterprise.employees || "10 à 20"} employés
          </p>
          <p className="flex items-center gap-x-1 text-md">
            <BiMap className="text-secondary" /> {enterprise.adresse}
          </p>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 mt-4">
          <span className="text-primary text-sm font-medium">Voir le profil →</span>
        </div>
      </div>
    </Link>
  );
}