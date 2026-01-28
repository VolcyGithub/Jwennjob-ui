"use client";
import { motion } from "framer-motion";
import { FiChevronDown, FiSearch, FiShield } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const sections = [
    {
        title: "Termes & Conditions",
        id: "terms",
        subsections: [
            {
                title: "1. Acceptation des Conditions",
                content:
                    "En accédant et en utilisant Jwennjob, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser notre plateforme.",
            },
            {
                title: "2. Utilisation de la Plateforme",
                content:
                    "Vous vous engagez à utiliser Jwennjob uniquement à des fins légales et conformément à toutes les lois applicables. Vous ne devez pas : utiliser la plateforme de manière frauduleuse, harceler d'autres utilisateurs, ou publier du contenu illégal ou offensant.",
            },
            {
                title: "3. Comptes Utilisateurs",
                content:
                    "Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toute activité effectuée sous votre compte. Vous acceptez de notifier immédiatement Jwennjob de toute utilisation non autorisée de votre compte.",
            },
            {
                title: "4. Propriété Intellectuelle",
                content:
                    "Tout contenu, logo et marques sur Jwennjob sont la propriété de Jwennjob ou de ses partenaires. Vous n'êtes pas autorisé à reproduire ou distribuer ce contenu sans permission explicite.",
            },
            {
                title: "5. Limitation de Responsabilité",
                content:
                    "Jwennjob ne sera pas responsable des dommages indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser la plateforme.",
            },
        ],
    },
    {
        title: "Politique de Confidentialité",
        id: "privacy",
        subsections: [
            {
                title: "1. Collecte d'Informations",
                content:
                    "Nous collectons des informations personnelles telles que votre nom, email, numéro de téléphone, CV et données professionnelles pour faciliter votre expérience sur Jwennjob.",
            },
            {
                title: "2. Utilisation des Données",
                content:
                    "Vos données sont utilisées pour : créer et gérer votre compte, traiter vos candidatures, améliorer nos services, et vous envoyer des notifications pertinentes. Nous ne vendons pas vos données à des tiers.",
            },
            {
                title: "3. Sécurité des Données",
                content:
                    "Nous utilisons le chiffrement SSL et d'autres mesures de sécurité pour protéger vos informations personnelles contre l'accès non autorisé, la modification ou la divulgation.",
            },
            {
                title: "4. Partage d'Informations",
                content:
                    "Vos informations ne sont partagées que pour les besoins de la plateforme : avec les employeurs pour les candidatures, avec nos prestataires de services de confiance, et si la loi l'exige.",
            },
            {
                title: "5. Droits des Utilisateurs",
                content:
                    "Vous avez le droit d'accéder, de modifier ou de supprimer vos données personnelles. Pour exercer ces droits, contactez-nous à support@jwennjob.ht.",
            },
            {
                title: "6. Cookies",
                content:
                    "Jwennjob utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.",
            },
        ],
    },
];

function SectionItem({ title, content, index }) {
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
                <span className="font-bold text-lg text-primary">{title}</span>
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
                    {content}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function TermsPrivacyPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSections = sections.map((section) => ({
        ...section,
        subsections: section.subsections.filter(
            (item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.content.toLowerCase().includes(searchQuery.toLowerCase()),
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
                        <FiShield /> Conditions Légales
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                        Termes & Conditions <br />
                        <span className="text-secondary">et Confidentialité</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
                        Consultez nos conditions d'utilisation et notre politique de
                        confidentialité pour protéger vos données.
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
                            placeholder="Cherchez une section..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-6 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors"
                        />
                    </div>
                </motion.div>

                {/* SECTIONS */}
                <div className="space-y-16" id="{section.id}">
                    {filteredSections.map(
                        (section, sectionIndex) =>
                            section.subsections.length > 0 && (
                                <motion.div
                                    key={sectionIndex}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.subsections.map((item, index) => (
                                            <SectionItem
                                                key={index}
                                                title={item.title}
                                                content={item.content}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            ),
                    )}
                </div>

                {/* NO RESULTS */}
                {filteredSections.every((section) => section.subsections.length === 0) && (
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
                    <div className="flex-col md:flex md:items-center lg:flex-row gap-8 lg:gap-16 justify-center">
                        <Image
                            src="/global/gif/Shrug.gif"
                            alt="User"
                            width={300}
                            height={300}
                        />
                        <div className="block">
                            <h2 className="text-3xl font-black text-primary mb-4">
                                Vous avez d'autres questions ?
                            </h2>
                            <p className="text-primary/80 mb-8 text-lg">
                                Notre équipe support est là pour vous aider.
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
