"use client";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import JobSavedTableSkeleton from "@/app/components/candidate/tables/JobSavedTableSkeleton";
import { useCandidateJobSaved } from "@/app/lib/api/hooks/queries/useCandidates";
import formatDate from "@/app/lib/utils/functions/DateFormat";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaTrash } from "react-icons/fa";

export default function Index() {
  const { data: savedJobs, isLoading, error } = useCandidateJobSaved();

  if (isLoading) {
    return <JobSavedTableSkeleton />;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Erreur lors du chargement des emplois enregistrés
      </div>
    );
  }

  if (!savedJobs?.data || savedJobs.data.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 bg-white rounded-xl">
        Vous n'avez pas encore enregistré d'offres d'emploi
      </div>
    );
  }

  console.log(savedJobs);

  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Emplois sauvegardés" },
        ]}
      />
      <div className="flex my-4 justify-between w-full items-center">
        <span className="text-primary text-2xl">Emplois sauvegardés</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-[800px] md:w-full border-separate border-spacing-y-[15px] text-left text-sm text-gray-700">
          {/* HEAD */}
          <thead>
            <tr className="text-xs font-bold text-gray-500">
              <th className="px-4">Poste</th>
              <th className="px-4">Entreprise</th>
              <th className="px-4">Type</th>
              <th className="px-4">Enregistré le</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {savedJobs.data.map((job) => {
              return (
                <tr
                  key={job.id}
                  className="rounded-xl text-xs bg-white border hover:border-primary transition-colors"
                >
                  {/* POSTE */}
                  <td className="rounded-l-xl px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <Link
                        href={`/jobs/${job?.id}`}
                        className="font-semibold text-primary whitespace-nowrap hover:underline"
                      >
                        {job?.title || "Poste inconnu"}
                      </Link>
                      <span className="text-gray-400 text-[10px]">
                        {job?.location || job?.recruiter?.adresse || "Haïti"}
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
                          job?.recruiter?.photo ||
                          "https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp"
                        }
                        alt={job?.recruiter?.nom || "Entreprise"}
                      />
                      <span className="font-medium text-gray-700 whitespace-nowrap">
                        {job?.recruiter?.nom || "Entreprise inconnue"}
                      </span>
                    </div>
                  </td>

                  {/* TYPE DE CONTRAT */}
                  <td className="border-y border-gray-100 px-4 py-4 whitespace-nowrap">
                    <span className="rounded-full px-3 py-1.5 text-xs font-semibold bg-secondary/10 text-primary">
                      {job?.contract  || "Non précisé"}
                    </span>
                  </td>

                  {/* DATE D'ENREGISTREMENT */}
                  <td className="border-y border-gray-100 px-4 py-4 whitespace-nowrap text-gray-600">
                    {formatDate(job.created_at)}
                  </td>

                  {/* ACTIONS */}
                  <td className="rounded-r-xl border-y border-r border-gray-100 px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/jobs/${job?.id}`}
                        className="p-2 text-gray-400 hover:text-primary transition-colors"
                        title="Voir l'offre"
                      >
                        <FaExternalLinkAlt size={14} />
                      </Link>
                      <button
                        onClick={() => remove(job.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        title="Retirer des favoris"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
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
