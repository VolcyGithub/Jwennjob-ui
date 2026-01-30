"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaLinkedin, FaTwitter, FaFacebook, FaBookmark, FaInstagram, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import { IoLocation, IoTime, IoCash, IoCalendar, IoBriefcase } from "react-icons/io5";
import { MdPlayCircleFilled, MdArrowForward, MdWork } from "react-icons/md";

const jobs = [
  {
    id: "1",
    company: "AlphaTech",
    logo: "https://i.pravatar.cc/120?u=alpha",
    banner: "https://cdn-images.welcometothejungle.com/tpK0Q7rVQ4zddlrxaOkcUxD81WAzkDxXWtiyvMycBy8/rs:auto:400::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzU4MTQvMTcwODAxL2QwMTA3ZTgyLTQ2M2ItNGY5Yy1iNjExLWE1MTk3YmVhYzI0OC5qcGc",
    title: "Développeur Full-Stack React / Node",
    sector: "Environnement / Tech / SaaS",
    employees: "150 collaborateurs",
    founded: "Créée en 2019",
    type: "Temps plein (CDI)",
    location: "Pétion-Ville, Haiti",
    salary: "100 000 – 130 000 HTG",
    posted: "Hier",
    experience: "< 2 ans",
    education: "Bac +5 / Master",
    description: "Rejoindre AlphaTech c'est intégrer un Groupe International qui innove pour développer des solutions de demain. Nous recherchons un(e) développeur(se) full-stack passionné(e) pour renforcer notre équipe produit.",
    missions: ["Développer des features end-to-end", "Améliorer la qualité du code", "Participer aux daily stand-ups"],
    profile: ["Maîtrise de React & Node.js", "Curiosité et Rigueur", "La présentation d'un Portfolio est un plus"],
    perks: ["1-2 jours de télétravail", "Assurance santé complète", "Plan de développement professionnel"],
  }
];


