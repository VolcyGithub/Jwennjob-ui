import Image from "next/image";
import Link from "next/link";
import {
  BiShow,
  BiHide,
  BiEdit,
  BiTrash,
  BiPause,
  BiPlay,
  BiCalendar,
  BiTime,
  BiUser,
  BiCheckCircle,
  BiXCircle,
  BiMap,
} from "react-icons/bi";

const fakeJobs = [
  {
    id: 1,
    title: "Développeur Full-Stack React / Node",
    ref: "FS-24-06-001",
    type: "CDI",
    location: "Port-au-Prince",
    visibility: "Publique",
    applications: 23,
    status: "Actif",
    publishedAt: "2025-06-15",
    expiresAt: "2025-07-15",
    logo: "https://i.pravatar.cc/40?u=alpha",
  },
  {
    id: 2,
    title: "Designer UX/UI",
    ref: "UX-24-06-002",
    type: "CDD 6 mois",
    location: "À distance",
    visibility: "Privée",
    applications: 8,
    status: "Actif",
    publishedAt: "2025-06-10",
    expiresAt: "2025-07-10",
    logo: "https://i.pravatar.cc/40?u=beta",
  },
  {
    id: 3,
    title: "Stagiaire Marketing Digital",
    ref: "MK-24-06-003",
    type: "Stage",
    location: "Pétion-Ville",
    visibility: "Publique",
    applications: 45,
    status: "Clôturé",
    publishedAt: "2025-05-20",
    expiresAt: "2025-06-20",
    logo: "https://i.pravatar.cc/40?u=gama",
  },
];

const statusColors = {
  Actif: "bg-green-100 text-green-700",
  Clôturé: "bg-gray-100 text-gray-700",
  En_pause: "bg-orange-100 text-orange-700",
};

const visibilityColors = {
  Publique: "bg-blue-100 text-blue-700",
  Privée: "bg-purple-100 text-purple-700",
};

export default function Jobs() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[1000px] md:w-full border-separate border-spacing-y-[15px] text-left text-sm text-gray-700">
          {/* HEAD */}
          <thead>
            <tr className="text-xs font-bold text-gray-900">
              <th className="px-4">Poste</th>
              <th className="px-4">Réf.</th>
              <th className="px-4">Type</th>
              <th className="px-4">Lieu</th>
              <th className="px-4">Visibilité</th>
              <th className="px-4">Candidatures</th>
              <th className="px-4">Statut</th>
              <th className="px-4">Expire le</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {fakeJobs.map((j) => (
              <tr
                key={j.id}
                className="rounded-xl text-xs bg-white transition-shadow"
              >
                {/* POSTE + LOGO */}
                <td className="rounded-l-xl border-y border-l border-transparent px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      width={32}
                      height={32}
                      className="size-8 rounded-full object-cover"
                      src={j.logo}
                      alt={`${j.ref} logo`}
                    />
                    <div>
                      <div className="font-medium text-gray-900 whitespace-nowrap">
                        {j.title}
                      </div>
                      <div className="text-[10px] text-gray-500">{j.ref}</div>
                    </div>
                  </div>
                </td>

                {/* RÉF */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap text-gray-600">
                  {j.ref}
                </td>

                {/* TYPE */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap text-gray-600">
                  {j.type}
                </td>

                {/* LIEU */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap text-gray-600">
                  <div className="flex items-center gap-1">
                    <BiMap className="text-gray-400" />
                    {j.location}
                  </div>
                </td>

                {/* VISIBILITÉ */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${visibilityColors[j.visibility]}`}
                  >
                    {j.visibility}
                  </span>
                </td>

                {/* CANDIDATURES */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1 text-gray-700">
                    <BiUser className="text-sm" />
                    {j.applications}
                  </div>
                </td>

                {/* STATUT */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[j.status]}`}
                  >
                    {j.status}
                  </span>
                </td>

                {/* EXPIRATION */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap text-gray-600">
                  <div className="flex items-center gap-1">
                    <BiCalendar className="text-gray-400" />
                    {j.expiresAt}
                  </div>
                </td>

                {/* ACTIONS */}
                <td className="rounded-r-xl border-y border-r border-transparent px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-lg text-gray-500">
                    <Link
                      href="/recruiter/jobs/edit/1"
                      title="Voir l'offre"
                      className="hover:text-blue-600 transition"
                    >
                      <BiShow />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}