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
              Laissez les jobs venir à vous
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg">
              Ne soyez plus seulement la personne qui cherche. Soyez aussi celle
              que l’on trouve. Créez gratuitement votre profil, indiquez votre
              disponibilité et les entreprises qui recrutent vous contacteront
              directement pour vous proposer des opportunités.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Recevoir des opportunités
            </Link>
          </div>

          <div className="relative">
            <Image src="/Agreement.gif" alt="User" width={600} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
}
