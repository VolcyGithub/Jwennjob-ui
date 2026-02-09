"use client";
import CandidateCard from "../cards/CandidateCard";
import { motion } from "framer-motion";
import CandidateCardSkeleton from "@/app/components/recruiter/cards/CandidateCardSkeleton";
import { useRecruiterCandidates } from "@/app/lib/api/hooks/queries/useRecruiters";
import ErrorState from "../../candidate/cards/CardError";
import Pagination from "../../public/Pagination";
import { useState } from "react";

export default function CandidateGrid({ filters }) {
  const [page, setPage] = useState(1);

  const { data : candidates, isLoading, error, refetch } = useRecruiterCandidates({
    page,
    per_page: 6,
    ...filters
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {[1,2,3,4,5,6].map(i => (
          <CandidateCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        title="Erreur de chargement"
        message="Impossible de charger les candidats"
        onRetry={refetch}
      />
    );
  }


  if (candidates.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
        <p className="text-gray-500 text-lg">Aucun candidat trouvé</p>
        <p className="text-gray-400 text-sm mt-2">
          Essayez d'autres critères de recherche
        </p>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {candidates.data.map((user) => (
          <CandidateCard
            key={user.id}
            data={{
              id: user.id,
              name: user.name,
              email: user.email,
              title: user.sector?.title || "Non spécifié",
              avatar: user.profile_photo,
              location: user.address,
            }}
          />
        ))}
      </motion.div>
      
      {candidates?.meta?.last_page > 1 && (
        <Pagination
          currentPage={page}
          totalPages={candidates.meta.last_page}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}