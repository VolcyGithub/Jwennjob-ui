"use client";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-third max-md:m-3 m-6 rounded-4xl overflow-hidden">
      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-transparent to-black px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col lg:items-center lg:items-start">
              <div className="rounded-xl lg:p-3 relative lg:right-5 mb-6 flex items-center text-lg font-bold gap-1">
                <img
                  src="/global/IMG_9416.PNG"
                  className="w-10 h-10 object-contain"
                  alt="Jwennjob Logo"
                />
                WENNJOB
              </div>
              <p className="text-third/60 md:text-center lg:text-left leading-relaxed mb-6">
                JwennJob est le cœur de la communauté professionnelle en Haïti,
                reliant les recruteurs et les candidats grâce à des ressources
                fiables à travers le pays.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-third/70">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-third" />
                  <span>+509 (3136) 34-81</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-third" />
                  <span>contact@jwennjob.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-third" />
                  <span>Port-au-prince, Haïti</span>
                </div>
              </div>
            </div>
          </div>


                <div className="hidden md:block">
                <h3 className="text-xl font-bold mb-6 text-third relative">
                  Liens Rapides
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-third rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {[
                  { label: "Accueil", href: "/" },
                  { label: "Emplois", href: "/jobs" },
                  { label: "Créer un CV", href: "/cv-builder" },
                  { label: "Devenir Recruteur", href: "/contact/recruiter" },
                  
                  ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                    href={href}
                    className="text-third/60 hover:text-third transition-colors duration-300 flex items-center group"
                    >
                    <span className="w-0 group-hover:w-2 h-px bg-third transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {label}
                    </Link>
                  </li>
                  ))}
                </ul>
                </div>

                  {/* Secteurs populaires */}
                  <div>
                  <h3 className="text-xl font-bold mb-6 text-third relative">
                   Liens Utiles
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-third rounded-full"></div>
                  </h3>
                  <ul className="space-y-3">
                    {[
                    { label: "À Propos", href: "/about" },
                    { label: "Blog", href: "/blog" },
                    { label: "Contact", href: "/contact" },
                    { label: "Aide & FAQ", href: "/faq" },
                    
                    ].map(({ label, href }) => (
                    <li key={label}>
                      <Link
                      href={href}
                      className="text-third/60 hover:text-third transition-colors duration-300 flex items-center group"
                      >
                      <span className="w-0 group-hover:w-2 h-px bg-third transition-all duration-300 mr-0 group-hover:mr-3"></span>
                      {label}
                      </Link>
                    </li>
                    ))}
                  </ul>
                  </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-third relative">
              Support
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-third rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Aide & FAQ", href: "/faq" },
                { label: "Termes & Conditions", href: "/privacy/#terms" },
                { label: "Politique de Confidentialité", href: "/privacy" },
              ].map((support) => (
                <li key={support.label}>
                  <Link
                    href={support.href}
                    className="text-third/60 hover:text-third transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-third transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {support.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black pt-4 border-t border-third/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex space-x-6 mb-4">
              {[
                {
                  icon: FaFacebook,
                  label: "Facebook",
                  color: "hover:text-third",
                },
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  color: "hover:text-third",
                },
                { icon: FaTiktok, label: "Twitter", color: "hover:text-third" },
              ].map(({ icon: Icon, label, color }) => (
                <a
                  key={label}
                  href="#"
                  className={`text-third/60 ${color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-third/60 text-sm">
              © {new Date().getFullYear()} Jwennjob. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
