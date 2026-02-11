"use client";
import Image from "next/image";
import Link from "next/link";
import { BiTime, BiMap, BiBriefcase } from "react-icons/bi";

export default function JobCard({
  id = 1,
  banner = "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
  logo = "https://i.pravatar.cc/60",
  company = "Entreprise",
  title = "Titre du poste",
  type = "Temps plein",
  location = "Port-au-Prince",
  salary = "À discuter",
  posted = "À l'instant",
}) {
  return (
    <Link
      href={`/jobs/${id}`}
      className="group flex flex-col bg-white overflow-hidden rounded-3xl hover:border-primary transition border border-transparent"
    >
      {/* Bannière */}
      <div className="relative h-40 w-full rounded-t-2xl overflow-hidden">
        <Image
          src={banner}
          alt={`bannière ${company}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex gap-2 items-center">
          <Image width={10} height={10} alt="Jwennjob-Logo" src="https://jwennjob.com/assets/j-logo.png" />
          <p className="text-xs text-secondary font-medium">{company}</p>
        </div>

        <h3 className="text-lg text-primary font-medium mt-2 group-hover:text-primary transition">
          {title}
        </h3>

        {/* Méta */}
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-400">
          <p className="flex items-center gap-1">
            <BiBriefcase className="text-primary" />
            {type}
          </p>
          <p className="flex items-center gap-1">
            <BiMap className="text-primary" />
            {location}
          </p>
          <p className="flex items-center gap-1">
            <BiTime className="text-primary" />
            {posted}
          </p>
        </div>

        {/* Salaire + CTA */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">{salary}</span>
          <span className="text-primary text-sm font-medium group-hover:underline">
            Voir l&rsquo;offre →
          </span>
        </div>
      </div>
    </Link>
  );
}
