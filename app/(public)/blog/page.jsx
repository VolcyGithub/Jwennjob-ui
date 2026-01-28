"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  FiSearch,
  FiCalendar,
  FiUser,
  FiArrowRight,
  FiTag,
  FiClock,
} from "react-icons/fi";

// --- DONNÉES SIMULÉES ---
const categories = [
  "Tous",
  "Conseils Carrière",
  "Recrutement",
  "Technologie",
  "Culture d'entreprise",
  "Entrepreneuriat",
];

const posts = [
  {
    id: 1,
    title: "Comment réussir son entretien d'embauche en 2024",
    excerpt:
      "Découvrez les nouvelles attentes des recruteurs et comment vous démarquer lors de vos futurs entretiens techniques et RH.",
    category: "Conseils Carrière",
    author: "Jean Dupont",
    date: "12 Mars 2024",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Le guide complet du télétravail en Haïti",
    excerpt:
      "Travailler à distance présente des défis uniques. Voici nos conseils pour rester productif et maintenir un équilibre vie pro/vie perso.",
    category: "Culture d'entreprise",
    author: "Marie Laurence",
    date: "10 Mars 2024",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Pourquoi la stack technique est cruciale pour votre carrière",
    excerpt:
      "Choisir les bons outils ne concerne pas seulement le projet actuel, mais définit votre trajectoire professionnelle sur le long terme.",
    category: "Technologie",
    author: "Pierre Richard",
    date: "05 Mars 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "L'importance de la marque employeur pour les PME",
    excerpt:
      "Comment les petites entreprises peuvent rivaliser avec les géants pour attirer les meilleurs talents locaux.",
    category: "Recrutement",
    author: "Sarah Jean",
    date: "01 Mars 2024",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "5 Soft Skills indispensables en 2024",
    excerpt:
      "Au-delà des compétences techniques, ce sont vos qualités humaines qui feront la différence auprès des recruteurs.",
    category: "Conseils Carrière",
    author: "Jean Dupont",
    date: "25 Février 2024",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "L'essor de la Fintech en Haïti",
    excerpt:
      "Analyse des opportunités d'emploi dans le secteur financier technologique en pleine expansion.",
    category: "Technologie",
    author: "Marie Laurence",
    date: "20 Février 2024",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

// --- COMPOSANT SKELETON ---
const BlogCardSkeleton = () => (
  <div className="bg-white rounded-4xl overflow-hidden border border-gray-100 h-full">
    <Skeleton height={240} />
    <div className="p-8 space-y-4">
      <Skeleton width="30%" height={20} />
      <Skeleton width="90%" height={28} />
      <Skeleton count={2} />
      <div className="pt-4 flex justify-between">
        <Skeleton width={100} height={16} />
        <Skeleton width={60} height={16} />
      </div>
    </div>
  </div>
);

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "Tous" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-third min-h-screen pb-24">
      <SkeletonTheme baseColor="#f3f4f6" highlightColor="#ffffff">
        {/* HERO SECTION */}
        <div className="relative flex flex-col items-center py-20 justify-center m-2 md:m-4 lg:m-6 rounded-4xl bg-primary text-white min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-4 w-full max-w-4xl"
          >
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              Le Mag Jwennjob
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Conseils, Tendances & <br />
              <span className="text-secondary">Inspirations Carrière.</span>
            </h1>

            {/* SEARCH BAR */}
            <div className="relative max-w-2xl mx-auto group">
              <div className="relative flex items-center bg-white p-2 rounded-full shadow-2xl">
                <FiSearch className="ml-6 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 bg-transparent outline-none text-gray-700 font-medium px-4"
                />
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold transition-all active:scale-95">
                  Rechercher
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 md:px-8 mt-16">
          {/* CATEGORIES FILTER */}
          <div className="mb-8">
            <Swiper
              spaceBetween={12}
              slidesPerView="auto"
              freeMode={true}
              modules={[FreeMode]}
              className="w-full"
              centerInsufficientSlides={true}
              grabCursor={true}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat} className="!w-auto py-1">
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      activeCategory === cat
                        ? "bg-secondary text-primary shadow-lg"
                        : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* BLOG GRID */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {isLoading ? (
                [1, 2, 3, 4, 5, 6].map((i) => <BlogCardSkeleton key={i} />)
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/blog/${post.id}`}
                      className="group block bg-white rounded-4xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                    >
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-primary tracking-widest flex items-center gap-2">
                          <FiTag className="text-secondary" /> {post.category}
                        </div>
                      </div>

                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-gray-400 text-xs font-bold mb-4">
                          <span className="flex items-center gap-1">
                            <FiCalendar className="text-secondary" />{" "}
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiClock className="text-secondary" />{" "}
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors mb-4 leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-gray-500 text-sm leading-relaxed mb-2 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                              <FiUser className="text-primary" />
                            </div>
                            <span className="text-xs font-bold text-gray-600">
                              {post.author}
                            </span>
                          </div>
                          <span className="text-primary font-black text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                            Lire la suite{" "}
                            <FiArrowRight className="text-secondary" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-gray-500 text-lg">
                    Aucun article ne correspond à votre recherche.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* NEWSLETTER CTA */}
          <section className="mt-32 bg-secondary rounded-[3rem] p-12 md:p-20 text-center text-primary relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Restez à l'affût des opportunités
            </h2>
            <p className="max-w-2xl mx-auto font-medium text-lg mb-10">
              Rejoignez notre channel WhatsApp pour recevoir nos derniers
              conseils carrière et les meilleures offres directement dans votre
              DM.
            </p>
            <div className="flex justify-center md:flex-row gap-4 max-w-lg mx-auto">
              <Link
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold transition-all active:scale-95"
              >
                Rejoindre le Channel WhatsApp
              </Link>
            </div>
          </section>
        </div>
      </SkeletonTheme>
    </main>
  );
}
