// app/(global)/jobs/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaBookmark } from "react-icons/fa";
import { IoLocation, IoTime, IoCash, IoCalendar } from "react-icons/io5";
import { MdWork } from "react-icons/md";

/* ------------------------------------------------------------------ */
/* 1.  Données factices (remplacez par votre source réelle)           */
/* ------------------------------------------------------------------ */
const jobs = [
  {
    id: "1",
    banner: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    logo: "https://i.pravatar.cc/120?u=alpha",
    company: "AlphaTech",
    title: "Développeur Full-Stack React / Node",
    type: "Temps plein",
    location: "Pétion-Ville • Télé-travail 2j",
    salary: "100 000 – 130 000 HTG / mois",
    posted: "il y a 3 jours",
    description:
      "Nous recherchons un(e) développeur(se) full-stack passionné(e) pour renforcer notre équipe produit. Vous participerez à la conception, au développement et au déploiement de nouvelles fonctionnalités de notre plateforme SaaS.",
    missions: [
      "Développer des features end-to-end (React, Next.js, NestJS)",
      "Améliorer les performances et la qualité du code",
      "Participer aux revues de code et aux daily stand-ups",
      "Rédiger la documentation technique",
    ],
    profile: [
      "3+ ans avec React / Node",
      "Autonomie et bon niveau d’anglais",
      "Esprit d’équipe et passion pour les techs émergentes",
    ],
    perks: [
      "Tickets restaurant",
      "Prime de transport",
      "Assurance santé 100 % prise en charge",
      "Formation & conférences payées",
    ],
  },
  {
    id: "2",
    banner: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    logo: "https://i.pravatar.cc/120?u=beta",
    company: "BetaStore",
    title: "Responsable Marketing Digital",
    type: "Temps plein",
    location: "Delmas",
    salary: "80 000 – 100 000 HTG / mois",
    posted: "il y a 5 jours",
    description:
      "BetaStore, scale-up du e-commerce haïtien, recherche son/sa futur(e) responsable marketing pour accélérer la croissance.",
    missions: [
      "Piloter la stratégie marketing (SEO, SEA, RS)",
      "Optimiser le funnel de conversion",
      "Manager une équipe de 3 personnes",
      "Reporting hebdo à la direction",
    ],
    profile: [
      "2+ ans d’exp. en marketing digital",
      "Maîtrise de Google Ads & Meta Ads",
      "Esprit analytique et créatif",
    ],
    perks: [
      "Prime variable sur objectifs",
      "Journées remote illimitées",
      "Abonnement salle de sport",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 2.  generateStaticParams (obligatoire en output: "export")         */
/* ------------------------------------------------------------------ */
export async function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

/* ------------------------------------------------------------------ */
/* 3.  Page complète                                                  */
/* ------------------------------------------------------------------ */
export default function JobDetailPage({ params }) {
  const job = jobs.find((j) => j.id === params.id);
  if (!job) return <p className="p-10">Offre introuvable</p>;

  return (
    <main classname="min-vh-100">
      {/* HERO BANNER */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden">
        <Image
          src={job.banner}
          alt="bannière entreprise"
          fill
          className="object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-end px-6 md:px-16 lg:px-24 xl:px-32 pb-10">
          <div className="flex items-end gap-5">
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <Image src={job.logo} alt={job.company} fill className="object-cover" />
            </div>
            <div className="text-white">
              <p className="text-sm font-medium opacity-90">{job.company}</p>
              <h1 className="text-2xl md:text-4xl font-bold">{job.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* RUBAN INFOS */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white border-b">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-6 text-sm text-gray-700">
          <span className="flex items-center gap-2"><IoCash className="text-secondary" />{job.salary}</span>
          <span className="flex items-center gap-2"><IoLocation className="text-secondary" />{job.location}</span>
          <span className="flex items-center gap-2"><MdWork className="text-secondary" />{job.type}</span>
          <span className="flex items-center gap-2"><IoCalendar className="text-secondary" />{job.posted}</span>
          <button className="ml-auto flex items-center gap-2 text-secondary hover:underline">
            <FaBookmark /> Sauvegarder
          </button>
        </div>
      </div>

      {/* CONTENU */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Colonne gauche */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Description du poste</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Missions</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.missions.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Profil recherché</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.profile.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Avantages</h2>
              <div className="flex flex-wrap gap-3">
                {job.perks.map((p) => (
                  <span key={p} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                    {p}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Colonne droite sticky */}
          <aside className="space-y-6 self-start sticky top-10">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <button className="w-full bg-secondary text-white py-3 rounded-full hover:opacity-90 transition animate-pulse">
                Postuler maintenant
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">En 1 clic avec votre profil JwennJob</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">À propos</h3>
              <p className="text-sm text-gray-600">
                {job.company} est une scale-up haïtienne créée en 2019, spécialisée dans les solutions SaaS pour la gestion des
                ressources humaines.
              </p>
              <div className="mt-4 flex gap-2">
                <Link href="#" className="text-secondary hover:opacity-80"><FaLinkedin size={20} /></Link>
                <Link href="#" className="text-secondary hover:opacity-80"><FaTwitter size={20} /></Link>
                <Link href="#" className="text-secondary hover:opacity-80"><FaFacebook size={20} /></Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Partager l’offre</h3>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
                  <FaLinkedin /> LinkedIn
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
                  <FaTwitter /> Twitter
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}