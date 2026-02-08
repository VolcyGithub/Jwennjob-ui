"use client";

import ErrorState from "@/app/components/candidate/cards/CardError";
import NavAside from "@/app/components/candidate/header/NavAside";
import NavFloatingButton from "@/app/components/candidate/header/NavFloatingButton";
import NavOverlay from "@/app/components/candidate/header/NavOverlay";
import NavTop from "@/app/components/candidate/header/NavTop";
import { useMe } from "@/app/lib/api/hooks/queries/useCandidates";
import { CandidateProvider } from "@/app/lib/contexts/CandidateContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CandidateLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, error, isLoading , refetch } = useMe();

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://jwennjob.com/assets/j-logo.png"
              alt="JwennJob Logo"
              width={80}
              height={80}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }
  if (error) {
    return (
      <ErrorState
        title="Impossible de charger votre profil"
        message="Nous rencontrons des difficultés pour récupérer vos informations. Cela peut être dû à une connexion instable ou à un problème temporaire avec nos serveurs."
        onRetry={refetch}
        showHome={true}
        showBack={true}
      />
    );
  }
  return (
    <CandidateProvider
      candidate={data.candidate}
      children={children}
      isLoading={isLoading}
      error={error}
    >
      <div className="bg-primary/3 flex min-h-screen justify-end w-full">
        <NavFloatingButton />
        <NavOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavTop isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavAside isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="pt-[100px] font-sans px-5 pb-4 w-[100%] xl:w-[85%]">
          {children}
        </main>
      </div>
    </CandidateProvider>
  );
}
