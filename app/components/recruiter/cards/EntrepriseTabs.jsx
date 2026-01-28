"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaRocket, FaBullseye } from "react-icons/fa";
import { IoBriefcase, IoLocation, IoPeople } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import MasonryGallery from "./MasonryGallery";

const tabs = ["Profil", "Équipe", "Jobs"];

export default function EnterpriseTabs({ company }) {
  const [activeTab, setActiveTab] = useState("Profil");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="space-y-8">
      {/*Animate Command */}
      <div className="flex gap-4 mb-6 border-b border-gray-200 relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 font-bold transition-all relative ${
              activeTab === tab ? "text-secondary" : "text-gray-500 hover:text-primary"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <SkeletonTheme baseColor="#f3f4f6" highlightColor="#ffffff">
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              // --- SKELETON ---
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="bg-white/50 rounded-4xl p-8 ">
                  <Skeleton width={200} height={30} className="mb-6" borderRadius={10} />
                  <Skeleton count={3} className="mb-3" />
                  <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <Skeleton height={150} borderRadius={24} />
                    <Skeleton height={150} borderRadius={24} />
                  </div>
                </div>
              </motion.div>
            ) : (
              // --- Real Content ---
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile*/}
                {activeTab === "Profil" && (
                  <div className="rounded-4xl bg-white/50 p-8">
                    <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-primary">
                      <span className="w-6 h-1 bg-secondary" /> Notre Histoire
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      "{company.description}"
                    </p>

                    <MasonryGallery/>

                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                      <div className="bg-white/50 p-6 rounded-3xl shadow-sm border border-gray-100">
                        <FaRocket className="text-secondary mb-4" size={28} />
                        <h3 className="font-bold text-lg mb-2 text-primary">Notre Vision</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{company.vision}</p>
                      </div>
                      <div className="bg-white/50 p-6 rounded-3xl shadow-sm border border-gray-100">
                        <FaBullseye className="text-secondary mb-4" size={28} />
                        <h3 className="font-bold text-lg mb-2 text-primary">Nos Valeurs</h3>
                        <div className="flex flex-wrap gap-2">
                          {company.values.map((v, i) => (
                            <span key={i} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-gray-100 tracking-wider">
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Team */}
                {activeTab === "Équipe" && (
                  <div className="bg-white/50 rounded-4xl p-8  text-center py-20">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IoPeople className="text-gray-400" size={40} />
                    </div>
                    <h2 className="text-2xl font-black text-primary mb-2">Rencontrez l'équipe</h2>
                    <p className="text-gray-500 max-w-sm mx-auto">
                        Découvrez les talents qui font battre le cœur de {company.name}.
                    </p>
                  </div>
                )}

                {/* JOBS */}
                {activeTab === "Jobs" && (
                  <div className="bg-white/50 rounded-4xl p-8 ">
                    <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                      <h2 className="text-2xl font-black text-primary">Offres d'emploi</h2>
                      <span className="bg-secondary/10 text-secondary px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest">
                        {company.jobsCount} postes ouverts
                      </span>
                    </div>
                    <div className="space-y-4">
                      {company.activeJobs.map((job) => (
                        <Link 
                            key={job.id} 
                            href={`/jobs/${job.id}`} 
                            className="group flex items-center justify-between p-6 border border-gray-100 rounded-[2rem] hover:border-secondary hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 bg-white/50"
                        >
                          <div>
                            <h4 className="font-bold text-primary group-hover:text-secondary transition-colors text-lg">
                              {job.title}
                            </h4>
                            <div className="flex gap-6 mt-2 text-sm text-gray-400 font-medium">
                              <span className="flex items-center gap-1.5"><IoBriefcase className="text-secondary" /> {job.type}</span>
                              <span className="flex items-center gap-1.5"><IoLocation className="text-secondary" /> {job.location}</span>
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                             <MdArrowForward size={24} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SkeletonTheme>
    </div>
  );
}