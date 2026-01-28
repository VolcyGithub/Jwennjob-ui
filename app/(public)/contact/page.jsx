"use client";
import { motion } from "framer-motion";
import { IoMail, IoCall, IoLocation, IoSend } from "react-icons/io5";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  // Animation pour l'apparition en cascade des éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-third pt-32 pb-20 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* HEADER DE LA PAGE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-6">
            Parlons de votre <span className="text-secondary">futur</span>.
          </h1>
          <p className="text-gray-500 text-lg">
            Une question sur une offre ? Un besoin d'accompagnement ? Notre équipe est là pour vous répondre.
          </p>
          <p>Vous representez une entreprise ? Veuillez nous <Link href="/contact/recruiter" className="text-secondary font-bold">contacter ici</Link>.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* COLONNE GAUCHE : INFOS DE CONTACT */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-primary p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              <h2 className="text-2xl font-bold mb-8 relative z-10 text-white">Coordonnées</h2>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 bg-white/10 rounded-4xl group-hover:bg-secondary transition-colors text-white">
                    <IoMail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-black tracking-widest">Email</p>
                    <p className="font-bold">contact@jwennjob.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer text-white">
                  <div className="p-4 bg-white/10 rounded-4xl group-hover:bg-secondary transition-colors">
                    <IoCall size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-black tracking-widest text-white">Téléphone</p>
                    <p className="font-bold text-white">+509 (3136) 3481</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 bg-white/10 rounded-4xl group-hover:bg-secondary transition-colors text-white">
                    <IoLocation size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-black tracking-widest text-white">Bureau</p>
                    <p className="font-bold text-white">Pétion-Ville, Haïti</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4 relative z-10">
                <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-white"><FaLinkedin size={20}/></button>
                <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-white"><FaTwitter size={20}/></button>
                <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-white"><FaInstagram size={20}/></button>
              </div>
            </motion.div>

            {/* PETITE CARTE "RÉPONSE RAPIDE" */}
            <motion.div variants={itemVariants} className="bg-secondary/10 border border-secondary/20 p-8 rounded-[2.5rem]">
               <h3 className="font-black text-secondary uppercase text-xs tracking-widest mb-2">Engagement JwennJob</h3>
               <p className="text-primary font-bold">Nous répondons à toutes les demandes en moins de 24h ouvrées.</p>
            </motion.div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE GLASSMORPHISM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-7 bg-white/50 border border-gray-100 p-8 md:p-12 rounded-[3rem] shadow-xl shadow-gray-200/50"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 ml-4">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 ml-4">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 ml-4">Objet</label>
                <select className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 transition-all outline-none appearance-none">
                  <option>Question sur une offre</option>
                  <option>Aide pour mon CV</option>
                  <option>Support entreprise</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 ml-4">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Comment pouvons-nous vous aider ?" 
                  className="w-full bg-gray-50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white font-black py-5 rounded-4xl shadow-xl flex items-center justify-center gap-3 group transition-all"
              >
                ENVOYER MON MESSAGE
                <IoSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}