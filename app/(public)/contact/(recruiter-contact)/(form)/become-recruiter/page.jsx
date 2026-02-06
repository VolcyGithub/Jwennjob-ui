"use client";

import { useState } from "react";
import { BiLoaderAlt, BiUser, BiBriefcase, BiEnvelope, BiPhone, BiBuildings, BiGlobe, BiMap, BiCheckShield, BiCloudUpload } from "react-icons/bi";

// Composant de champ de saisie
const InputField = ({ label, icon, error, ...props }) => (
  <div className="w-full mb-4">
    <label className="block text-xs font-bold text-primary mb-1.5 ml-1 uppercase tracking-tight">{label}</label>
    <div className="flex items-center w-full bg-white border border-gray-200 h-12 rounded-xl overflow-hidden pl-4 gap-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
      {icon}
      <input
        className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full pr-4"
        {...props}
      />
    </div>
    {error && <p className="text-red-500 text-[10px] mt-1 ml-1">{error}</p>}
  </div>
);

export default function EmployerRequestPage() {
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    nom_complet: "",
    fonction: "",
    email_pro: "",
    telephone: "",
    entreprise_nom: "",
    adresse_siege: "",
    site_web: "",
    taille_entreprise: "",
    description_breve: "",
    certifie: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    // Simulation d'envoi
    setTimeout(() => setIsPending(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white font-sans">
      
      {/* GAUCHE : Grand Texte & Copywriting */}
      <div className="w-full lg:w-1/2 bg-primary max-md:pt-30 p-10 lg:p-20 flex flex-col justify-center text-white">
        
        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8">
          Recrutez les <span className="text-secondary">meilleurs</span> talents de demain.
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
         Vous souhaitez en savoir plus sur nos produits et sur comment transformer l'expérience que vous proposez à vos candidats et employés ? Laissez nous vos coordonnées pour participer à une demo produit !
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary text-2xl">✓</div>
            <p className="text-lg font-medium">Accès au Data Center de talents</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary text-2xl">✓</div>
            <p className="text-lg font-medium">Système de filtrage intelligent</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary text-2xl">✓</div>
            <p className="text-lg font-medium">Support dédié et conseils RH</p>
          </div>

        </div>
      </div>

      {/* DROITE : Formulaire de demande */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 lg:pt-20 bg-gray-50">
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-8 lg:p-10 rounded-3xl shadow-2xl shadow-gray-200/50">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary">Demande pour devenir recruteur</h2>
            <p className="text-gray-400 text-sm mt-1">Nos équipes reviendront vers vous après vérification de vos pièces.</p>
          </div>

          {/* Section : Responsable */}
          <div className="mb-10">
            <h3 className="text-sm font-black text-secondary uppercase tracking-widest mb-4">Informations du Responsable</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <InputField label="Nom complet" placeholder="Jean Robert" icon={<BiUser className="text-gray-400" />} required />
              <InputField label="Fonction / Titre" placeholder="Directeur RH" icon={<BiBriefcase className="text-gray-400" />} required />
              <InputField label="E-mail professionnel" type="email" placeholder="hr@entreprise.com" icon={<BiEnvelope className="text-gray-400" />} required />
              <InputField label="Numéro de téléphone" type="tel" placeholder="+509 ...." icon={<BiPhone className="text-gray-400" />} required />
            </div>
          </div>

          {/* Section : Entreprise */}
          <div className="mb-10">
            <h3 className="text-sm font-black text-secondary uppercase tracking-widest mb-4">Informations sur l’Entreprise</h3>
            <InputField label="Nom de l'entreprise" placeholder="Nom officiel" icon={<BiBuildings className="text-gray-400" />} required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <InputField label="Adresse du siège social" placeholder="Port-au-Prince, Haïti" icon={<BiMap className="text-gray-400" />} required />
              <InputField label="Site Web" placeholder="https://www.site.com" icon={<BiGlobe className="text-gray-400" />} />
            </div>
            
            <div className="mt-2">
              <label className="block text-xs font-bold text-primary mb-1.5 ml-1 uppercase">Taille de l’entreprise</label>
              <select className="w-full bg-white border border-gray-200 h-12 rounded-xl px-4 outline-none text-sm text-gray-700 focus:border-primary appearance-none">
                <option>Sélectionnez une taille</option>
                <option>1–10 employés</option>
                <option>11–50 employés</option>
                <option>51–200 employés</option>
                <option>+ de 200 employés</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-bold text-primary mb-1.5 ml-1 uppercase">Description brève</label>
              <textarea className="w-full border border-gray-200 rounded-xl p-4 text-sm outline-none focus:border-primary min-h-[80px]" placeholder="Parlez-nous de vos activités..."></textarea>
            </div>
          </div>

          {/* Section : Pièces */}
          <div className="mb-10">
            <h3 className="text-sm font-black text-secondary uppercase tracking-widest mb-4">Pièces Justificatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer">
                <BiCloudUpload className="text-2xl text-primary" />
                <span className="text-[10px] text-center font-bold text-gray-500">Logo Entreprise<br/><span className="font-normal">PNG ou JPG (max 2Mo)</span></span>
              </div>
              <div className="p-4 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer">
                <BiCheckShield className="text-2xl text-primary" />
                <span className="text-[10px] text-center font-bold text-gray-500">Justificatif Légal<br/><span className="font-normal">NIF, Patent, etc. (PDF/JPG)</span></span>
              </div>
            </div>
          </div>

          {/* Validation */}
          <div className="mt-8">
            <label className="flex items-start gap-3 cursor-pointer mb-6">
              <input type="checkbox" className="mt-1 rounded text-primary focus:ring-primary w-4 h-4" required />
              <span className="text-[11px] text-gray-500 leading-tight">
                Je certifie que les informations fournies sont exactes et que je suis autorisé à représenter cette entreprise sur la plateforme <strong>JwennJob</strong>.
              </span>
            </label>

            <button
              type="submit"
              disabled={isPending}
              className="w-full h-14 bg-primary text-white font-black rounded-xl hover:bg-black transition-all disabled:opacity-50 flex items-center justify-center gap-3 tracking-widest text-sm"
            >
              {isPending ? <BiLoaderAlt className="animate-spin text-xl" /> : "SOUMETTRE MA DEMANDE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}