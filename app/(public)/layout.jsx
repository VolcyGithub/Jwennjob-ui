import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import { ConnectProvider } from "@/contexts/ConnectContext";
import { cookies } from "next/headers";

export const metadata = {
  title: {
    default: "Jwennjob | Plateforme de recherche d'emploi en Haïti",
    template: "%s | Jwennjob",
  },
  description:
    "Trouvez l'emploi qui vous ressemble vraiment. Jwennjob connecte les talents haïtiens avec les meilleures entreprises certifiées.",
  keywords: [
    "emploi",
    "recrutement",
    "Haïti",
    "job",
    "travail",
    "carrière",
    "Jwennjob",
    "annonces",
  ],

  openGraph: {
    title: "Jwennjob - Propulsez votre carrière",
    description:
      "Découvrez des opportunités exclusives et la culture des entreprises en immersion avec Culture+.",
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
    description:
      "La plateforme moderne pour les talents et recruteurs en Haïti.",
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

export default async function PublicLayout({ children }) {
  const cookieStore = await cookies();
  const isConnected = cookieStore.get("candidate_token")?.value ? true : false;

  return (
    <ConnectProvider isConnected={isConnected}>
      <div className="antialiased bg-third">
        <Header />
        {children}
        <Footer />
      </div>
    </ConnectProvider>
  );
}
