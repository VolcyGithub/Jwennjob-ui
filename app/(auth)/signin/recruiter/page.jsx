"use client";

import { useState } from "react";
import Link from "next/link";
import { useRecruiterLogin } from "@/features/auth/hooks/queries/useRecruierLogin";


// Composant Input réutilisable
const InputField = ({ icon, ...props }) => (
  <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-all">
    {icon}
    <input
      className="bg-transparent text-gray-700 placeholder-gray-500 outline-none text-sm w-full h-full pr-6"
      {...props}
    />
  </div>
);

// Icons
const EmailIcon = () => (
  <svg
    width="16"
    height="11"
    viewBox="0 0 16 11"
    fill="none"
    className="flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
      fill="#6B7280"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    width="13"
    height="17"
    viewBox="0 0 13 17"
    fill="none"
    className="flex-shrink-0"
  >
    <path
      d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
      fill="#6B7280"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-shrink-0 text-gray-500"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

const Separator = () => (
  <div className="flex items-center gap-4 w-full my-5">
    <div className="w-full h-px bg-gray-300/90" />
    <p className="text-nowrap text-sm text-gray-500/90">
      ou se connecter avec un e-mail
    </p>
    <div className="w-full h-px bg-gray-300/90" />
  </div>
);

export default function RecruiterLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const login = useRecruiterLogin();

   const handleSubmit = (e) => {
    e.preventDefault();
    login.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex h-[700px] w-full">
      {/* Image latérale */}
      <div className="w-full hidden md:block relative">
        <img
          className="h-full lg:h-screen object-cover brightness-50"
          src="/global/sign-image.webp"
          alt="Espace Recruteur"
        />
        <div className="absolute bottom-10 left-10 text-white max-w-md">
          <h3 className="text-2xl font-bold mb-2">
            Trouvez les meilleurs talents
          </h3>
          <p className="text-gray-200">
            Accédez à notre base de candidats qualifiés et gérez vos offres
            d'emploi en toute simplicité.
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <div className="w-full md:h-screen flex flex-col items-center justify-center pt-12 px-4 bg-gray-50">
        <Link href="/">
          <img className="w-32 mb-8 object-cover" src="/logo.webp" alt="Logo" />
        </Link>

        <form onSubmit={handleSubmit} className="w-full p-8 max-w-md flex flex-col items-center bg-white rounded-4xl">
          <h2 className="text-3xl text-primary font-semibold">Connexion</h2>
          <p className="text-sm text-gray-500/90 mt-6 text-center">
            <span className="text-blue-600 font-semibold">Bienvenue !</span>{" "}
            Connectez-vous pour gérer vos offres
          </p>

          <Separator />

          {/* Champ Code Entreprise (spécifique recruteur) */}
         
          <div className="mt-4 w-full">
            <InputField
              type="email"
              name="email"
              placeholder="E-mail professionnel"
              icon={<EmailIcon />}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4 w-full">
            <InputField
              type="password"
              name="password"
              placeholder="Mot de passe"
              icon={<LockIcon />}
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Options */}
          <div className="w-full flex items-center justify-between mt-6 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm cursor-pointer select-none"
              >
                Se souvenir de moi
              </label>
            </div>
            <Link
              href="/recruiter/forgot-password"
              className="text-sm underline hover:text-blue-600 transition-colors"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {/* Bouton Submit */}
          <button
            type="submit"
            className="mt-6 flex items-center justify-center gap-2 w-full h-11 rounded-full text-white bg-primary hover:bg-secondary transition-colors shadow-md hover:shadow-lg"
          >
            Se connecter
          </button>

          <div className="mt-6 pt-6 border-t border-gray-200 w-full text-center">
            <p className="text-gray-500/90 text-sm">
              Vous n'avez pas de compte entreprise ?{" "}
              <Link
                className="text-blue-600 hover:underline font-medium"
                href="/recruiter/register"
              >
                Créer un compte
              </Link>
            </p>
            <p className="text-gray-400 text-xs mt-3">
              Vous êtes candidat ?{" "}
              <Link
                className="text-gray-500 hover:text-gray-700 underline"
                href="/signin/candidte"
              >
                Connexion candidat
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
