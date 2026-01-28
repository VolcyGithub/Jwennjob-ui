"use client";
import { useState } from "react";

export default function CVPage() {
  const [cv, setCv] = useState(null);

  const handleCVUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCv(file);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="relative flex flex-col pb-10 items-center py-14 justify-center m-2 md:m-4 lg:m-6 rounded-4xl text-sm px-4 md:px-16 lg:px-24 xl:px-32 bg-primary text-white">
        <a
          href="https://jwennjob.com"
          className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-20 mb-6 text-purple-100 bg-purple-200/15"
        >
          <span className="bg-secondary text-white text-xs px-3.5 py-1 rounded-full">
            SERVICES CV
          </span>
          <p className="flex items-center gap-1">
            <span>Optimisez votre candidature</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right-icon lucide-chevron-right group-hover:translate-x-0.5 transition duration-300"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </a>
        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-2xl md:max-w-6xl text-center">
          Créez un CV{" "}
          <span className="ms-3 bg-gradient-to-r from-primary to-secondary px-3 rounded-xl text-nowrap py-2">
            professionnel
          </span>
        </h1>
        <p className="text-base text-center text-slate-200 max-w-lg mt-6">
          Téléchargez votre CV, recevez des conseils personnalisés et améliorez
          vos chances d'être embauché
        </p>
        <div className="flex items-center gap-4 mt-8">
          <div className="flex flex-col items-center border gap-4 bg-transparent border-secondary/30 p-8 max-w-md w-full rounded-4xl">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCVUpload}
              className="w-full"
            />
            {cv && <p className="text-sm text-secondary">✓ {cv.name}</p>}
            <button className="bg-secondary hover:bg-secondary/90 active:scale-95 transition w-full h-10 rounded-full text-sm text-white flex items-center justify-center gap-2">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.6963 8.88475C12.6963 8.96959 12.68 9.04984 12.6566 9.12632L8.93489 5.12331L12.6963 2.19775V8.88475ZM1.64439 9.69807L5.41585 5.67917L6.8452 6.75954L8.2127 5.67248L12.046 9.69807C11.9863 9.71186 1.70415 9.71186 1.64439 9.69807ZM0.994078 8.88475V2.19775L4.75552 5.12331L1.03378 9.12632C1.01038 9.04984 0.994078 8.96959 0.994078 8.88475ZM12.2784 1.36188L6.8452 5.54125L1.41202 1.36188H12.2784ZM11.8605 0.526001H1.82995C0.906729 0.526001 0.158203 1.27453 0.158203 2.19775V8.88475C0.158203 9.80798 0.906729 10.5565 1.82995 10.5565H11.8605C12.7837 10.5565 13.5322 9.80798 13.5322 8.88475V2.19775C13.5322 1.27453 12.7837 0.526001 11.8605 0.526001Z"
                  fill="white"
                />
              </svg>
              Analyser mon CV
            </button>
            <a href="build" className="bg-secondary hover:bg-secondary/90 active:scale-95 transition w-full h-10 rounded-full text-sm text-white flex items-center justify-center gap-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              Créer un CV
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
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
            <span className="text-slate-400">Analyse gratuite</span>
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
            <span className="text-slate-400">Conseils personnalisés</span>
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
            <span className="text-slate-400">Résultats instantanés</span>
          </p>
        </div>
      </div>
    </div>
  );
}
