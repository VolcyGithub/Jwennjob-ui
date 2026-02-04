"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { useCandidateConnected } from "@/app/lib/contexts/ConnectContext";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/jobs", label: "Emplois" },
  { href: "/enterprises", label: "Recruteurs" },
  { href: "/cv", label: "Créer un CV" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {

  const {isConnected} = useCandidateConnected();



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="fixed z-50">
     <header className="px-4 py-2 bg-white/80 w-[350px] lg:w-[800px] backdrop-blur fixed top-5 left-1/2 -translate-x-1/2 z-50 mt-6 rounded-4xl transition">
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="https://jwennjob.com/assets/j-logo.png"
              alt="JwennJob Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop pills */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-4xl text-sm text-gray-700 hover:bg-primary hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={isConnected ? "/candidate" : "/signin"}
              className="ml-2 px-4 py-2 rounded-4xl text-sm bg-secondary text-white hover:opacity-90 transition"
            >
             {isConnected ? "Mon compte" : "Se connecter"}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-4xl text-primary hover:bg-gray-100"
            aria-label="Menu"
          >
            {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu (pill vertical) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
        >
          <nav className="flex flex-col items-center gap-3 py-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className="w-full max-w-xs text-center px-4 py-2 rounded-4xl text-sm text-gray-700 bg-gray-50 hover:bg-primary hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={isConnected ? "/candidate" : "/signin"}
              onClick={() => setIsMenuOpen(false)}
              className="w-full max-w-xs text-center px-4 py-2 rounded-4xl text-sm bg-primary text-white hover:opacity-90 transition"
            >
              {isConnected ? "Mon compte" : "Se connecter"}
            </Link>
          </nav>
        </div>
      </header>

      {/* Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="https://jwennjob.com/assets/j-logo.png"
                alt="JwennJob Logo"
                width={80}
                height={80}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}