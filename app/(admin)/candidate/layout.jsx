"use client";

import NavAside from "@/app/components/candidate/header/NavAside";
import NavFloatingButton from "@/app/components/candidate/header/NavFloatingButton";
import NavOverlay from "@/app/components/candidate/header/NavOverlay";
import NavTop from "@/app/components/candidate/header/NavTop";
import { useMe } from "@/app/lib/api/hooks/queries/useCandidates";
import { CandidateProvider } from "@/app/lib/contexts/CandidateContext";
import { useState } from "react";

export default function CandidateLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, error, isLoading } = useMe();



  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-primary/3">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Si erreur, affiche l'erreur
  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-primary/3">
        <p className="text-red-500">Erreur de chargement du profil</p>
      </div>
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
        <NavAside isOpen={isOpen} />
        <main className="pt-[100px] font-sans px-5 pb-4 w-[100%] xl:w-[85%]">
          {children}
        </main>
      </div>
    </CandidateProvider>
  );
}
