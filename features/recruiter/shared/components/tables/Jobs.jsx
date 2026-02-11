import Image from "next/image";
import Link from "next/link";
import {
  BiShow,
  BiMap,
  BiUser,
  BiCalendar,
  BiBuilding,
  BiBook,
  BiDollar,
  BiTime,
  BiEdit,
  BiTrash,
} from "react-icons/bi";

// Mapping des couleurs pour le niveau d'expérience
const experienceColors = {
  "3-5 ans": "bg-secondary/10 font-bold text-primary",
};

export default function Jobs({ jobs = [] }) {
  // Fonction pour formater la date
  const formatDate = (dateString) => {
    if (!dateString) return "Non spécifié";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Fonction pour vérifier si l'offre est expirée
  const isExpired = (deadline) => {
    if (!deadline) return false;
    return new Date(deadline) < new Date();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[1000px] md:w-full border-separate border-spacing-y-[15px] text-left text-sm text-gray-700">
          {/* HEAD */}
          <thead>
            <tr className="text-xs font-bold text-gray-900">
              <th className="px-4">Poste</th>
              <th className="px-4">Secteur</th>
              <th className="px-4">Contrat</th>
              <th className="px-4">Expérience</th>
              <th className="px-4">Langues</th>
              <th className="px-4">Candidatures</th>
              <th className="px-4">Statut</th>
              <th className="px-4">Date limite</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="rounded-xl text-xs bg-white transition-shadow"
              >
                {/* POSTE */}
                <td className="rounded-l-xl border-y border-l border-transparent px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                      {job.title.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 whitespace-nowrap max-w-[200px] truncate">
                        {job.title}
                      </div>
                      <div className="text-[10px] text-gray-500 flex items-center gap-1">
                        <BiDollar className="text-gray-400" />
                        {job.salary || "Salaire non précisé"}
                      </div>
                    </div>
                  </div>
                </td>

                {/* SECTEUR */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium
                      bg-primary/10 text-primary
                    }`}
                  >
                    {job.sector}
                  </span>
                </td>

                {/* CONTRAT */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap text-gray-600">
                  <div className="flex items-center gap-1">
                    <BiTime className="text-gray-400" />
                    {job.contract}
                  </div>
                </td>

                {/* EXPÉRIENCE */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium
                      bg-gray-100 text-gray-700
                    }`}
                  >
                    {job.experience_level}
                  </span>
                </td>

                {/* LANGUES */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {job.langues?.map((langue) => (
                      <span
                        key={langue.id}
                        className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700"
                      >
                        {langue.title}
                      </span>
                    )) || <span className="text-gray-400">-</span>}
                  </div>
                </td>

                {/* CANDIDATURES */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <Link href={`/recruiter/jobs/${job.id}/applications`}>
                    <div className="flex items-center border border-white w-fit px-2 py-1 rounded-3xl hover:bg-primary hover:text-white hover:border-primary gap-1 text-gray-700">
                      <BiUser className="text-sm" />
                      <span>{job.applications_count}</span>
                    </div>
                  </Link>
                </td>

                {/* STATUT (basé sur la date limite) */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isExpired(job.deadline)
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {isExpired(job.deadline) ? "Expirée" : "Active"}
                  </span>
                </td>

                {/* DATE LIMITE */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap text-gray-600">
                  <div className={`flex items-center gap-1`}>
                    <BiCalendar />
                    {formatDate(job.deadline)}
                  </div>
                </td>

                {/* ACTIONS */}
                <td className="rounded-r-xl border-y border-r border-transparent px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-lg text-gray-500">
                    <Link
                      href={`/jobs/${job.id}`}
                      title="Voir l'offre"
                      className="hover:text-blue-600 transition p-1 hover:bg-blue-50 rounded"
                    >
                      <BiShow />
                    </Link>
                    <button
                      title="Modifier"
                      className="hover:text-green-600 transition p-1 hover:bg-green-50 rounded"
                    >
                      <BiEdit className="text-base" />
                    </button>
                    <button
                      title="Supprimer"
                      className="hover:text-red-600 transition p-1 hover:bg-red-50 rounded"
                    >
                      <BiTrash className="text-base" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {jobs.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <BiBuilding className="mx-auto text-4xl mb-3 text-gray-300" />
            <p className="text-sm">Aucune offre d'emploi trouvée</p>
          </div>
        )}
      </div>
    </div>
  );
}
