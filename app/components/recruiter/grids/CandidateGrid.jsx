"use client";
import CandidateCard from "../cards/CandidateCard";
import { motion, AnimatePresence } from "framer-motion";
import { useFilterUsers, useUsers } from "@/app/lib/api/hooks/queries/useUsers";
import CandidateCardSkeleton from "@/app/components/recruiter/cards/CandidateCardSkeleton";

export default function CandidateGrid() {

  const { data, isLoading, error } = useUsers({limit : "9"});

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="skeleton-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="col-span-1">
                <CandidateCardSkeleton />
              </div>
            ))}
          </div>
        </motion.div>

      ) : (
        
        <motion.div
          key="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.users.map((user) => (
              <CandidateCard data={{
                id : user.id,
                name : `${user.firstName} ${user.lastName}`,
                email : user.email,
                title : user.role.toUpperCase()
              }} key={user.id} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
