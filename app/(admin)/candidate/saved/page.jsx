"use client";

import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import JobSavedTableSkeleton from "@/features/candidate/shared/components/tables/JobSavedTableSkeleton";
import Alert from "@/components/alerts/Alert";
import { useCandidateUnsave } from "@/app/lib/api/hooks/mutations/useCandidateAction";
import { useCandidateJobSaved } from "@/app/lib/api/hooks/queries/useCandidates";
import formatDate from "@/app/lib/utils/functions/DateFormat";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function Index() {
  const { data: savedJobs, isLoading, error, refetch } = useCandidateJobSaved();

  const {
    mutate: unsaveMutate,
    isPending: isUnsavePending,
    isSuccess: isUnsaveSuccess,
    isError: isUnsaveError,
    error: unSaveError,
  } = useCandidateUnsave();

  // ✅ État pour tracker quel job est en cours de suppression
  const [deletingJobId, setDeletingJobId] = useState(null);

  // ✅ Fonction pour retirer une sauvegarde
  const handleUnsave = (jobId) => {
    setDeletingJobId(jobId);
    
    unsaveMutate(jobId, {
      onSuccess: () => {
        refetch();
        setDeletingJobId(null); // Reset après succès
      },
      onError: () => {
        setDeletingJobId(null); // Reset même en cas d'erreur
      },
    });
  };

  const isDeleting = (jobId) => deletingJobId === jobId;
  const errorMessage = unSaveError?.response?.data?.message || 
    "Une erreur est survenue lors de la suppression.";

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

      {/* ✅ Alertes */}
      {isUnsaveSuccess && !deletingJobId && (
        <div className="mb-4">
          <Alert
            type="success"
            autoClose={true}
            autoCloseDelay={3000}
            title="Succès"
          >
            L'offre a été retirée de vos favoris.
          </Alert>
        </div>
      )}

      {isUnsaveError && !deletingJobId && (
        <div className="mb-4">
          <Alert
            type="danger"
            autoClose={true}
            autoCloseDelay={4000}
            title="Erreur"
          >
            {errorMessage}
          </Alert>
        </div>
      )}

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
                          job?.recruiter?.logo ||
                          "https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp "
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
                      {job?.contract || "Non précisé"}
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
                        onClick={() => handleUnsave(job.id)}
                        disabled={isDeleting(job.id)}
                        className="px-4 py-2 bg-red-500/10 text-red-500 rounded-full flex items-center gap-2 transition-colors disabled:opacity-50"
                        title="Retirer des favoris"
                      >
                        {isDeleting(job.id) ? ( 
                          <svg
                            className="animate-spin h-3 w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          <FaTrash size={10} />
                        )}
                        {isDeleting(job.id) ? "Suppression..." : "Retirer"} 
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