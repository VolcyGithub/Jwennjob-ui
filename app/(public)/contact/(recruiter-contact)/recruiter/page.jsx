"use client";
import { motion } from "framer-motion";
import { IoBusiness, IoPerson, IoCloudUpload, IoCheckmarkCircle, IoGlobeOutline } from "react-icons/io5";

export default function BecomeRecruiterPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-third pt-32 pb-20 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* EN-TÊTE IMMERSIF */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Devenir recruteur
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Recrutez les meilleurs talents avec <span className="text-secondary">JwennJob</span>.
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Remplissez ce formulaire pour soumettre votre entreprise. Notre équipe examinera votre demande sous 48h pour valider votre accès recruteur.
          </p>
        </motion.div>

        <form className="space-y-10">
          
          {/* SECTION 1 : RESPONSABLE */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/40"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary rounded-4xl text-white shadow-lg">
                <IoPerson size={24} />
              </div>
              <h2 className="text-xl font-black text-primary">Informations du Responsable</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Nom complet</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Ex: Jean Dupont" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Fonction / Titre</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Ex: DRH" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">E-mail professionnel</label>
                <input type="email" className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="nom@entreprise.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Numéro de téléphone</label>
                <input type="tel" className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="+509 ..." />
              </div>
            </div>
          </motion.section>

          {/* SECTION 2 : ENTREPRISE */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/40"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary rounded-4xl text-white shadow-lg">
                <IoBusiness size={24} />
              </div>
              <h2 className="text-xl font-black text-primary">Informations sur l’Entreprise</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Nom de l'entreprise</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Nom officiel" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Adresse du siège social</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Rue, Ville, Pays" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Site Web</label>
                <div className="relative">
                  <IoGlobeOutline className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="url" className="w-full bg-gray-50 border-none rounded-4xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="https://..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Taille de l’entreprise</label>
                <select className="w-full bg-gray-50 border-none rounded-4xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none appearance-none cursor-pointer">
                  <option>Sélectionnez une taille</option>
                  <option>1–10 employés</option>
                  <option>11–50 employés</option>
                  <option>51–200 employés</option>
                  <option>+ de 200 employés</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Description brève</label>
                <textarea rows="3" className="w-full bg-gray-50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none resize-none" placeholder="Expliquez votre activité..."></textarea>
              </div>
            </div>
          </motion.section>

          {/* SECTION 3 : DOCUMENTS & VALIDATION */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/40"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary rounded-4xl text-white shadow-lg">
                <IoCloudUpload size={24} />
              </div>
              <h2 className="text-xl font-black text-primary">Pièces Justificatives</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Upload Logo */}
              <div className="relative border-2 border-dashed border-gray-200 rounded-[2rem] p-8 text-center hover:border-secondary transition-colors cursor-pointer group">
                <IoCloudUpload size={32} className="mx-auto text-gray-300 group-hover:text-secondary mb-2" />
                <p className="text-sm font-bold text-gray-500">Logo Entreprise</p>
                <p className="text-[10px] text-gray-400">PNG ou JPG (max 2Mo)</p>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              {/* Upload Justificatif */}
              <div className="relative border-2 border-dashed border-gray-200 rounded-[2rem] p-8 text-center hover:border-secondary transition-colors cursor-pointer group">
                <IoCloudUpload size={32} className="mx-auto text-gray-300 group-hover:text-secondary mb-2" />
                <p className="text-sm font-bold text-gray-500">Justificatif Légal</p>
                <p className="text-[10px] text-gray-400">NIF, Patent, etc. (PDF/JPG)</p>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-50 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary" />
                <span className="text-xs text-gray-500 leading-relaxed">
                  Je certifie que les informations fournies sont exactes et que je suis autorisé à représenter cette entreprise sur la plateforme <strong>JwennJob</strong>.
                </span>
              </label>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-secondary text-white font-black py-5 rounded-4xl shadow-xl shadow-secondary/20 flex items-center justify-center gap-3 tracking-widest text-sm"
              >
                SOUMETTRE MA DEMANDE <IoCheckmarkCircle size={20} />
              </motion.button>
            </div>
          </motion.section>

        </form>
      </div>
    </main>
  );
}