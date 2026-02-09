import Image from "next/image";
import Link from "next/link";
import {
  BiCheckCircle,
  BiXCircle,
  BiUser,
  BiCalendar,
  BiFile,
  BiMap,
  BiBuilding,
  BiEnvelope,
  BiPhone,
  BiIdCard,
  BiBook,
  BiDollar,
} from "react-icons/bi";

// Mapping des couleurs pour le statut de candidature
const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  accepted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  null: "bg-gray-100 text-gray-600",
};

const statusLabels = {
  pending: "En attente",
  accepted: "Accepté",
  rejected: "Refusé",
  null: "Nouveau",
};

export default function Applications({ applications = [] }) {
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

  // Fonction pour obtenir le statut formaté
  const getStatus = (status) => {
    if (!status) return "null";
    return status.toLowerCase();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[1200px] md:w-full border-separate border-spacing-y-[15px] text-left text-sm text-gray-700">
          {/* HEAD */}
          <thead>
            <tr className="text-xs font-bold text-gray-900">
              <th className="px-4">Candidat</th>
              <th className="px-4">Contact</th>
              <th className="px-4">Localisation</th>
              <th className="px-4">Formation</th>
              <th className="px-4">Documents</th>
              <th className="px-4">Statut</th>
              <th className="px-4">Postulé le</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => {
              const candidate = app.candidate;

              const statusKey = getStatus(app.status);

              return (
                <tr
                  key={app.id}
                  className="rounded-xl text-xs bg-white border border-transparent hover:border-gray-200"
                >
                  {/* CANDIDAT */}
                  <td className="rounded-l-xl border-y border-l border-transparent px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-sm`}
                      >
                        {candidate.first_name?.charAt(0).toUpperCase()}
                        {candidate.last_name?.charAt(0).toUpperCase()}
                      </div>

                      <div className="space-y-1">
                        <div className="font-medium text-gray-900 whitespace-nowrap">
                          {candidate.name}
                        </div>
                        <div className="text-[10px] text-gray-500 flex items-center gap-1">
                          <BiUser className="text-gray-400" />
                          {candidate.gender}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* CONTACT */}
                  <td className="border-y border-transparent px-4 py-3">
                    <div className="flex flex-col gap-1">
                      <a
                        href={`mailto:${candidate.email}`}
                        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition"
                        title={candidate.email}
                      >
                        <BiEnvelope className="text-gray-400 flex-shrink-0" />
                        <span className="truncate max-w-[120px]">
                          {candidate.email}
                        </span>
                      </a>
                    </div>
                  </td>

                  {/* LOCALISATION */}
                  <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1">
                        <BiMap />
                        <span className="truncate max-w-[150px]">
                          {candidate.address}
                        </span>
                      </div>
                      <div className="flex items-center w-fit bg-secondary/10 rounded-3xl  px-2 py-1 gap-1 text-[10px] text-primary">
                        <BiBuilding className="text-gray-400" />
                        {candidate.department?.title || "Non spécifié"}
                      </div>
                    </div>
                  </td>

                  {/* FORMATION */}
                  <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center  rounded-3xl gap-1 ">
                        <BiBook className="text-gray-400" />
                        <span>{candidate.education || "Non spécifié"}</span>
                      </div>
                      <div className="text-[10px] w-fit bg-secondary/10 rounded-3xl  px-2 py-1 gap-1 text-primary">
                        {candidate.sector?.title || "Secteur non défini"}
                      </div>
                    </div>
                  </td>

                  {/* DOCUMENTS */}
                  <td className="border-y border-transparent px-4 py-3 whitespace-nowrap text-center">
                    <div className="flex items-center justify-center gap-1">
                      <BiFile
                        className={
                          candidate.documents_count > 0
                            ? "text-green-500"
                            : "text-gray-300"
                        }
                      />
                      <span
                        className={`font-medium ${candidate.documents_count > 0 ? "text-green-600" : "text-gray-400"}`}
                      >
                        {candidate.documents_count}
                      </span>
                    </div>
                    <div className="text-[10px] text-gray-400">
                      {candidate.documents_count === 1
                        ? "document"
                        : "documents"}
                    </div>
                  </td>

                  {/* STATUT CANDIDATURE */}
                  <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[statusKey]}`}
                    >
                      {statusLabels[statusKey]}
                    </span>
                  </td>

                  {/* DATE DE POSTULATION */}
                  <td className="border-y border-transparent px-4 py-3 whitespace-nowrap text-gray-600">
                    <div className="flex items-center gap-1">
                      <BiCalendar className="text-gray-400" />
                      {formatDate(app.applied_at)}
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="rounded-r-xl border-y border-r border-transparent px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Link
                        href={`/recruiter/candidates/${candidate.id}`}
                        className="p-2 hover:bg-blue-50 rounded-lg text-gray-500 hover:text-blue-600 transition"
                        title="Voir le profil complet"
                      >
                        <BiUser className="text-lg" />
                      </Link>
                      <button
                        className="p-2 hover:bg-green-50 rounded-lg text-gray-500 hover:text-green-600 transition"
                        title="Accepter"
                      >
                        <BiCheckCircle className="text-lg" />
                      </button>
                      <button
                        className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600 transition"
                        title="Refuser"
                      >
                        <BiXCircle className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {applications.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <BiUser className="mx-auto text-4xl mb-3 text-gray-300" />
            <p className="text-sm">Aucune candidature reçue</p>
          </div>
        )}
      </div>
    </div>
  );
}
