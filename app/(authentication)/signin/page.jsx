import Link from "next/link";

export const metadata = {
  title: "Connexion",
  description:
    "Connectez-vous à votre compte Jwennjob pour accéder à des milliers d'offres d'emploi en Haïti.",
  keywords: [
    "connexion",
    "se connecter",
    "Jwennjob",
    "emploi Haïti",
    "recrutement",
  ],
  openGraph: {
    title: "Jwennjob - Connexion",
    description:
      "Connectez-vous et continuez votre recherche d'emploi sur Jwennjob.",
    url: "https://jwennjob.com/signin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jwennjob - Connexion",
    description:
      "Accédez à votre profil et gérez vos candidatures dès aujourd'hui.",
  },
};

export default function Example() {
  return (
    <div className="flex h-[700px] w-full">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full lg:h-screen object-cover brightness-50"
          src="/global/sign-image.webp"
          alt="Image de connexion"
        />
      </div>

      <div className="w-full md:h-screen flex flex-col items-center justify-center pt-12">
        <Link href="/">
          <img
            className="w-50 mb-8 object-cover"
            src="/logo.webp"
            alt="Image de connexion"
          />
        </Link>
        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-primary font-medium">Connexion</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            <span className="text-secondary font-semibold">Bienvenue !</span>{" "}
            Connectez-vous pour continuer
          </p>

          <button
            type="button"
            className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="Logo Google"
            />{" "}
            <span className="text-sm ml-3">Se connecter avec Google</span>
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              ou se connecter avec un e-mail
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              placeholder="E-mail"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              placeholder="Mot de passe"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Se souvenir de moi
              </label>
            </div>
            <a className="text-sm underline" href="#">
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity"
          >
            Se connecter
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
