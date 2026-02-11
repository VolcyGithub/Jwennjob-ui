"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BiBookmark } from "react-icons/bi";

export default function BlogSection() {
  const mostRead = [
    {
      id: 1,
      title: "Les 6 trucs ringards qu'on devrait réhabiliter au bureau",
      date: "1 mars 2024",
    },
    {
      id: 2,
      title: "Retrouver un sentiment de liberté, s'évader : pourquoi se couche-t-on si tard ?",
      date: "24 avril 2024",
    },
    {
      id: 3,
      title: "Entreprise toxique : pourquoi partir ne suffit pas à s'en remettre",
      date: "4 janvier 2024",
    },
    {
      id: 4,
      title: "Ces choses que vous auriez aimé savoir sur le travail avant la quarantaine",
      date: "15 mars 2024",
    }
  ];

  return (
    <section className="mx-auto max-w-7xl my-24 font-sans px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* COLONNE GAUCHE : DERNIER ARTICLE */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-black text-primary ">
              Dernier article
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            {/* Image Card */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-4xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                alt="Dernier article" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Contenu Texte sur Image */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-3xl md:text-4xl font-bold text-third leading-tight mb-6 max-w-2xl">
                  La bonne résolution 2026 ? Redevenir sa priorité n°1
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-third/80 text-sm font-medium">8 janvier 2026</span>
                  <button className="bg-third/10 hover:bg-third/20 p-2 rounded-full transition-colors">
                    <BiBookmark className="text-third text-2xl" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bouton Continuer de lire */}
            <Link href="/blog">
              <button className="w-full rounded-full bg-primary hover:bg-secondary text-white  py-4 transition-colors  text-sm shadow-sm">
                Continuer de lire
              </button>
            </Link>
          </motion.div>
        </div>

        {/* COLONNE DROITE : LES PLUS LUS */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-black text-primary">
              Les plus lus
            </h2>
          </div>

          <div className="space-y-8">
            {mostRead.map((article, index) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 group cursor-pointer mb-6 border-b border-gray-200 pb-4"
              >
                {/* Numérotation */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-secondary group-hover:text-third transition-colors">
                    {article.id}
                  </div>
                </div>

                {/* Titre et Date */}
                <div className="flex flex-col gap-1 border-b border-gray-100 pb-4 w-full">
                  <h4 className="font-bold text-primary leading-snug group-hover:text-secondary transition-colors underline decoration-transparent group-hover:decoration-secondary underline-offset-4">
                    {article.title}
                  </h4>
                  <span className="text-gray-400 text-xs mt-1">{article.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
           <Link href="/blog">
              <button className="w-full rounded-full bg-primary hover:bg-secondary text-white  py-4 transition-colors  text-sm shadow-sm">
                Continuer de lire
              </button>
            </Link>
        </div>

      </div>
    </section>
  );
}