"use client";

import { motion } from "framer-motion";

import { useState } from "react";

import { BiInfoCircle } from "react-icons/bi";
import { useRecruiterCandidates } from "../../hooks/queries/useRecruiters";
import CandidateCardSkeleton from "../cards/CandidateCardSkeleton";
import ErrorState from "@/features/candidate/shared/components/cards/CardError";
import EmptyState from "../cards/EmptyState";
import CandidateCard from "../cards/CandidateCard";
import Pagination from "@/components/paginations/Pagination";

export default function CandidateGrid({ filters }) {
  const [page, setPage] = useState(1);

  const {
    data: candidates,
    isLoading,
    error,
    refetch,
  } = useRecruiterCandidates({
    page,
    per_page: 6,
    ...filters,
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
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

  if (candidates.data.length === 0) {
    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="col-span-3">
          <EmptyState
            title={`0 Resultats`}
            text={`Aucun résultat pour cette recherche`}
            icon={<BiInfoCircle />}
            height="700px"
          />
        </div>
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
