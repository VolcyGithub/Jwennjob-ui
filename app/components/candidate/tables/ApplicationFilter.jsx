"use client";

import { BiFilter, BiReset } from "react-icons/bi";
import { useState } from "react";
import SlimSelect from "slim-select/react";
import "slim-select/styles";
import "../../../globals.css";

export default function ApplicationFilter() {
  const statusOpts = useState([
    { value: "", text: "Tous les statuts" },
    { value: "pending", text: "En attente" },
    { value: "accepted", text: "Accepté" },
    { value: "rejected", text: "Refusé" },
  ])[0];

  const companyOpts = useState([
    { value: "", text: "Toutes les entreprises" },
    { value: "alphatech", text: "AlphaTech" },
    { value: "creadesign", text: "CréaDesign" },
    { value: "datacorp", text: "DataCorp" },
  ])[0];

  const dateOpts = useState([
    { value: "desc", text: "Récent" },
    { value: "asc", text: "Ancien" },
  ])[0];

  return (
    <div className="flex flex-wrap mb-4 items-center gap-4 rounded-2xl bg-white p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <BiFilter className="text-lg" />
        <span>Filtrer par</span>
      </div>

      {/* Statut */}
      <div className="w-full text-sm md:w-[200px]">
        <SlimSelect data={statusOpts} />
      </div>

      {/* Entreprise */}
      <div className="w-full text-sm md:w-[200px]">
        <SlimSelect data={companyOpts} />
      </div>

      {/* Date */}
      <div className="w-full text-sm md:w-[200px]">
        <SlimSelect data={dateOpts} />
      </div>

      {/* Reset */}
      <button
        className="ml-auto rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-primary hover:bg-gray-200 disabled:opacity-75"
        disabled
      >
        <BiReset className="inline mr-1" />
        Réinitialiser
      </button>
    </div>
  );
}
