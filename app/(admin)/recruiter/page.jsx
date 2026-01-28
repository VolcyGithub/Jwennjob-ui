"use client";

import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import StatCard from "@/app/components/candidate/cards/StatCard";
import CandidateCard from "@/app/components/recruiter/cards/CandidateCard";
import CandidateCardSkeleton from "@/app/components/recruiter/cards/CandidateCardSkeleton";
import Application from "@/app/components/recruiter/tables/Application";
import { useUsers } from "@/app/lib/api/hooks/queries/useUsers";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BiBookmark,
  BiBriefcase,
  BiLogoWhatsapp,
  BiUserPlus,
} from "react-icons/bi";

export default function Index() {
  const { data, isLoading, error } = useUsers({ limit: 3 });
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
                  <span className="text-white/75">Bienvenue !</span> Recruteur
                </h1>
                <p className="text-white/60 max-md:line-clamp-2 mb-3 text-xs md:text-sm leading-relaxed">
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
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeleton-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="col-span-1">
                      <CandidateCardSkeleton />
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  {data.users.map((user) => (
                    <CandidateCard
                      data={{
                        id: user.id,
                        name: `${user.firstName} ${user.lastName}`,
                        email: user.email,
                        title: user.role.toUpperCase(),
                      }}
                      key={user.id}
                    />
                  ))}
                </div>
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                ></motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="col-span-1">
          <div className="flex my-6 text-sm md:text-md mb-6 justify-between items-center">
            <span className="text-primary font-bold">
              Candidatures récentes
            </span>
            <Link
              href="/candidate/applications"
              className="text-sm text-gray-500"
            >
              Voir les applications
            </Link>
          </div>
          <Application />
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
