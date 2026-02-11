"use client";
import Image from "next/image";

import { BiFileBlank, BiPalette, BiDownload, BiStar, BiEditAlt, BiCloudUpload } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import TripletCards from "@/features/global/components/card/TripletCards";
import TitleHead from "@/features/global/components/card/TitleHead";


export default function HeroJobSearch() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <section className="bg-gray-30 pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0 2xl:max-w-screen-2xl py-12">
        <TitleHead
          title="Trouvez un job"
          subtitle="Vous avez le pouvoir d'écrire votre histoire. Find your people !"
        />
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center mt-16">
          {/* Left */}

          <div className="relative">
            <div className="relative w-full lg:h-[430px] rounded-4xl ">
              <TripletCards />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Entrez dans les coulisses
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg">
              Arrêtez de scroller sans fin sur des offres impersonnelles.
              Consultez seulement celles qui répondent à vos besoins grâce à nos
              filtres. Entrez dans les coulisses des entreprises, découvrez
              leurs valeurs et rencontrez votre future équipe.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Trouver un job
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 2xl:px-0 2xl:max-w-screen-2xl py-12">
        <div className="grid gap-16 lg:grid-cols-2 md:items-center mt-16">
          <div className="space-y-6 max-md:order-last">
            <h3 className="text-3xl font-bold text-gray-900">
              Propulsez votre carrière avec un CV professionnel
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg">
              Ne perdez plus de temps sur la mise en forme. Utilisez notre outil natif pour créer un profil centralisé qui attire l'attention des recruteurs et générez un CV prêt à l'emploi en quelques clics.
            </p>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span><strong>Générateur de CV intégré</strong> : Créez et mettez en forme votre CV directement sur la plateforme.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span><strong>Téléchargement PDF</strong> : Exportez votre CV professionnel instantanément pour vos candidatures externes.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span><strong>Visibilité accrue</strong> : Un profil complet permet à notre algorithme de vous suggérer des offres géolocalisées adaptées à vos compétences.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span><strong>Matching intelligent</strong> : Votre profil est automatiquement scanné pour vous connecter aux meilleures opportunités RH.</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/cv-builder"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                Créer mon CV gratuitement
              </Link>
            </div>
          </div>

          <div className="h-[650px] p-8 relative">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - CV Status Card */}
                <div className="absolute left-0 top-32 w-62 max-md:h-[400px] h-64 bg-secondary/50 rounded-3xl"></div>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="bg-white/50 rounded-3xl p-6 relative w-full lg:w-[500px] max-md:top[-140px] mt-6"
                >
                  <div className="flex items-center justify-between mb-6 z-10 relative">
                    <h2 className="text-2xl font-bold">
                      Mon Profil{" "}
                      <span className="bg-cyan-400 text-third text-sm px-2 py-1 rounded-full ml-2">
                        100%
                      </span>
                    </h2>
                  </div>

                  <div className="bg-gray-50 rounded-3xl p-4 lg:w-[220px] shadow-sm hover:shadow-md transition mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                        <BiFileBlank className="text-third text-lg" />
                      </div>
                    </div>
                    <h3 className="text-xl text-primary font-semibold mb-2">CV Standardisé</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary text-sm">✓</span>
                      <span className="text-secondary text-xs font-medium">
                        Prêt pour l'export PDF
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* CV Editor Tools Section */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1 }}
                  className="max-md:mt-20 max-md:py-12 py-6 bg-white/50 rounded-3xl px-6 z-10 shadow-sm mb-5 max-md:h-[240px] h-[220px] lg:w-[300px]"
                >
                  <h3 className="text-lg font-bold mb-4 text-primary">Éditeur de CV</h3>
                  <p className="text-xs text-primary mb-4">Simplifiez la mise en forme de votre document professionnel</p>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl transition">
                      <BiPalette className="text-xl text-secondary" />
                      <span className="text-xs text-primary">Design</span>
                    </button>

                    <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl transition">
                      <BiDownload className="text-xl text-secondary" />
                      <span className="text-xs font-medium text-primary">Export PDF</span>
                    </button>

                    <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl transition">
                      <BiStar className="text-xl text-secondary" />
                      <span className="text-xs font-medium text-primary">Skills</span>
                    </button>

                    <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl transition">
                      <BiEditAlt className="text-xl text-secondary" />
                      <span className="text-xs font-medium text-primary">Édition</span>
                    </button>
                  </div>
                </motion.div>

                {/* Right Column - CV Generation Card */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4 }}
                  className="max-md:bg-primary max-md:w-[250px] w-[350px] bg-primary rounded-3xl shadow-md p-6 flex flex-col relative max-md:z-10 max-md:top-[-450px] right-[-90px] lg:top-[-60px] lg:ml-8"
                >
                  {/* Visual Representation of a CV */}
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    <div className="rounded-2xl w-full h-24 bg-white/10 flex items-center justify-center border border-white/20">
                      <BiCloudUpload className="text-third text-4xl opacity-50" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-third mb-3">
                      Générez votre futur
                    </h3>
                    <p className="text-white/70 text-[10px] mb-2">Un outil natif pour un CV professionnel en un clic</p>
                    <div className="w-24 h-1 bg-secondary rounded"></div>
                    <div className="w-20 h-1 bg-secondary rounded mt-1"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
