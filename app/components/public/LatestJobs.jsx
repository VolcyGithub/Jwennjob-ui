"use client";
import Image from "next/image";
import Link from "next/link";
import TitleHead from "./TitleHead";
import JobCard from "@/app/components/public/card/Jobcard";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useJobs } from "@/app/lib/api/hooks/queries/useJobs";
import JobCardSkeleton from "./card/JobCardSkeleton";
import { AnimatePresence , motion } from "framer-motion";

export default function LatestJobs() {
  const { data: jobs, isLoading, error } = useJobs();

  return (
    <section
      className="px-4 md:px-16 lg:px-24 xl:px-32 py-16 third"
      id="jobs-section"
    >
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <TitleHead
          title="Offres en vedette"
          subtitle="Découvrez une sélection d'opportunités triées sur le volet pour vous."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
          <AnimatePresence mode="wait">
            {isLoading
              ? // --- LOADING STATE ---
                [1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <JobCardSkeleton />
                  </motion.div>
                ))
              : // --- ACTUAL CONTENT ---
                jobs.data.slice(0,6).map((j, index) => (
                  <motion.div
                    key={j.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <JobCard job={j} />
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            <IoBriefcaseOutline className="text-lg" />
            Toutes les offres
          </Link>
        </div>
      </div>
    </section>
  );
}
