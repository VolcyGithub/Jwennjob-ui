"use client";

import { useCandidateApplications } from "@/app/lib/api/hooks/queries/useCandidates";
import Image from "next/image";
import ApplicationTableSkeleton from "./ApplicationTableSkeleton";
import formatDate from "@/app/lib/utils/functions/DateFormat";
import Link from "next/link";

const statusColors = {
  "En attente": "bg-secondary/10 text-primary",
  Accepté: "bg-green-100 text-green-700",
  Refusé: "bg-red-100 text-red-700",
};

export default function ApplicationTable() {
  
  const { data: applications, isLoading, error } = useCandidateApplications();

  if (isLoading) {
    return <ApplicationTableSkeleton />;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Erreur lors du chargement des candidatures
      </div>
    );
  }

  if (!applications?.data || applications.data.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        Aucune candidature trouvée
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[800px] md:w-full border-separate border-spacing-y-[15px] text-left text-sm text-gray-700">
          {/* HEAD */}
          <thead>
            <tr className="text-xs font-bold text-gray-500">
              <th className="px-4">Poste</th>
              <th className="px-4">Entreprise</th>
              <th className="px-4">Statut</th>
              <th className="px-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {applications.data.map((app) => {
              return (
                <tr
                  key={app.id}
                  className="rounded-xl text-xs bg-white border hover:border-primary"
                >
                  <td className="rounded-l-xl px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <Link
                        href={`/jobs/${app.job?.id}`}
                        className="font-semibold text-primary whitespace-nowrap hover:underline"
                      >
                        {app.job?.title || "Poste inconnu"}
                      </Link>
                      <span className="text-gray-400 text-[10px]">
                        {app.job?.location || app.job?.recruiter?.adresse || "Haïti"}
                      </span>
                    </div>
                  </td>

                  {/* ENTREPRISE */}
                  <td className="border-y border-gray-100 px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        className="size-10 rounded-full object-cover bg-gray-100"
                        src={
                          app.job?.recruiter?.logo ||
                          "https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp"
                        }
                        alt={app.job?.recruiter?.nom || "Entreprise"}
                      />
                      <span className="font-medium text-gray-700 whitespace-nowrap">
                        {app.job?.recruiter?.nom || "Entreprise inconnue"}
                      </span>
                    </div>
                  </td>

                  {/* STATUT */}
                  <td className="border-y border-gray-100 px-4 py-4 whitespace-nowrap">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusColors["En attente"]}`}
                    >
                      {app.status == null ? "En attente" : "Approuvé"}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="rounded-r-xl border-y border-r border-gray-100 px-4 py-4 whitespace-nowrap text-gray-600">
                    {formatDate(app.applied_at)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
