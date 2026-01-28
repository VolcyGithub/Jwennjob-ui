"use client";
import Image from "next/image";
import Link from "next/link";
import TitleHead from "./TitleHead";
import JobCard from "@/app/components/public/card/Jobcard";
import {
  IoBriefcaseOutline,
} from "react-icons/io5";
const jobs = [
  {
    id: 1,
    title: "Manager Communication",
    company: "Kolabo",
    location: "Paris",
    type: "CDD",
    sector: "Marketing & Communication",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "45 k€ - 55 k€",
    logo: "https://i.pravatar.cc/60?u=kol",
  },
  {
    id: 2,
    title: "Stage - Product Marketing",
    company: "SunBox",
    location: "Lyon",
    type: "Stage",
    sector: "Marketing & Communication",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "1 200 € / mois",
    logo: "https://i.pravatar.cc/60?u=sun",
  },
  {
    id: 3,
    title: "Corporate - H/F",
    company: "PayAyiti",
    location: "Remote",
    type: "CDI",
    sector: "Finance & Comptabilité",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "60 k€ - 70 k€",
    logo: "https://i.pravatar.cc/60?u=pay",
  },
  {
    id: 4,
    title: "Corporate - H/F",
    company: "PayAyiti",
    location: "Remote",
    type: "CDI",
    sector: "Finance & Comptabilité",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "60 k€ - 70 k€",
    logo: "https://i.pravatar.cc/60?u=pay",
  },
  {
    id: 5,
    title: "Corporate - H/F",
    company: "PayAyiti",
    location: "Remote",
    type: "CDI",
    sector: "Finance & Comptabilité",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "60 k€ - 70 k€",
    logo: "https://i.pravatar.cc/60?u=pay",
  },
  {
    id: 6,
    title: "Corporate - H/F",
    company: "PayAyiti",
    location: "Remote",
    type: "CDI",
    sector: "Finance & Comptabilité",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "60 k€ - 70 k€",
    logo: "https://i.pravatar.cc/60?u=pay",
  },
  {
    id: 7,
    title: "Développeur Fullstack",
    company: "AlphaTech",
    location: "Pétion-Ville",
    type: "CDI",
    sector: "Tech",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "50k - 80k HTG",
    logo: "https://i.pravatar.cc/60?u=alpha",
  },
  {
    id: 8,
    title: "Designer UI/UX",
    company: "Creative Studio",
    location: "Remote",
    type: "Freelance",
    sector: "Design",
    banner: "https://live.staticflickr.com/65535/53983207025_c40d7ab03b.jpg",
    salary: "1 000 € - 1 500 €",
    logo: "https://i.pravatar.cc/60?u=creative",
  },
];

export default function LatestJobs() {
  return (
    <section
      className="px-4 md:px-16 lg:px-24 xl:px-32 py-16 third"
      id="jobs-section"
    >
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <TitleHead
          title="Offres en vedette"
          subtitle="Découvrez une sélection d'opportunités triées sur le volet pour vous."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {jobs.slice(0, 6).map((j) => (
            <JobCard key={j.id} job={j} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            <IoBriefcaseOutline className="text-lg" />
            Toutes les offres
          </Link>
        </div>
      </div>
    </section>
  );
}
