"use client";
import { FiSearch, FiUsers, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Configuration de l'animation en cascade
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex flex-col pb-10 items-center py-14 justify-center m-2 md:m-4 lg:m-6 rounded-4xl text-sm px-4 md:px-16 lg:px-24 xl:px-32 bg-primary text-white min-h-[80vh]"
    >
      <motion.a
        variants={item}
        href="https://jwennjob.com"
        className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-20 mb-6 text-purple-100 bg-purple-200/15"
      >
        <span className="bg-secondary text-white text-xs px-3.5 py-1 rounded-full">
          DECOUVREZ
        </span>
        <p className="flex items-center gap-1">
          <span>la nouvelle version de Jwennjob</span>
          <FiArrowRight/>
        </p>
      </motion.a>

      <motion.h1
        variants={item}
        className="text-4xl leading-[55px] md:text-6xl 2xl:text-7xl md:leading-[84px] font-medium max-w-2xl md:max-w-6xl text-center"
      >
        Votre carrière commence ici,
        <span className="ms-3 bg-gradient-to-r from-primary to-secondary px-3 rounded-xl text-nowrap py-2 ">
          sur Jwennjob
        </span>
      </motion.h1>

      <motion.p
        variants={item}
        className="text-base text-center text-slate-200 max-w-lg mt-6"
      >
        Inscrivez vous. Completez votre profil, soumettez vos documents. Soyez contactez par les entreprises
      </motion.p>

      <motion.div
        variants={item}
        className="flex items-center gap-4 mt-8 w-full max-w-md"
      >
        <span className="flex items-center justify-between p-1.2 lg:p-2.2 border gap-2 bg-transparent border-secondary/30 h-12 w-full rounded-full overflow-hidden">
          <span className="text-xs hidden lg:block ml-2">
            Plus de <b className="text-secondary">101789</b> opportunités actives
          </span>
          <span className="text-xs block lg:hidden ml-2">
            <b className="text-secondary">101789+</b> jobs actives
          </span>
          <a href="#jobs-section"
            className="bg-secondary active:scale-95 transition w-56 h-10 rounded-full text-sm text-white mr-1 flex items-center justify-center gap-1 shrink-0"
          >
            <FiSearch size={16} />
            Saisir mon opportunité
          </a>
        </span>
      </motion.div>

      <motion.div
        variants={item}
        className="flex justify-center items-center gap-4 md:gap-14 mt-12"
      >
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check-icon lucide-check size-5 text-secondary"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span className="text-slate-400 text-xs lg:text-sm">Simple</span>
        </p>
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check-icon lucide-check size-5 text-secondary"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span className="text-slate-400 text-xs lg:text-sm">
            Utilisation Gratuit
          </span>
        </p>
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check-icon lucide-check size-5 text-secondary"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span className="text-slate-400 text-xs lg:text-sm">
            CV en 10 minutes
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
