"use client";

import { useState } from "react";
import Link from "next/link";
import { useCandidateRegister } from "@/app/lib/api/hooks/mutations/useCandidateRegister";
import { BiLoaderAlt } from "react-icons/bi";



const InputField = ({ icon, error, ...props }) => (

  <div className="w-full mb-3">
    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
      {icon}
      <input
        className="bg-transparent text-gray-700 placeholder-gray-500 outline-none text-sm w-full h-full pr-6"
        {...props}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1 ml-4">{error}</p>}
  </div>

);

// Icons
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
    <path d="M8 8C10.206 8 12 6.206 12 4C12 1.794 10.206 0 8 0C5.794 0 4 1.794 4 4C4 6.206 5.794 8 8 8ZM8 9C5.333 9 0 10.333 0 13V16H16V13C16 10.333 10.667 9 8 9Z" fill="#6B7280"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="flex-shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
  </svg>
);

const LockIcon = () => (
  <svg width="13" height="17" viewBox="0 0 13 17" fill="none" className="flex-shrink-0">
    <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
  </svg>
);

const Separator = () => (
  <div className="flex items-center gap-4 w-full my-5">
    <div className="w-full h-px bg-gray-300/90" />
    <p className="text-nowrap text-sm text-gray-500/90">ou s'inscrire avec un e-mail</p>
    <div className="w-full h-px bg-gray-300/90" />
  </div>
);

export default function Page() {

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password_confirmation: "",
  });


  const register = useCandidateRegister();
  const errors = register.isError ? register.error?.response?.data?.errors : {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register.mutate(formData);
  };

  const inputFields = [
    { name: "nom", placeholder: "Nom (Signature)", type: "text", icon: <UserIcon /> },
    { name: "prenom", placeholder: "Prénom", type: "text", icon: <UserIcon /> },
    { name: "email", placeholder: "E-mail", type: "email", icon: <EmailIcon /> },
    { name: "password", placeholder: "Mot de passe", type: "password", icon: <LockIcon /> },
    { name: "password_confirmation", placeholder: "Confirmer le mot de passe", type: "password", icon: <LockIcon /> },
  ];

  return (
    <div className="flex h-[720px] w-full">
      {/* Image latérale */}
      <div className="w-full hidden md:block">
        <img className="h-full lg:h-screen object-cover brightness-50" src="/global/sign-image.webp" alt="Inscription" />
      </div>

      {/* Formulaire */}
      <div className="w-full md:h-screen flex flex-col items-center justify-center pt-12 px-4">
        <Link href="/">
          <img className="w-50 mb-8 object-cover" src="/logo.webp" alt="Logo" />
        </Link>

        <form onSubmit={handleSubmit} className="md:w-96 w-full max-w-sm flex flex-col items-center">
          <h2 className="text-4xl text-primary font-medium">Inscription</h2>
          <p className="text-sm text-center text-gray-500/90 mt-3">
            <span className="text-secondary font-semibold">Rejoignez-nous !</span> Créez votre compte pour commencer
          </p>

          {/* Bouton Google */}
          <button type="button" className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full hover:bg-gray-500/20 transition-colors">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="Google" />
            <span className="text-sm ml-3">S'inscrire avec Google</span>
          </button>

          <Separator />

          {/* Champs du formulaire */}
          {inputFields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
              error={errors?.[field.name]?.[0]}
              required
            />
          ))}

          {/* Bouton Submit */}
          <button
            type="submit"
            disabled={register.isPending}
            className="mt-8 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {register.isPending ? (
              <BiLoaderAlt className="animate-spin text-xl" />
            ) : (
              "S'inscrire"
            )}
          </button>

          <p className="text-gray-500/90 text-sm mt-4">
            Vous avez déjà un compte ?{" "}
            <Link className="text-indigo-400 hover:underline" href="/signin">Connectez-vous</Link>
          </p>
        </form>
      </div>
    </div>
  );
}