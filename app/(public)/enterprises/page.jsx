"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FiSearch } from "react-icons/fi";

import { useRecruiters } from "@/features/shared/hooks/queries/useGlobalRecruiter";
import CompanyCardSkeleton from "@/features/shared/components/card/CompanyCardSkeleton";
import EnterpriseCard from "@/features/shared/components/card/EnterpriseCard";


export default function EnterprisesPage() {

  const {data : recruiters , isLoading , error} = useRecruiters();

  return (
    <main className="bg-third min-h-screen">
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

      

          {/* SECTION "POURQUOI PAS VOUS ? - ENTREPRISE" */}
               <div className="my-24 bg-white rounded-4xl max-w-7xl mx-auto p-10 md:p-16 text-center">
                 <div className="flex-col md:flex md:items-center lg:flex-row lg:items-start gap-8 lg:gap-16 justify-center">
                   <Image
                     src="/Hiring-Manager.gif" // Suggestion : changer pour un GIF lié au recrutement
                     alt="Recrutement Entreprise"
                     width={300}
                     height={300}
                   />
                   <div className="block text-left">
                     <h3 className="text-3xl font-black text-primary mb-4">
                       Optimisez vos recrutements dès aujourd'hui
                     </h3>
                     <p className="text-gray-500 max-md:text-xs max-w-2xl mb-8 leading-relaxed">
                       Rejoignez les entreprises qui transforment leur processus RH grâce à Jwennjob.
                       Accédez instantanément à notre data center de talents vérifiés et profitez d'un système de <span className="font-bold text-secondary">matching automatisé</span> pour trouver les meilleurs profils.
                     </p>
         
                     <div className="flex gap-4 flex-wrap">
                       <Link
                         href="/contact/recruiter"
                         className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md transition-all active:scale-95"
                       >
                         Devenir recruteur
                       </Link>
                     
                     </div>
         
                     <div className="mt-8 flex flex-col gap-2">
                       <p className="text-sm text-gray-500">
                         Vous souhaitez en savoir plus ? <Link href="/contact/become-recruiter" className="text-primary font-bold hover:underline">Demander une démo</Link>
                       </p>
                       
                     </div>
                   </div>
                 </div>
               </div>

        </div>
      </SkeletonTheme>
    </main>
  );
}