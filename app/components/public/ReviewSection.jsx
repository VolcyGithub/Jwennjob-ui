"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TitleHead from "./TitleHead";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    company: "Kolabo",
    logo: "https://i.pravatar.cc/60?u=kol",
    rating: 5,
    review:
      "JwennJob a transformé notre processus de recrutement. Nous trouvons des talents qualifiés beaucoup plus rapidement et les profils sont très pertinents. Un gain de temps énorme pour notre équipe RH !",
    author: "Martine Pierre",
    role: "Responsable RH",
  },
  {
    id: 2,
    company: "PayAyiti",
    logo: "https://i.pravatar.cc/60?u=pay",
    rating: 4,
    review:
      "La visibilité que JwennJob nous offre est incomparable. Nous avons pu attirer des candidats que nous n'aurions jamais touchés avec les méthodes traditionnelles. Le support client est également très réactif.",
    author: "Jean-Luc Duval",
    role: "Directeur Général",
  },
  {
    id: 3,
    company: "SunBox",
    logo: "https://i.pravatar.cc/60?u=sun",
    rating: 5,
    review:
      "En tant que startup, il est crucial pour nous de trouver les bonnes personnes rapidement. JwennJob nous a permis de constituer une équipe solide et motivée en un temps record. Fortement recommandé !",
    author: "Sophie Laurent",
    role: "Fondatrice",
  },
  {
    id: 4,
    company: "JwennNews",
    logo: "https://i.pravatar.cc/60?u=news",
    rating: 4,
    review:
      "L'interface est intuitive et facile à utiliser, tant pour la publication d'offres que pour la gestion des candidatures. Nous apprécions particulièrement la qualité des profils que nous recevons.",
    author: "Marc Antoine",
    role: "Chef de Projet",
  },
];

export default function ReviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 2xl:px-0 2xl:max-w-screen-2xl py-12 bg-third overflow-hidden">
      <TitleHead
        title="Ce que nos entreprises disent de nous"
        subtitle="Découvrez pourquoi les recruteurs choisissent JwennJob pour trouver leurs futurs talents."
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={ 20 }
          loop={true}
          pagination={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.1,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

const ReviewCard = ({ company, logo, rating, review, author, role }) => (
  <div className="bg-white/50 rounded-4xl p-8  h-full flex flex-col justify-between">
    <div>
      <div className="flex items-center mb-4">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={48}
          height={48}
          className="rounded-full mr-3"
        />
        <div>
          <h3 className="text-lg font-bold text-primary">{company}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-base leading-relaxed mb-6 flex-grow">
        "{review}"
      </p>
    </div>
    <div className="border-t border-gray-100 pt-4">
      <p className="text-sm font-semibold text-secondary">{author}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </div>
);