"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiAward, FiHeart, FiArrowRight } from "react-icons/fi";

const stats = [
  { label: "Candidats inscrits", value: "10k+", icon: <FiUsers className="text-secondary" /> },
  { label: "Entreprises partenaires", value: "500+", icon: <FiAward className="text-secondary" /> },
  { label: "Offres d'emploi", value: "2k+", icon: <FiTarget className="text-secondary" /> },
  { label: "Recrutements réussis", value: "1.5k+", icon: <FiHeart className="text-secondary" /> },
];

const values = [
  {
    title: "Innovation",
    description: "Nous repensons constamment le recrutement pour le rendre plus humain et efficace grâce à la technologie.",
    icon: <FiUsers />,
  },
  {
    title: "Transparence",
    description: "Nous croyons en une communication honnête et bidirectionnelle entre les candidats et les entreprises.",
    icon: <FiAward />,
  },
  {
    title: "Impact Social",
    description: "Notre mission est de dynamiser le marché de l'emploi en Haïti et de valoriser les talents locaux.",
    icon: <FiHeart />,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-third min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="relative flex flex-col items-center py-20 justify-center m-2 md:m-4 lg:m-6 rounded-4xl bg-primary text-white min-h-[60vh] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Notre Vision</span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            Plus qu'une plateforme, <br />
            <span className="text-secondary">une mission.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Jwennjob est né de la volonté de transformer le paysage professionnel en Haïti en connectant les meilleurs talents avec des opportunités qui ont du sens.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:max-w-screen-2xl mt-20">
        
        {/* NOTRE HISTOIRE */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-8">Notre Histoire</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Fondée en 2023, Jwennjob a commencé avec une observation simple : le marché de l'emploi en Haïti manquait de visibilité et de modernité. Les talents peinaient à trouver des entreprises qui partageaient leurs valeurs, et les recruteurs avaient du mal à identifier les profils qualifiés.
              </p>
              <p>
                Nous avons décidé de créer un pont. Une plateforme où la culture d'entreprise est mise en avant, où le processus de candidature est fluide, et où chaque professionnel peut trouver le job qui lui ressemble vraiment.
              </p>
              <p className="font-bold text-primary italic">
                "Notre objectif est de faire de Jwennjob le partenaire de confiance de chaque carrière en Haïti."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] rounded-4xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Équipe Jwennjob" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-2xl font-black">L'équipe Jwennjob</p>
              <p className="text-white/80">Passionnée par l'innovation et l'impact.</p>
            </div>
          </motion.div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-4xl border border-gray-100 text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6 text-4xl">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* NOS VALEURS */}
        <div className="bg-primary rounded-[3.5rem] p-10 md:p-24 text-white mb-32 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Ce qui nous anime au quotidien</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Nos valeurs ne sont pas juste des mots sur un mur, elles guident chaque fonctionnalité que nous développons.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300 inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-black text-secondary mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION RECRUTEURS / CANDIDATS */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="bg-white p-12 rounded-4xl border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black text-primary mb-6">Pour les Talents</h3>
              <p className="text-gray-500 text-lg mb-8">
                Ne cherchez plus seulement un salaire, cherchez un projet qui vous passionne. Accédez à des offres exclusives et découvrez l'envers du décor des entreprises.
              </p>
            </div>
            <Link href="/signup" className="flex items-center gap-2 text-secondary font-black text-lg hover:gap-4 transition-all">
              Créer mon profil <FiArrowRight />
            </Link>
          </div>
          
          <div className="bg-secondary p-12 rounded-4xl flex flex-col justify-between text-primary">
            <div>
              <h3 className="text-3xl font-black mb-6">Pour les Entreprises</h3>
              <p className="font-medium text-lg mb-8">
                Attirez les meilleurs profils en mettant en avant votre culture, vos valeurs et votre équipe. Jwennjob est votre meilleur allié pour votre marque employeur.
              </p>
            </div>
            <Link href="/become-recruiter" className="flex items-center gap-2 font-black text-lg hover:gap-4 transition-all">
              Commencer à recruter <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center py-20">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-10">Rejoignez le mouvement.</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/jobs" 
              className="bg-primary text-white px-12 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-primary/90 transition-all active:scale-95"
            >
              Explorer les offres
            </Link>
            <Link 
              href="/enterprises" 
              className="bg-white text-primary border-2 border-primary px-12 py-5 rounded-full font-black text-lg hover:bg-gray-50 transition-all active:scale-95"
            >
              Découvrir les entreprises
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

