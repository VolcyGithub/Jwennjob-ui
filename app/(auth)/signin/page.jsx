"use client";

import { useState } from "react";
import Link from "next/link";
import { useCandidateLogin } from "@/app/lib/api/hooks/mutations/useCandidateLogin";
import { BiLoaderAlt } from "react-icons/bi";

// Composant Input réutilisable
const InputField = ({ icon, ...props }) => (
  <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
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

const Separator = () => (
  <div className="flex items-center gap-4 w-full my-5">
    <div className="w-full h-px bg-gray-300/90" />
    <p className="text-nowrap text-sm text-gray-500/90">
      ou se connecter avec un e-mail
    </p>
    <div className="w-full h-px bg-gray-300/90" />
  </div>
);

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const login = useCandidateLogin();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login.mutate(formData);
  };

  return (
    <div className="flex h-[700px] w-full">
      {/* Image latérale */}
      <div className="w-full hidden md:block">
        <img
          className="h-full lg:h-screen object-cover brightness-50"
          src="/global/sign-image.webp"
          alt="Connexion"
        />
      </div>

      {/* Formulaire */}
      <div className="w-full md:h-screen flex flex-col items-center justify-center pt-12 px-4">
        <Link href="/">
          <img className="w-30 mb-2 object-cover" src="/logo.webp" alt="Logo" />
        </Link>

        <form
          onSubmit={handleSubmit}
          className="md:w-96 w-full p-6 max-w-sm flex flex-col items-center"
        >
          <h2 className="text-4xl text-primary font-medium">Connexion</h2>
          <p className="text-sm text-gray-500/90 mt-3 text-center">
            <span className="text-secondary font-semibold">Bienvenue !</span>{" "}
            Connectez-vous pour continuer
          </p>

          {/* Bouton Google */}
          <button
            type="button"
            className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full hover:bg-gray-500/20 transition-colors"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="Google"
            />
            <span className="text-sm ml-3">Se connecter avec Google</span>
          </button>

          <Separator />

          {/* Champs Email & Password */}
          <InputField
            type="email"
            name="email"
            placeholder="E-mail"
            icon={<EmailIcon />}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="mt-6 w-full">
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
          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm cursor-pointer select-none"
              >
                Se souvenir de moi
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm underline hover:text-primary transition-colors"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {/* Bouton Submit */}
          <button
            type="submit"
            className="mt-8 flex items-center justify-center gap-2 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity"
          >
            {login.isPending ? (
              <BiLoaderAlt className="animate-spin text-xl" />
            ) : (
              "Se connecter"
            )}
          </button>

          <p className="text-gray-500/90 text-sm mt-4">
            Vous n'avez pas de compte ?{" "}
            <Link className="text-indigo-400 hover:underline" href="/signup">
              S'inscrire
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
