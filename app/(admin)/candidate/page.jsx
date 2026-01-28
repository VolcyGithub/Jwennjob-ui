import Link from "next/link";
import Image from "next/image";
import StatCard from "@/app/components/candidate/cards/StatCard";
import ProgressBar from "@/app/components/candidate/stats/ProgressBar";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import ApplicationTable from "@/app/components/candidate/tables/ApplicationTable";
import { BiUser, BiBriefcase,BiStar,BiBookmark,BiLogoWhatsapp,} from "react-icons/bi";

export const metadata = {
  title: "Jwennjob | Candidate",
  description: "Jwennjob - Plateforme de recherche d'emploi",
};

export default function Home() {
  return (
    <div>
      <BreadCrumb
        items={[{ label: "Accueil", href: "/" }, { label: "Dashboard" }]}
      />

      <div className="grid w-full mt-4 gap-4 grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <div className="bg-primary mb-6 text-white w-full rounded-[2rem] py-3 px-5">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-md md:text-4xl">
                  <span className="text-white/75">Bienvenue !</span> John Doe
                </h1>
                <p className="text-white/60 max-md:line-clamp-2 mb-3 text-xs md:text-sm leading-relaxed">
                  Trouve l’opportunité qui te correspond parmi des centaines
                  d’offres d’emploi.
                </p>
                <Link
                  href="/student/courses/"
                  className="whitespace-nowrap rounded-full bg-white border border-white px-4 py-2 text-center text-sm font-medium tracking-wide text-primary transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75"
                  role="button"
                >
                  Trouver un emploi
                </Link>
              </div>
              <div>
                <Image
                  width="250"
                  height="250"
                  className="max-w-full h-auto"
                  src="/svgs/Hello-rafiki.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatCard
              icon={<BiUser className="size-8 text-primary" />}
              value={5238}
              label="Profile Views"
            />
            <StatCard
              icon={<BiBriefcase className="size-8 text-primary" />}
              value={42}
              label="Jobs Posted"
            />
            <StatCard
              icon={<BiStar className="size-8 text-primary" />}
              value={4.9}
              label="Average Rating"
            />
            <StatCard
              icon={<BiBookmark className="size-8 text-primary" />}
              value={128}
              label="Saved Items"
            />
          </div>
          {/* Last Applications */}
          <div className="flex my-6 justify-between items-center">
            <span className="text-primary font-bold">
              Derniers applications
            </span>
            <Link
              href="/candidate/applications"
              className="text-sm text-gray-500"
            >
              Voir tout
            </Link>
          </div>
          <ApplicationTable />
        </div>
        <div className="col-span-1">
          <div className="mb-2">
            <span className="block mb-4 font-bold text-primary text-md">
              Satistiques
            </span>
            <ProgressBar percentage={50} label="Completion Profil" />
            <ProgressBar percentage={80} label="Completion CV" />
            <div className="bg-primary mb-6 text-white w-full rounded-[2rem] py-6 px-5">
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
                    <span className="text-white/75">
                      Rejoignez notre chaine{" "}
                    </span>{" "}
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
                    <BiLogoWhatsapp className="size-6 text-green-500" />{" "}
                    Rejoindre maintenant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
