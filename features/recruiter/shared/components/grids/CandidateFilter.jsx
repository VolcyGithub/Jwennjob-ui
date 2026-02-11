"use client";
import React, { useState } from "react";
import SlimSelect from "slim-select/react";
import "slim-select/styles";
import "@/app/globals.css";
import { useFilters } from "@/app/lib/api/hooks/queries/useFilters";
import FilterBarSkeleton from "../cards/FilterBarSkeleton";

function FilterSection({ icon: Icon, title, children }) {
  return (
    <div className="mb-6 text-sm">
      <h3 className="text-xs font-bold text-primary mb-2 flex items-center gap-2">
        {Icon && <Icon />} {title}
      </h3>
      {children}
    </div>
  );
}

export default function CandidateFilterBar({ configFilters, onApply }) {

  const { data: filters, isLoading, error } = useFilters();
  
  const [values, setValues] = useState({
    department: "",
    commune: "",
    sector: "",
    university: "",
    competences: [],
    langues: [],
    experience: "",
    contract: "",
    salary: "",
    gender: "",
  });

  const handleChange = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    const empty = {
      department: "", commune: "", sector: "", university: "",
      competences: [], langues: [], experience: "", contract: "", salary: "", gender: ""
    };
    setValues(empty);
    onApply?.({});
  };

  if (isLoading) return <FilterBarSkeleton />;
  if (error) return <div className="p-6 text-red-500">Erreur</div>;
  if (!filters) return <div className="p-6 text-gray-500">Aucun filtre</div>;

  return (
    <div className="sticky top-25">
      <div className="w-full shadow-sm bg-white rounded-4xl p-6 h-[780px] overflow-y-auto">
        <div className="h-fit">
          <div className="flex items-center border-b border-gray-300 pb-2 justify-between mb-10">
            <h2 className="text-md font-semibold text-primary">Filtre</h2>
          </div>

          {configFilters.map((filter) => (
            <FilterSection key={filter.key} icon={filter.icon} title={filter.title}>
              <SlimSelect
                className="text-xs"
                multiple={filter.multiple}
                onChange={(val) => handleChange(filter.key, val)}
                settings={{
                  showSearch: filter.multiple || ["departments", "communes", "universities" , "sectors"].includes(filter.dataKey),
                  multiple: filter.multiple,
                }}
              >
                {!filter.multiple && <option value="">Tous</option>}
                
                {filters[filter.dataKey]?.map((item) => (
                  <option key={item.id} value={item.id} className="text-sm">
                    {item.title}
                  </option>
                ))}
              </SlimSelect>
            </FilterSection>
          ))}
        </div>
      </div>
      
      <div className="mt-6 w-full space-y-3">
        <button 
          onClick={() => onApply?.(values)}
          className="w-full bg-primary text-sm text-white py-2 px-4 rounded-full font-medium hover:opacity-90"
        >
          Appliquer
        </button>
        <button 
          onClick={handleReset}
          className="w-full bg-gray-100 text-sm text-gray-700 py-2 px-4 rounded-full font-medium hover:bg-gray-200"
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
}