"use client";

import { RecruiterProvider } from "@/features/recruiter/shared/contexts/RecruiterContext";
import ErrorState from "@/features/candidate/shared/components/cards/CardError";
import NavAside from "@/features/recruiter/shared/components/layouts/NavAside";
import NavOverlay from "@/features/recruiter/shared/components/layouts/NavOverlay";
import NavTop from "@/features/recruiter/shared/components/layouts/NavTop";
import { useRecruiterMe } from "@/features/recruiter/shared/hooks/queries/useRecruiters";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function RecruiterLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, error, isLoading, refetch } = useRecruiterMe();

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
        title="Impossible de charger le profil de recruteur"
        message="Nous rencontrons des difficultés pour récupérer vos informations. Cela peut être dû à une connexion instable ou à un problème temporaire avec nos serveurs."
        onRetry={refetch}
        showHome={true}
        showBack={true}
      />
    );
  }

  return (
    <RecruiterProvider 
    isLoading={isLoading} 
    recruiter={data.recruiter} children={children}>
      <div className="bg-primary/3 flex min-h-screen justify-end w-full">
        <NavOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavTop isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavAside isOpen={isOpen} />
        <main className="pt-[100px] font-sans px-5 pb-4 w-[100%] lg:w-[85%]">
          {children}
        </main>
      </div>
    </RecruiterProvider>
  );
}
