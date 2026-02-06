"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoMarquee from "@/app/components/public/LogoMarquee";
import { BiBuildings, BiMoney, BiBriefcase, BiMenu, BiCheckCircle } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";
import { useRecruiters } from "@/app/lib/api/hooks/queries/useRecruiters";


export default function BecomeRecruiterPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };


  return (
    <main className="min-h-screen bg-third pt-2 pb-20 font-sans text-gray-900">
      <div className="mx-auto px-1 md:px-8">
        <div className="relative flex max-md:flex-col pb-10 lg:space-x-14 items-center py-14 justify-center m-2 md:m-4  rounded-4xl px-4 md:px-16 lg:px-24 bg-primary text-white min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
          <div className="mt-12">

            <h1 className="text-2xl md:text-4xl text-left font-medium max-w-4xl leading-tight">
              Un recrutement réussi commence par une connexion intelligente.
            </h1>
            <p className="mt-8 text-gray-300 max-w-xl mx-auto text-lg text-left">Notre plateforme vous aide à attirer, identifier et recruter les meilleurs profils en Haïti, ceux qui s’épanouiront vraiment au sein de vos équipes.</p>
            <div className="mt-8 text-center md:text-start">
              <Link
                href="/contact/become-recruiter"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all"
              >
                Commencer à recruter
              </Link>
            </div>
          </div>

          <div className="relative md:mt-12 w-full max-w-6xl group">
            <Image src="/Company.gif" alt="Recruteur" width={600} height={400} className="rounded-3xl w-full" />
          </div>
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center my-32"
        >

          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Ils recrutent déjà sur <span className="text-secondary">JwennJob</span>
          </h1>
          <p className="text-gray-500 max-w-sm text-sm  md:max-w-2xl mx-auto">
            Rejoignez des entreprises de toutes tailles et de tous secteurs qui transforment leur manière de recruter avec nous.
          </p>

          <LogoMarquee />
        </motion.div>


        <div className="mt-24 bg-primary rounded-4xl p-10 md:p-16 text-center md:text-start max-w-6xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex-col md:flex md:items-center lg:flex-row gap-8 lg:gap-16 justify-center">
            <div className="block">
              <h3 className="text-3xl font-black text-white mb-4">
                Le Sourcing Intelligent pour des Recrutements Réussis
              </h3>
              <p className="text-gray-300 max-md:text-xs max-w-2xl mx-auto mb-8">
                Oubliez la recherche manuelle interminable. Notre outil de Sourcing, propulsé par un algorithme de filtrage puissant, analyse les compétences et la localisation pour vous présenter les candidats qui correspondent exactement à vos critères RH.
              </p>
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <Link
                  href="/contact/become-recruiter"
                  className="bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-secondary/90 transition-all active:scale-95"
                >
                  Découvrir le sourcing
                </Link>
              </div>

            </div>
            <div className="relative p-4 md:p-8 lg:p-12 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  {/* Colonne Gauche - Talent Pool & Matching */}
                  <div className="absolute left-0 top-32 lg:top-30 w-82 max-md:h-[400px] h-64 bg-secondary/50 rounded-3xl"></div>
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="bg-white/50 rounded-3xl p-6 relative w-full lg:w-[500px] max-md:top[-140px] mt-3"
                  >
                    <div className="flex items-center justify-between mb-6 z-10 relative">
                      <h2 className="text-2xl font-bold text-third">
                        Talents Qualifiés{" "}
                        <span className="bg-cyan-400 text-third text-sm px-2 py-1 rounded-full ml-2">
                          8k+
                        </span>
                      </h2>
                    </div>

                    <div className="bg-primary rounded-3xl p-4 lg:w-[250px] shadow-sm hover:shadow-md transition mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Image src="https://randomuser.me/api/portraits/men/30.jpg" width={32} height={32} alt="Profile" className="rounded-full" />
                        </div>
                        <span className="text-xs font-bold text-third uppercase tracking-wider">Profil Vérifié</span>
                      </div>
                      <h3 className="text-xl text-secondary font-semibold mb-2">Expert UI/UX Designer</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-secondary text-sm">★</span>
                        <span className="text-secondary text-xs font-medium">
                          Score de Matching : 98%
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Section Filtres Intelligents (Data Center) */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 1 }}
                    className="max-md:mt-0 lg:absolute right-0 top-34 max-md:top-24 max-md:py-12 py-6 bg-white rounded-3xl px-6 z-10 shadow-sm mb-12 lg:mb-5 max-md:h-[240px] h-[220px] lg:w-[320px]"
                  >
                    <h3 className="text-lg font-bold mb-2 text-primary">Sourcing Précis</h3>
                    <p className="text-xs text-primary mb-4">Explorez notre data center via des filtres avancés.</p>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl transition hover:bg-primary/5">
                        <BiBuildings className="text-xl text-secondary" />
                        <span className="text-xs text-primary">Géolocalisation</span>
                      </button>

                      <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl transition hover:bg-primary/5">
                        <BiBriefcase className="text-xl text-secondary" />
                        <span className="text-xs font-medium text-primary">Hard Skills</span>
                      </button>

                      <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl transition hover:bg-primary/5">
                        <BiCheckCircle className="text-xl text-secondary" />
                        <span className="text-xs font-medium text-primary">Talents Vérifiés</span>
                      </button>

                      <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl transition hover:bg-primary/5">
                        <BiMenu className="text-xl text-secondary" />
                        <span className="text-xs font-medium text-primary">Matching IA</span>
                      </button>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" mb-16 mt-20 "
        >

          <h1 className="text-4xl text-center mx-auto md:text-5xl max-w-4xl font-black text-primary mb-6">
            Racontez votre histoire, Attirez les <span className="text-secondary">Talents Parfaits</span>
          </h1>
          <p className="text-gray-500 text-center max-w-sm text-sm  md:max-w-2xl mx-auto">
            Votre page entreprise sur Jwennjob est bien plus qu'une simple présentation. C'est une immersion dans votre culture. Valorisez vos missions, vos photos et vos témoignages d'équipe pour convaincre les talents faits pour vous de postuler.
          </p>

          <div className="relative mx-auto max-w-5xl 2xl:max-w-screen-2xl px-4">
            <div className="absolute -z-50 size-[400px] -top-10 -left-20 aspect-square rounded-full bg-indigo-500/30 blur-3xl"></div>
           
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
              <div className="md:col-span-2">
                <Image
                  alt="features showcase"
                  width={600}
                  height={200}
                  className="hover:-translate-y-0.5 transition duration-300"
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-4.png"
                />

              </div>
              <div className="md:col-span-1">
                <Image
                  alt="features showcase"
                  width={600}
                  height={600}
                  className="hover:-translate-y-0.5 transition duration-300 rounded-3xl"
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png"
                />
                <h3 className="text-[24px]/7.5 font-bold mt-6 text-primary">Et si c'était votre tour ?</h3>
                <p className="text-gray-600 mt-2">Augmentez votre attractivité et recrutez avec précision dès aujourd'hui.</p>
                <Link href="/contact/become-recruiter" className="group flex items-center gap-2 mt-4 text-secondary transition font-bold hover:text-secondary/80">
                  Demander une démo
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-5 group-hover:translate-x-0.5 transition duration-300" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}