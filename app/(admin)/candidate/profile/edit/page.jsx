"use client";

import { useState, useEffect } from "react";
import ProfileForm from "@/features/candidate/profile/components/forms/ProfileForm";
import { useFilters } from "@/features/shared/hooks/queries/useFilters";
import { useCandidateAuth } from "@/features/candidate/shared/contexts/CandidateContext";
import { mapApiToForm } from "@/features/candidate/profile/mappers/profile.mapper";

export default function ProfilePage() {
    
  const [defaultValues, setDefaultValues] = useState({});
  const { data: filters } = useFilters();
  const { candidate, isLoading, error } = useCandidateAuth();

  useEffect(() => {
    if (candidate && filters) {
      setDefaultValues(mapApiToForm(candidate));
    }
  }, [candidate, filters]);

  if (isLoading) return <p>Chargement du profil...</p>;
  if (error) return <p>Erreur lors du chargement du profil</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Mon profil</h1>
      {filters && Object.keys(defaultValues).length > 0 ? (
        <ProfileForm defaultValues={defaultValues} filters={filters} />
      ) : (
        <p>Chargement du formulaire...</p>
      )}
    </div>
  );
}
