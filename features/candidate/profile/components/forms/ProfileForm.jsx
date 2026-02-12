"use client";
import { useForm } from "react-hook-form";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";
import FormButton from "@/components/forms/FormButton";

function ProfileForm({
  defaultValues,
  countryOptions,
  skillOptions,
  onSubmit,
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        label="Prénom"
        name="prenom"
        register={register}
        rules={{ required: "Le prénom est obligatoire" }}
        error={errors.prenom}
        placeholder="Votre prénom"
      />

      <FormSelect
        label="Pays"
        name="pays"
        control={control}
        options={countryOptions}
        rules={{ required: "Pays obligatoire" }}
        error={errors.pays}
        placeholder="Choisissez un pays"
      />

      <FormSelect
        label="Compétences"
        name="competences"
        control={control}
        options={skillOptions}
        rules={{ required: "La compétence est obligatoire" }}
        isMulti
        error={errors.competences}
        placeholder="Sélectionnez vos compétences"
      />

      <FormButton type="submit">Enregistrer</FormButton>
    </form>
  );
}

export default ProfileForm;
