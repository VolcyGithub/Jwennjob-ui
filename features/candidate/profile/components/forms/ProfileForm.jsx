"use client";
import { useForm } from "react-hook-form";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";
import FormButton from "@/components/forms/FormButton";
import { mapFormToApi } from "@/features/candidate/profile/mappers/profile.mapper";
import { useCandidateUpdateProfile } from "@/features/candidate/profile/hooks/mutations/usePutCandidateProfile";

export default function ProfileForm({ defaultValues, filters}) {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const update = useCandidateUpdateProfile();

  const toSelectOptions = (arr) =>
    arr?.map((item) => ({ value: item.id, label: item.title })) || [];

  const onSubmit = (formData) => {
    const payload = mapFormToApi(formData);
    update.mutate(payload);
  };

  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
      <FormInput
        label="Prénom"
        name="first_name"
        register={register}
        rules={{ required: "Le prénom est obligatoire" }}
        error={errors.first_name}
        placeholder="Votre prénom"
      />

      <FormInput
        label="Nom"
        name="last_name"
        register={register}
        rules={{ required: "Le nom est obligatoire" }}
        error={errors.last_name}
        placeholder="Votre nom"
      />

      <FormInput
        label="Email"
        name="email"
        register={register}
        rules={{ required: "L'email est obligatoire" }}
        error={errors.email}
        placeholder="Votre email"
      />

      <FormSelect
        label="Sexe"
        name="gender"
        control={control}
        options={toSelectOptions(filters.sexes)}
        rules={{ required: "Le sexe est obligatoire" }}
        error={errors.gender}
        placeholder="Sélectionnez votre sexe"
      />

      <FormSelect
        label="Salaire"
        name="salary"
        control={control}
        options={toSelectOptions(filters.salaries)}
        error={errors.salary}
        placeholder="Votre fourchette salariale"
      />

      <FormSelect
        label="Niveau d'études"
        name="education"
        control={control}
        options={toSelectOptions(filters.experienceLevels)}
        error={errors.education}
        placeholder="Votre niveau d'études"
      />

      <FormSelect
        label="Commune"
        name="commune"
        control={control}
        options={toSelectOptions(filters.communes)}
        error={errors.commune}
        placeholder="Votre commune"
      />

      {/* Multi-select */}
      <FormSelect
        label="Compétences"
        name="competences"
        control={control}
        options={toSelectOptions(filters.competences)}
        isMulti
        error={errors.competences}
        placeholder="Sélectionnez vos compétences"
      />

      <FormSelect
        label="Langues"
        name="languages"
        control={control}
        options={toSelectOptions(filters.languages)}
        isMulti
        error={errors.languages}
        placeholder="Langues parlées"
      />

      {/* Bouton */}
      <FormButton loading={update.isPending} type="submit">Enregistrer</FormButton>
    </form>
  );
}


