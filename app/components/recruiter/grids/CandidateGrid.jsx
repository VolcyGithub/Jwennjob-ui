"use client";

import CandidateCard from "../cards/CandidateCard";
import { motion, AnimatePresence } from "framer-motion";
import CandidateCardSkeleton from "@/app/components/recruiter/cards/CandidateCardSkeleton";
import { useRecruiterCandidtes } from "@/app/lib/api/hooks/queries/useRecruiters";
import ErrorState from "../../candidate/cards/CardError";
import Pagination from "../../public/Pagination";
import { useState } from "react";

export default function CandidateGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: response, isLoading, error, refetch } = useRecruiterCandidtes({ page: currentPage, per_page: 6 });

    const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= (jobs?.meta?.last_page || 1)) {
      setCurrentPage(pageNumber);
    }
  };

  // État de chargement
  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="col-span-1">
            <CandidateCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <ErrorState
        title="Impossible de charger les candidats"
        message="Une erreur est survenue lors du chargement de la liste des candidats."
        onRetry={refetch}
        showHome={false}
      />
    );
  }

  // Données vides ou structure incorrecte
  const candidates = response?.data || [];

  if (candidates.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
        <p className="text-gray-500 text-lg">Aucun candidat trouvé</p>
        <p className="text-gray-400 text-sm mt-2">
          Les candidats apparaîtront ici
        </p>
      </div>
    );
  }


  // Affichage des candidats
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {candidates.map((user) => (
          <CandidateCard
            key={user.id}
            data={{
              id: user.id,
              name: user.name,
              email: user.email,
              title: user.sector?.title || "Secteur non spécifié",
              avatar: user.profile_photo,
              location: user.address,
            }}
          />
        ))}
      </motion.div>
      {!isLoading && response?.meta?.last_page > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={response.meta.last_page}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
