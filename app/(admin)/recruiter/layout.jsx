"use client";

import NavAside from "@/app/components/recruiter/header/NavAside";
import NavOverlay from "@/app/components/recruiter/header/NavOverlay";
import NavTop from "@/app/components/recruiter/header/NavTop";
import { useState } from "react";

export default function RecruiterLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary/3 flex min-h-screen justify-end w-full">
      <NavOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavTop isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavAside isOpen={isOpen} />
      <main className="pt-[100px] font-sans px-5 pb-4 w-[100%] lg:w-[85%]">
        {children}
      </main>
    </div>
  );
}
