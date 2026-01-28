"use client";
import { motion } from "framer-motion";
import { FiChevronDown, FiSearch, FiHelpCircle } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    category: "Candidats",
    questions: [
      {
        question: "Comment créer un compte sur Jwennjob ?",
        answer:
          "Cliquez sur 'Créer mon profil', remplissez vos informations personnelles et professionnelles, puis validez votre email. Vous pouvez commencer à candidater immédiatement.",
      },
      {
        question: "Comment postuler à une offre d'emploi ?",
        answer:
          "Consultez les offres disponibles, cliquez sur celle qui vous intéresse, et cliquez sur 'Postuler'. Vous pouvez personnaliser votre candidature avant d'envoyer.",
      },
      {
        question: "Puis-je modifier mon profil après inscription ?",
        answer:
          "Oui, accédez à vos paramètres de profil pour mettre à jour vos informations, votre photo, vos compétences et votre CV à tout moment.",
      },
      {
        question: "Comment savoir si ma candidature a été vue ?",
        answer:
          "Vous recevrez des notifications par email à chaque étape : réception, lecture et réponse du recruteur.",
      },
    ],
  },
  {
    category: "Entreprises",
    questions: [
      {
        question: "Comment poster une offre d'emploi ?",
        answer:
          "Créez un compte entreprise, accédez à la section 'Publier une offre', remplissez les détails du poste et publiez. Votre offre sera visible immédiatement.",
      },
      {
        question: "Combien coûte la publication d'une offre ?",
        answer:
          "Contactez notre équipe recrutement pour connaître nos tarifs et les options de visibilité adaptées à vos besoins.",
      },
      {
        question: "Comment gérer les candidatures reçues ?",
        answer:
          "Accédez à votre tableau de bord pour voir tous les candidats, les évaluer et communiquer directement avec eux.",
      },
      {
        question: "Puis-je obtenir une branding page personnalisée ?",
        answer:
          "Oui, nous proposons des pages d'entreprise customisées pour mettre en avant votre culture et vos valeurs. Contactez notre équipe.",
      },
    ],
  },
  {
    category: "Général",
    questions: [
      {
        question: "Comment contacter le support ?",
        answer:
          "Utilisez le formulaire de contact ou envoyez un email à support@jwennjob.ht. Nous répondons généralement sous 24h.",
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer:
          "Absolument. Nous utilisons le chiffrement SSL et respectons les normes de sécurité les plus strictes pour protéger vos informations.",
      },
      {
        question: "Jwennjob est-il gratuit pour les candidats ?",
        answer:
          "Oui, la création de compte et la candidature sont totalement gratuites pour les candidats.",
      },
      {
        question: "Puis-je supprimer mon compte ?",
        answer:
          "Oui, accédez à vos paramètres et cliquez sur 'Supprimer mon compte'. Vos données seront effacées selon nos politiques de confidentialité.",
      },
    ],
  },
];

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-secondary transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-bold text-lg text-primary">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-secondary text-2xl" />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.map((section) => ({
    ...section,
    questions: section.questions.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  }));

  return (
    <main className="bg-third min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="relative flex flex-col items-center py-20 justify-center m-2 md:m-4 lg:m-6 rounded-4xl bg-primary text-white min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block flex items-center justify-center gap-2">
            <FiHelpCircle /> Aide et FAQ
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            Nous sommes là <br />
            <span className="text-secondary">pour vous aider.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Trouvez les réponses à vos questions et découvrez comment tirer le
            meilleur parti de Jwennjob.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-4xl 2xl:max-w-screen-2xl px-4 md:px-8 mt-20">
        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 relative"
        >
          <div className="relative">
            <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
            <input
              type="text"
              placeholder="Cherchez une réponse..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* FAQ SECTIONS */}
        <div className="space-y-16 2xl:flex 2xl:space-y-0 2xl:space-x-12">
          {filteredFaqs.map(
            (section, sectionIndex) =>
              section.questions.length > 0 && (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
                    {section.category}
                  </h2>
                  <div className="space-y-4">
                    {section.questions.map((item, index) => (
                      <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              ),
          )}
        </div>

        {/* NO RESULTS */}
        {filteredFaqs.every((section) => section.questions.length === 0) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500">
              Aucun résultat pour "{searchQuery}". Essayez d'autres termes.
            </p>
          </motion.div>
        )}

        {/* CONTACT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-4xl p-12 text-center mt-24"
        >
          <div className="flex-col md:flex md:items-center lg:flex-row  gap-8 lg:gap-16 justify-center">
            <Image
              src="/global/gif/Shrug.gif"
              alt="User"
              width={300}
              height={300}
            />
            <div className="block">
              <h2 className="text-3xl font-black text-primary mb-4">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="text-primary/80 mb-8 text-lg">
                Notre équipe support est prête à vous aider.
              </p>
              <a
                href="mailto:support@jwennjob.ht"
                className="inline-block bg-primary text-white px-12 py-4 rounded-full font-black text-lg hover:bg-primary/90 transition-all"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
