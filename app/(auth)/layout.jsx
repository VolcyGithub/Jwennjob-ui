
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

export default function AuthLayout({ children }) {
  return <>{children}</>; 
}