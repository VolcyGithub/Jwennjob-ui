"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FiSearch, FiMapPin, FiUsers, FiPlayCircle, FiCode, FiArrowRight } from "react-icons/fi";
import EnterpriseCard from "@/app/components/public/card/EnterpriseCard";
import CompanyCardSkeleton from "@/app/components/public/card/CompanyCardSkeleton";
import { useRecruiters } from "@/app/lib/api/hooks/queries/useRecruiters";


const companies = [
  {
    id: 1,
    sector: "fintech",
    name: "PayAyiti",
    teaser: "Paiements mobiles sans internet.",
    banner:
      "https://jwennjob.com/assets/dashboard/img/banner/file_17591697850.jpeg",
    logo: "https://i.pravatar.cc/60?u=pay",
    employees: "25-50",
    location: "Port-au-Prince",
  },
  {
    id: 2,
    sector: "collab",
    name: "Kolabo",
    teaser: "Location d'outils entre voisins.",
    banner:
      "https://jwennjob.com/assets/dashboard/img/banner/file_17591697850.jpeg",
    logo: "https://i.pravatar.cc/60?u=kol",
    employees: "10-25",
    location: "Delmas",
  },
  {
    id: 3,
    sector: "energy",
    name: "SunBox",
    teaser: " Kits solaires abordables.",
    banner:
      "https://jwennjob.com/assets/dashboard/img/banner/file_17591697850.jpeg",
    logo: "https://i.pravatar.cc/60?u=sun",
    employees: "50-100",
    location: "Carrefour",
  },
  {
    id: 4,
    sector: "media",
    name: "JwennNews",
    teaser: "L'actualité en temps réel.",
    banner:
      "https://jwennjob.com/assets/dashboard/img/banner/file_17591697850.jpeg",
    logo: "https://i.pravatar.cc/60?u=news",
    employees: "5-10",
    location: "Pétion-Ville",
  },
];


export default function EnterprisesPage() {

  const {data : recruiters , isLoading , error} = useRecruiters();

  return (
    <main className="bg-third min-h-screen pb-24">
      <SkeletonTheme baseColor="#f3f4f6" highlightColor="#ffffff">
        
        {/* HERO SECTION (Même style que Jobs) */}
        <div className="relative flex flex-col pb-10 items-center py-14 justify-center m-2 md:m-4 lg:m-6 rounded-4xl px-4 md:px-16 lg:px-24 bg-primary text-white min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-3xl md:text-6xl font-medium max-w-4xl leading-tight">
              Trouvez l'entreprise qui <br />
              <span className="bg-gradient-to-r from-primary to-secondary px-4 rounded-xl py-2 inline-block mt-4">vous correspond.</span>
            </h1>
            <p className="mt-8 text-white/70 max-w-xl mx-auto text-lg">Découvrez les entreprises certifiées B Corp et les nouvelles pépites à explorer.</p>
          </motion.div>

          {/* BARRE DE RECHERCHE */}
          <div className="relative mt-12 w-full max-w-3xl group">
             <div className="relative flex items-center bg-third p-2 rounded-full border border-gray-100 shadow-2xl">
                <FiSearch className="ml-6 text-gray-400 text-xl" />
                <input type="text" placeholder="Rechercher une entreprise..." className="w-full py-4 bg-transparent outline-none text-gray-700 font-medium px-4" />
                <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg">Chercher</button>
             </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 md:px-8">
          
          {/* SECTION : ENTREPRISES DU MOMENT */}
          <section className="mt-20">
            <div className="flex justify-between mb-10">
              <div className="max-md:flex-col">
                <h2 className="text-3xl font-black text-primary">Entreprises du moment</h2>
                <p className="text-gray-500 mt-2">Découvrez les entreprises certifiées B Corp</p>
              </div>
              
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  [1, 2, 3].map((i) => <CompanyCardSkeleton key={i} />)
                ) : (
                  recruiters.data.map((c, index) => (
                    <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                     <EnterpriseCard enterprise={c} />
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </section>

      

          {/* CTA : RECRUTEUR */}
          <section className="mt-32 bg-secondary rounded-[3rem] p-12 text-center text-primary relative overflow-hidden group">
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             <h2 className="text-3xl font-black mb-4">Vous aimeriez voir votre entreprise ici ?</h2>
             <p className="max-w-xl mx-auto font-medium mb-8">Créez votre page d'entreprise et commencez à attirer les talents qui correspondent à votre culture.</p>
             <Link href="/contact/recruiter" className="bg-primary text-white px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs inline-block shadow-2xl">Commencer maintenant</Link>
          </section>

        </div>
      </SkeletonTheme>
    </main>
  );
}