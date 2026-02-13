"use client";

import Link from "next/link";
import Image from "next/image";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import StatCard from "@/features/candidate/shared/components/cards/StatCard";
import { BiFemale, BiLogoWhatsapp, BiMale, BiUser } from "react-icons/bi";
import { useRecruiterAuth } from "@/features/recruiter/shared/contexts/RecruiterContext";
import { JobSection } from "@/features/recruiter/jobs/components/sections/JobSection";
import { barOptions, doughnutOptions } from "@/config/options";
import BarSection from "@/components/charts/Bar";
import { DoughnutSection } from "@/components/charts/Doughnut";
import { mapBarChart, mapDoughnutChart } from "@/utils/functions/MapChartData";


export default function Index() {
  
  const {recruiter} = useRecruiterAuth();
  const educationStats = recruiter.candidate_stats.by_education;
  const departmentsStats = recruiter.candidate_stats.by_department;
  const overviewStats = recruiter.candidate_stats.overview;

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
          <div className="flex my-4 text-sm md:text-md justify-between items-center">
            <span className="text-primary font-bold">Overview</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={<BiUser className="size-8 text-primary" />}
              inverse={true}
              value={overviewStats.total}
              label="Candidats"
            />
            <StatCard
              icon={<BiMale className="size-8 text-primary" />}
              value={overviewStats.male}
              label="Hommes"
            />
            <StatCard
              icon={<BiFemale className="size-8 text-primary" />}
              value={overviewStats.female}
              label="Femmes"
            />
            <StatCard
              icon={<BiFemale className="size-8 text-primary" />}
              value={overviewStats.female}
              label="Femmes"
            />
          </div>
          <div className="flex my-4 text-sm md:text-md justify-between items-center">
            <span className="text-primary font-bold">Statistiques</span>
          </div>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
              <BarSection
                data={mapBarChart(
                  "Ventes 2024",
                  Object.keys(educationStats),
                  Object.values(educationStats),
                )}
                title="Répartition par niveau d'étude"
                options={barOptions}
              />
            </div>

            <div className="col-span-1">
              <div className="space-y-3">
                <DoughnutSection
                  data={mapDoughnutChart(
                    Object.keys(educationStats),
                    Object.values(educationStats),
                  )}
                  title="Répartition par niveau d'étude"
                  options={doughnutOptions}
                />
                <DoughnutSection
                  title="Répartition par departements"
                  data={mapDoughnutChart(
                    Object.keys(departmentsStats),
                    Object.values(departmentsStats),
                  )}
                  options={doughnutOptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex my-4 text-sm md:text-md justify-between items-center">
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
