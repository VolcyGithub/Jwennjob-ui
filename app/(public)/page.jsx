"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/features/global/components/sections/HeroSection";
import ExploreCompanies from "@/features/global/components/sections/ExploreCompanies";
import LogoMarquee from "@/features/global/components/sections/LogoMarquee";
import HeroJobSearch from "@/features/global/components/sections/HeroJobSearch";
import ChatSection from "@/features/global/components/sections/ChatSection";
import BlogSection from "@/features/global/components/sections/BlogSection";
import LatestJobs from "@/features/global/components/sections/LatestJobs";
import Faqs from "@/features/global/components/sections/Faqs";
import ReviewSection from "@/features/global/components/sections/ReviewSection";
import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-third">
      <HeroSection />
      <ExploreCompanies />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center my-4"
      >
       
        <LogoMarquee />
         <p className="text-gray-500 max-w-sm text-sm  md:max-w-2xl mx-auto">
          Vous <Link href="/contact/recruiter" className="mt-8 font-bold text-primary underline">recrutez</Link>  ?  Découvrez nos offres entreprise.
        </p>
        
      </motion.div>
      <HeroJobSearch />
      <ChatSection />
      <BlogSection/>
      <LatestJobs />
      <Faqs />
      <ReviewSection />

      {/* SECTION "POURQUOI PAS VOUS ? - ENTREPRISE" */}
      <div className="my-24 bg-white rounded-4xl max-w-7xl mx-auto p-10 md:p-16 text-center">
        <div className="flex-col md:flex md:items-center lg:flex-row lg:items-start gap-8 lg:gap-16 justify-center">
          <Image
            src="/Hiring-Manager.gif"
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
  );
}
