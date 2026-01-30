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
  const {candidate} = data

  return (
    <CandidateProvider candidate={candidate} children={children} isLoading={isLoading} error={error}>
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