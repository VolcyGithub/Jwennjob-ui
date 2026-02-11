import React from "react";
import Image from "next/image";
import Link from "next/link";

const Faqs = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "Comment puis-je postuler à une offre ?",
            answer: "C'est très simple. Une fois que vous avez trouvé l'offre qui vous correspond, cliquez sur le bouton 'Postuler'. Vous pourrez alors envoyer votre CV et une lettre de motivation directement au recruteur via notre plateforme.",
        },
        {
            question: "Le service est-il gratuit pour les candidats ?",
            answer: "Oui, l'utilisation de JwennJob est entièrement gratuite pour tous les chercheurs d'emploi. Vous pouvez créer votre profil, rechercher des offres et postuler sans aucun frais caché.",
        },
        {
            question: "Comment certifier mon entreprise sur la plateforme ?",
            answer: "Pour devenir un recruteur certifié, vous devez remplir le formulaire de demande de partenariat dans la section 'Recruteurs'. Notre équipe examinera vos justificatifs légaux (NIF, Registre de commerce) sous 48h.",
        },
        {
            question: "Qu'est-ce que la série Culture+ ?",
            answer: "Culture+ est notre série exclusive de vidéos en immersion. Elle vous permet de découvrir les locaux, le quotidien des équipes et les valeurs des entreprises avant même d'envoyer votre candidature.",
        },
    ];

    return (
        <>
            <div className="max-w-6xl 2xl:max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 my-20">
                <img
                    className="max-w-2xl w-full rounded-4xl h-auto"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=830&h=844&auto=format&fit=crop"
                    alt="Équipe au travail"
                />
                <div className="max-md:my-6 my-12">
                    <p className="text-secondary text-sm font-medium uppercase tracking-widest">FAQ</p>
                    <h1 className="text-3xl font-semibold text-primary">Besoin d'aide ?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-4 border-b border-slate-100">
                        Trouvez les réponses aux questions les plus fréquentes sur l'utilisation de JwennJob, que vous soyez candidat ou recruteur.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer my-2 transition-all duration-500 ease-in-out" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium text-primary">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180 text-secondary" : "text-slate-400"} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Faqs;