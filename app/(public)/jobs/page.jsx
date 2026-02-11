"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import JobCard from "@/components/global/card/Jobcard";
import {
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import JobCardSkeleton from "@/components/global/card/JobCardSkeleton";
import { useJobs } from "@/app/lib/api/hooks/queries/useJobs";
import Pagination from "@/components/global/Pagination";

const popular = [
  "Communication",
  "Commercial",
  "Marketing",
  "Graphiste",
  "Data",
  "Product manager",
  "Développeur",
  "Finance",
];

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: jobs,
    isLoading,
    error,
  } = useJobs({ page: currentPage, per_page: 9 });

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= (jobs?.meta?.last_page || 1)) {
      setCurrentPage(pageNumber);
    }
  };

  console.log(jobs);

  return (
    <main className="bg-third min-h-screen pb-24">
      <SkeletonTheme baseColor="#f3f4f6" highlightColor="#ffffff">
        {/* HERO SECTION */}
        <div className="relative flex flex-col items-center py-8 justify-center m-2 md:m-4 lg:m-6 rounded-4xl text-sm px-4 md:px-16 lg:px-24 xl:px-32 bg-primary text-white min-h-[70vh] lg:min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 mt-18 text-center"
          >
            <h1 className="text-3xl 2xl:text-7xl leading-[50px] md:text-6xl md:leading-[95px] font-medium max-w-2xl md:max-w-6xl ">
              Trouvez le job qui vous <br />
              <span className="ms-3 bg-gradient-to-r from-primary to-secondary px-3 rounded-xl py-2 inline-block">
                ressemble vraiment.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-12 mt-6 group w-full max-w-4xl"
          >
            <div className="absolute inset-0 bg-secondary/5 rounded-[2.5rem] blur-2xl group-hover:bg-secondary/10 transition-all duration-500" />
            <div className="relative flex flex-col md:flex-row items-center gap-2 bg-third p-2 rounded-3xl md:rounded-full border border-gray-100 shadow-xl shadow-gray-200/20">
              <div className="flex items-center flex-1 w-full px-4 text-gray-700">
                <FiSearch className="text-gray-400 mr-3 text-xl" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Job, mot-clé ou entreprise..."
                  className="w-full py-4 bg-transparent outline-none font-medium"
                />
              </div>
              <div className="h-8 w-px bg-gray-100 hidden md:block" />
              <div className="flex items-center flex-1 w-full px-4 text-gray-700">
                <FiMapPin className="text-gray-400 mr-3 text-xl" />
                <input
                  type="text"
                  placeholder="Où ? (Haïti, Remote...)"
                  className="w-full py-4 bg-transparent outline-none font-medium"
                />
              </div>
              <div className="flex items-center flex-1 w-full px-4 text-gray-700 relative">
                <FiBriefcase className="text-gray-400 mr-3 text-xl" />
                <select
                  className="w-full py-4 bg-transparent outline-none font-medium appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Type de travail
                  </option>
                  <option value="CDI">CDI</option>
                  <option value="CDD">CDD</option>
                  <option value="Stage">Stage</option>
                  <option value="Alternance">Alternance</option>
                  <option value="Freelance">Freelance</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiChevronRight className="transform rotate-90" />
                </div>
              </div>
              <button className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-4xl md:rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95">
                Trouver
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:max-w-screen-2xl xl">
          <div className="py-8">
            <h3 className="text-2xl font-black text-primary mb-2 relative z-10">
              Offres d'emploi <span className="text-secondary">récentes</span>
            </h3>
            <span className="text-gray-500 text-sm block mb-4">
              Découvrez les dernières opportunités publiées sur JwennJob
            </span>
          </div>

          {/* GRILLE D'EMPLOIS (SKELETON OU CONTENU) */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {isLoading
                ? // --- LOADING STATE ---
                  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
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
                  jobs.data.map((j, index) => (
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

          {!isLoading && jobs?.meta?.last_page > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={jobs.meta.last_page}
              onPageChange={setCurrentPage}
            />
          )}

          {/* RECHERCHES POPULAIRES */}
          <div className="mt-24 bg-primary rounded-4xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-black text-white mb-2 relative z-10">
              Explorer par <span className="text-secondary">catégorie</span>
            </h3>
            <span className="text-white/80 text-sm block mb-4">
              Trouvez l'emploi qui vous correspond grâce à nos recherches les
              plus populaires
            </span>
            <div className="flex flex-wrap gap-3 relative z-10">
              {popular.map((p) => (
                <Link
                  key={p}
                  href={`/jobs?q=${p}`}
                  className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/5 rounded-4xl text-[10px] lg:text-[12px] md:font-semibold text-white hover:bg-secondary hover:text-white transition-all active:scale-95"
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>

          {/* SECTION "POURQUOI PAS VOUS ?" */}
          <div className="mt-24 bg-white rounded-4xl p-10 md:p-16 text-center">
            <div className="flex-col md:flex md:items-center lg:flex-row lg:items-start gap-8 lg:gap-16 justify-center">
              <Image
                src="/global/gif/Forgot-password.gif"
                alt="User"
                width={300}
                height={300}
              />
              <div className="block">
                <h3 className="text-3xl font-black text-primary mb-4">
                  Pourquoi pas vous ?
                </h3>
                <p className="text-gray-500 max-md:text-xs max-w-2xl mx-auto mb-8">
                  Des milliers de candidats ont déjà trouvé leur emploi idéal
                  grâce à JwennJob. Votre prochaine opportunité vous attend
                  peut-être déjà.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Link
                    href="/signup"
                    className="bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-secondary/90 transition-all active:scale-95"
                  >
                    Créer mon profil gratuit
                  </Link>
                  <Link
                    href="/enterprises"
                    className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-primary/90 transition-all active:scale-95"
                  >
                    Découvrir les entreprises
                  </Link>
                </div>
                <p className="mt-8 text-sm text-gray-500">
                  Déjà membre ?{" "}
                  <Link
                    href="/signin"
                    className="text-secondary hover:underline"
                  >
                    Connectez-vous
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </main>
  );
}