export default function JobDetailPage({ params }) {
  const {id} = useParams();
  const job = jobs.find((j) => j.id === id);
  if (!job) return <div className="min-h-[80vh] flex items-center justify-center"><p className="p-10 text-center">Offre introuvable</p></div>;

  return (
    <main className="bg-[#fdfdfd] min-h-screen pb-50 font-sans text-gray-900 ">
      <div className="absolute top-0 left-0 w-full h-[400px] 2xl:h-[500px] overflow-hidden">
        <Image src={job.banner} alt="banner" width={200} height={400} className="w-full max-h-[500px] object-cover" />
      </div>
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 py-8 relative top-32 md:top-50">

        {/* HEADER SECTION */}


        {/* CONTENU PRINCIPAL + SIDEBAR */}
        <div className="grid lg:grid-cols-12 gap-10">

          {/* Job Details */}
          <div className="lg:col-span-8">
            <div className="border border-gray-100 rounded-4xl p-6 shadow-sm mb-8 bg-white">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded border p-1 bg-white">
                      <Image src={job.logo} alt="logo" width={48} height={48} className="object-contain" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wide">{job.company}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl text-primary font-bold mb-6 leading-tight">{job.title}</h1>

                  <div className="gap-y-4 text-sm">

                    <div className="flex flex-1 md:space-x-12 space-y-8 mb-6 flex-wrap md:flex-nowrap items-center">
                      <div className="space-y-3">
                        <h3 className="font-bold text-md mb-4 uppercase text-gray-500">Résumé du poste</h3>
                        <p className="flex items-center gap-2 text-gray-500 font-medium"><IoBriefcase className="text-gray-400" /> {job.type}</p>
                        <p className="flex items-center gap-2 text-gray-500 font-medium"><IoLocation className="text-gray-400" /> {job.location}</p>
                        <p className="flex items-center gap-2 text-gray-500 font-medium"><IoTime className="text-gray-400" /> Télétravail autorisé</p>
                      </div>
                      <div className="h-[150px] min-h-[1em] hidden md:block w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
                      <div className="space-y-3">
                        <h3 className="font-bold text-md mb-4 uppercase text-gray-500">Compétences & expertises</h3>
                        <p className="flex items-center gap-2 text-gray-500 font-medium"><IoCash className="text-gray-400" /> {job.salary}</p>
                        <p className="flex items-center gap-2 text-gray-500 font-medium"><IoCalendar className="text-gray-400" /> Début : ASAP</p>
                        <p className="flex items-center gap-2 text-gray-500 font-medium"><MdWork className="text-gray-400" /> Expérience : {job.experience}</p>
                      </div>
                    </div>

                  </div>

                  <div className="flex gap-3 w-full md:w-auto shrink-0">
                    <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all active:scale-95">Postuler</button>
                    <button className="flex items-center justify-center gap-2 border-2 border-gray-200 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-all">
                      <FaBookmark className="text-gray-400" /> Sauvegarder
                    </button>
                  </div>
                </div>


              </div>
            </div>
            <div className="bg-[#f8f8f8] rounded-4xl p-8 mb-8">
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <span className="w-6 h-1 bg-secondary" /> Le poste
              </h2>

              <div className="space-y-10">
                <section>
                  <h3 className="font-bold text-lg mb-4">Descriptif du poste</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-4">Missions</h3>
                  <ul className="space-y-3">
                    {job.missions.map((m, i) => (
                      <li key={i} className="flex gap-2 text-gray-700 font-medium">
                        <span className="text-secondary">—</span> {m}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-4">Profil recherché</h3>
                  <ul className="space-y-3">
                    {job.profile.map((p, i) => (
                      <li key={i} className="flex gap-2 text-gray-700 font-medium">
                        <span className="text-secondary">—</span> {p}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* SECTION "ENVIE D'EN SAVOIR PLUS" (VIDEOS) */}
            <div className="bg-white rounded-4xl p-8 border border-gray-100">
              <h2 className="text-2xl font-black mb-8">Envie d'en savoir plus ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((v) => (
                  <div key={v} className="group relative aspect-video rounded-4xl overflow-hidden cursor-pointer">
                    <Image src={job.banner} alt="Video thumb" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
                    <MdPlayCircleFilled className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90" size={64} />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold text-sm">Rencontrez l'équipe {v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ENTERPRISE (SIDEBAR) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-40 h-fit">

            {/* Discover the company */}
            <div className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-41">
                <Image src={job.banner} alt="Entreprise" fill className="object-cover" />
              </div>
              <div className="p-6 bg-primary">
                <h3 className="text-white text-xl font-bold mb-4">Découvrez l'entreprise</h3>
                <p className="text-xs font-medium mb-6 text-gray-300">Explorez la vitrine de l'entreprise ou suivez-la pour savoir si elle vous correspond vraiment !</p>
                <div className="flex flex-col gap-2">
                  <Link href="#" className="bg-secondary text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2">
                    Explorer l'entreprise <MdArrowForward />
                  </Link>
                  <button className="bg-white/20 hover:bg-white/30 text-white py-3 rounded-full font-bold text-sm transition-all border border-black/10">
                    Suivre
                  </button>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-black text-lg mb-6 flex items-center gap-2">
                <span className="w-4 h-1 bg-secondary" /> L'entreprise
              </h3>
              <div className="flex items-center gap-3 mb-6">
                <Image src={job.logo} alt="logo" width={40} height={40} className="rounded" />
                <span className="font-bold">{job.company}</span>
              </div>

              <div className="space-y-4 text-sm text-gray-600 mb-8">
                <p className="flex items-center gap-2"><IoLocation size={18} /> {job.sector}</p>
                <p className="flex items-center gap-2"><MdWork size={18} /> {job.employees}</p>
                <p className="flex items-center gap-2"><IoCalendar size={18} /> {job.founded}</p>
              </div>

              <Link href="#" className="flex items-center gap-2 text-secondary font-bold hover:underline mb-4">
                Voir le site <FaExternalLinkAlt size={12} />
              </Link>
              <Link href="#" className="flex items-center gap-2 text-secondary font-bold hover:underline">
                Voir toutes les offres <span className="bg-secondary/10 px-2 py-0.5 rounded text-xs">12</span>
              </Link>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-black text-lg mb-6">Les avantages</h3>
              <ul className="space-y-4 text-sm">
                {job.perks.map((p, i) => (
                  <li key={i} className="flex gap-2 font-medium text-gray-700">
                    <span className="text-secondary">●</span> {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Networks */}
            <div className="flex justify-center gap-6 py-4">
              <FaLinkedin size={22} className="text-gray-400 hover:text-secondary cursor-pointer" />
              <FaInstagram size={22} className="text-gray-400 hover:text-secondary cursor-pointer" />
              <FaTwitter size={22} className="text-gray-400 hover:text-secondary cursor-pointer" />
              <FaYoutube size={22} className="text-gray-400 hover:text-secondary cursor-pointer" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
  
}