"use client";
import { useState } from "react";

export default function NavFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed end-4 bottom-4 z-50">
      {/* Buttons */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${open ? "mb-2" : "opacity-0 pointer-events-none"}`}
      >
        {/* Créer/Compléter mon CV */}
        <a
          href="/services/cv-builder#template-list"
          className="flex items-center gap-2 no-underline"
        >
          <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-2xl shadow whitespace-nowrap">
            Créer/Compléter mon CV
          </span>
          <button
            type="button"
            title="Créer/Compléter mon CV"
            className="w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition grid place-items-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l9-9zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
        </a>

        {/* Compléter mon profil */}
        <a
          href="/dashboard/user/resume"
          className="flex items-center gap-2 no-underline"
        >
          <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-2xl shadow whitespace-nowrap">
            Compléter mon profil
          </span>
          <button
            type="button"
            title="Compléter mon profil"
            className="w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition grid place-items-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </button>
        </a>

        {/* Téléverser mes documents */}
        <a
          href="/dashboard/user/document"
          className="flex items-center gap-2 no-underline"
        >
          <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-2xl shadow whitespace-nowrap">
            Téléverser mes documents
          </span>
          <button
            type="button"
            title="Téléverser mes documents"
            className="w-12 h-12 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition grid place-items-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
            </svg>
          </button>
        </a>
      </div>

      {/* Bouton principal */}
      <div className="flex justify-end w-full">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          title="Menu"
          className={`w-10 h-10 rounded-full bg-primary text-white shadow-xl hover:bg-indigo-700 transition-all duration-300 grid place-items-center text-2xl ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
