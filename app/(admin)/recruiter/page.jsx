"use client";

import Link from "next/link";
import Image from "next/image";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import StatCard from "@/features/candidate/shared/components/cards/StatCard";
import {
  BiBookmark,
  BiBriefcase,
  BiLogoWhatsapp,
  BiUserPlus,
} from "react-icons/bi";
import { useRecruiterAuth } from "@/features/recruiter/shared/contexts/RecruiterContext";
import { JobSection } from "@/features/recruiter/jobs/components/sections/JobSection";
import { barOptions, doughnutOptions } from "@/config/options";
import BarSection from "@/components/charts/Bar";
import { DoughnutSection } from "@/components/charts/Doughnut";

export default function Index() {
  const {
    recruiter,
    isLoading: authLoading,
    error: authError,
  } = useRecruiterAuth();

  // const {competences} = useStatsCompetences();
  // const labels = competences.map(c => c.title )
  // const data = competences.map(c => c.count )

  const barData = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    datasets: [
      {
        label: "Ventes 2024",
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: [
          "rgba(198, 209, 255)",
          "rgba(163, 179, 254)",
          "rgba(127, 138, 250)",
          "rgba(96, 99, 244)",
          "rgba(77, 67, 232)",
          "rgba(65, 53, 205)",
        ],
        borderColor: [
          "rgb(198, 209, 255)",
          "rgb(163, 179, 254)",
          "rgb(127, 138, 250)",
          "rgb(96, 99, 244)",
          "rgb(77, 67, 232)",
          "rgb(65, 53, 205)",
        ],
        borderWidth: 5,
        borderRadius: 15,
        barThickness: 20,
        borderSkipped: false,
      },
    ],
  };

  // Données pour le graphique en anneau - Répartition des ventes
  const doughnutData = {
    labels: ["Électronique", "Mode", "Maison", "Sport", "Livres"],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          "rgba(198, 209, 255)",
          "rgba(163, 179, 254)",
          "rgba(127, 138, 250)",
          "rgba(96, 99, 244)",
          "rgba(77, 67, 232)",
          "rgba(65, 53, 205)",
        ],
        borderColor: [
          "rgb(198, 209, 255)",
          "rgb(163, 179, 254)",
          "rgb(127, 138, 250)",
          "rgb(96, 99, 244)",
          "rgb(77, 67, 232)",
          "rgb(65, 53, 205)",
        ],
        borderWidth: 5,
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Accueil", href: "/recruiter" },
          { label: "Dashboard" },
        ]}
      />
      <div className="grid w-full mt-4 gap-4 grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <div className="bg-primary mb-6 text-white w-full rounded-[2rem] py-4 px-5">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-md md:text-4xl">
                  <span className="text-white">{recruiter.nom}</span>
                </h1>
                <p className="text-white/60 max-md:line-clamp-2 mb-6 text-xs md:text-sm leading-relaxed">
                  Découvrez les meilleurs talents et publiez vos offres d'emploi
                  pour trouver les candidats idéaux.
                </p>
                <Link
                  href="/recruiter/jobs/create"
                  className="whitespace-nowrap rounded-full bg-white border border-white px-4 py-2 text-center text-sm font-medium tracking-wide text-primary transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75"
                  role="button"
                >
                  Publier une offre
                </Link>
              </div>
              <div>
                <Image
                  width="250"
                  height="250"
                  className="max-w-full h-auto"
                  src="/svgs/Resume-amico.webp"
                  alt="Recrutement"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              icon={<BiUserPlus className="size-8 text-primary" />}
              value={5238}
              label="Profil Enregistrés"
            />
            <StatCard
              icon={<BiBriefcase className="size-8 text-primary" />}
              value={42}
              label="Emplois"
            />
            <StatCard
              icon={<BiBookmark className="size-8 text-primary" />}
              value={128}
              label="Saved Items"
            />
          </div>
          <div className="flex my-6 text-sm md:text-md justify-between items-center">
            <span className="text-primary font-bold">Applications Graphe</span>
            <Link
              href="/candidate/applications"
              className="text-sm text-gray-500"
            >
              Voir les applications
            </Link>
          </div>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
              <BarSection data={barData} options={barOptions} />
            </div>
            <div className="col-span-1">
              <DoughnutSection data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex my-6 text-sm md:text-md mb-6 justify-between items-center">
            <span className="text-primary font-bold">Emplois récents</span>

            <Link href="/recruiter/jobs" className="text-sm text-gray-500">
              Voir les applications
            </Link>
          </div>
          <JobSection count={5} />

          <div className="bg-primary my-6 text-white w-full rounded-[2rem] py-6 px-5">
            <div className="flex flex-col items-center justify-between">
              <div>
                <Image
                  width="200"
                  height="200"
                  className="max-w-full h-auto"
                  src="/svgs/Chat-rafiki.png"
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-md md:text-2xl">
                  <span className="text-white/75">Rejoignez notre chaine </span>{" "}
                  Whatsapp
                </h1>
                <p className="text-white/60 max-md:line-clamp-2 mb-3 text-xs md:text-sm leading-relaxed">
                  Restez connecter à notre chaine pour etre notifié des
                  nouvelles offres d'emplois
                </p>
                <Link
                  href="/student/courses/"
                  className="whitespace-nowrap flex gap-2 items-center w-fit rounded-full bg-white border border-white px-4 py-2 text-center text-sm font-medium tracking-wide text-primary transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75"
                  role="button"
                >
                  <BiLogoWhatsapp className="size-6 text-green-500" /> Rejoindre
                  maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
