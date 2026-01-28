import Footer from "@/app/components/public/Footer";
import Header from "@/app/components/public/Header";

export const metadata = {
  title: {
    default: "Jwennjob | Plateforme de recherche d'emploi en Haïti",
    template: "%s | Jwennjob"
  },
  description: "Trouvez l'emploi qui vous ressemble vraiment. Jwennjob connecte les talents haïtiens avec les meilleures entreprises certifiées.",
  keywords: ["emploi", "recrutement", "Haïti", "job", "travail", "carrière", "Jwennjob", "annonces"],

  openGraph: {
    title: "Jwennjob - Propulsez votre carrière",
    description: "Découvrez des opportunités exclusives et la culture des entreprises en immersion avec Culture+.",
    url: "https://jwennjob.com",
    siteName: "Jwennjob",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Aperçu de la plateforme Jwennjob",
      },
    ],
    locale: "fr_HT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jwennjob | Trouvez votre futur emploi",
    description: "La plateforme moderne pour les talents et recruteurs en Haïti.",
    images: ["/og-image.jpg"],
    creator: "@jwennjob",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
 
  alternates: {
    canonical: "https://jwennjob.com",
  },
};

export default function PublicLayout({ children }) {
  return (
      <div className={`antialiased bg-third`}>
        <Header/>
        {children}
        <Footer/>
      </div>
  );
}

        
        
