"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import JobCard from "@/app/components/public/card/Jobcard";
import {
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import JobCardSkeleton from "@/app/components/public/card/JobCardSkeleton";
import { useJobs } from "@/app/lib/api/hooks/queries/useJobs";

const jobs = [
  {
    id: 1,
    title: "Manager Communication",
    company: "Kolabo",
    location: "Paris",
    type: "CDD",
    sector: "Marketing & Communication",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "45 k€ - 55 k€",
    logo: "https://i.pravatar.cc/60?u=kol",
  },
  {
    id: 2,
    title: "Stage - Product Marketing",
    company: "SunBox",
    location: "Lyon",
    type: "Stage",
    sector: "Marketing & Communication",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "1 200 € / mois",
    logo: "https://i.pravatar.cc/60?u=sun",
  },
  {
    id: 3,
    title: "Corporate - H/F",
    company: "PayAyiti",
    location: "Remote",
    type: "CDI",
    sector: "Finance & Comptabilité",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "60 k€ - 70 k€",
    logo: "https://i.pravatar.cc/60?u=pay",
  },
  {
    id: 4,
    title: "Corporate - H/F",
    company: "PayAyiti",
    location: "Remote",
    type: "CDI",
    sector: "Finance & Comptabilité",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "60 k€ - 70 k€",
    logo: "https://i.pravatar.cc/60?u=pay",
  },
  {
    id: 5,
    title: "Corporate - H/F",
    company: "PayAyiti",
    location: "Remote",
    type: "CDI",
    sector: "Finance & Comptabilité",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "60 k€ - 70 k€",
    logo: "https://i.pravatar.cc/60?u=pay",
  },
  {
    id: 6,
    title: "Corporate - H/F",
    company: "PayAyiti",
    location: "Remote",
    type: "CDI",
    sector: "Finance & Comptabilité",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "60 k€ - 70 k€",
    logo: "https://i.pravatar.cc/60?u=pay",
  },
  {
    id: 7,
    title: "Développeur Fullstack",
    company: "AlphaTech",
    location: "Pétion-Ville",
    type: "CDI",
    sector: "Tech",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "50k - 80k HTG",
    logo: "https://i.pravatar.cc/60?u=alpha",
  },
  {
    id: 8,
    title: "Designer UI/UX",
    company: "Creative Studio",
    location: "Remote",
    type: "Freelance",
    sector: "Design",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "1 000 € - 1 500 €",
    logo: "https://i.pravatar.cc/60?u=creative",
  },
];

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
  const { data: jobs, isLoading, error } = useJobs();

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

          {/* Pagination
          {!isLoading && totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="Page précédente"
              >
                <FiChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                      currentPage === number
                        ? "bg-primary text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {number}
                  </button>
                ),
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="Page suivante"
              >
                <FiChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )} */}

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
