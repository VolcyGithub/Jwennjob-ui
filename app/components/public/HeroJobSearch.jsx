"use client";
import Image from "next/image";
import TitleHead from "./TitleHead";
import Link from "next/link";
import TripletCards from "./TripletCards";

export default function HeroJobSearch() {
  return (
    <section className="bg-gray-30 pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0 2xl:max-w-screen-2xl py-12">
        <TitleHead
          title="Trouvez un job"
          subtitle="Vous avez le pouvoir d'écrire votre histoire. Find your people !"
        />
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center mt-16">
          {/* Left */}

          <div className="relative">
            <div className="relative w-full lg:h-[430px] rounded-4xl ">
              <TripletCards />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Entrez dans les coulisses
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg">
              Arrêtez de scroller sans fin sur des offres impersonnelles.
              Consultez seulement celles qui répondent à vos besoins grâce à nos
              filtres. Entrez dans les coulisses des entreprises, découvrez
              leurs valeurs et rencontrez votre future équipe.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Trouver un job
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 2xl:px-0 2xl:max-w-screen-2xl py-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center mt-16">
          <div className="space-y-6 max-md:order-last">
            <h3 className="text-3xl font-bold text-gray-900">
              Propulsez votre carrière avec un CV professionnel
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg">
              Ne perdez plus de temps sur la mise en forme. Utilisez notre outil natif pour créer un profil centralisé qui attire l'attention des recruteurs et générez un CV prêt à l'emploi en quelques clics.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span><strong>Générateur de CV intégré</strong> : Créez et mettez en forme votre CV directement sur la plateforme.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span><strong>Téléchargement PDF</strong> : Exportez votre CV professionnel instantanément pour vos candidatures externes.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span><strong>Visibilité accrue</strong> : Un profil complet permet à notre algorithme de vous suggérer des offres géolocalisées adaptées à vos compétences.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span><strong>Matching intelligent</strong> : Votre profil est automatiquement scanné pour vous connecter aux meilleures opportunités RH.</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/cv-builder"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg shadow-primary/20"
              >
                Créer mon CV gratuitement
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute "></div>
            <Image
              src="/cv-1.webp" 
              alt="Jwennjob CV Builder"
              width={600}
              height={500}
              className="relative z-10 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
