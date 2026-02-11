"use client";
import { useState } from "react";
import Link from "next/link";
import TitleHead from "../alerts/TitleHead";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { SiFuturelearn, SiHandshake, SiBlogger } from "react-icons/si";
import { MdOutlineElectricBolt, MdOutlineAttachMoney } from "react-icons/md";
import { useRecruiters } from "@/features/shared/hooks/queries/useGlobalRecruiter";
import CompanyCardSkeleton from "@/features/shared/components/card/CompanyCardSkeleton";
import EnterpriseCard from "../card/EnterpriseCard";



const sectors = [
  { id: "all", label: "Tous", icon: null, color: "bg-gray-700" },
  {
    id: "fintech",
    label: "Fintech",
    icon: MdOutlineAttachMoney,
    color: "bg-indigo-500",
  },
  {
    id: "collab",
    label: "Économie collaborative",
    icon: SiHandshake,
    color: "bg-emerald-500",
  },
  {
    id: "energy",
    label: "Énergie",
    icon: MdOutlineElectricBolt,
    color: "bg-amber-500",
  },
  { id: "media", label: "Média", icon: SiBlogger, color: "bg-rose-500" },
  {
    id: "asso",
    label: "Association",
    icon: SiFuturelearn,
    color: "bg-sky-500",
  },
];

export default function ExploreCompanies() {

  const { data: recruiters, isLoading, error } = useRecruiters();
  const [active, setActive] = useState("all");

  return (
    <section className="mx-auto max-w-7xl px-6 2xl:px-0 2xl:max-w-screen-2xl py-12 bg-third overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TitleHead
            title="Explorez les entreprises"
            subtitle="Découvrez leur histoire, rencontrez leurs équipes, comprenez leur culture."
          />
        </motion.div>

        {/* Filtres avec Drag Framer Motion (Comme avant) */}
        <section className="py-8 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -400 }}
              className="flex flex-nowrap justify-start md:justify-center gap-3 cursor-grab active:cursor-grabbing"
            >
              {sectors.map((s) => {
                const Icon = s.icon;
                const isActive = active === s.id;
                return (
                  <motion.button
                    key={s.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActive(s.id)}
                    className={`px-5 py-2.5 rounded-full flex items-center gap-2 transition-all whitespace-nowrap border ${
                      isActive
                        ? `${s.color} text-white border-transparent shadow-md`
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {Icon && <Icon className="text-lg" />}
                    <span className="text-sm font-medium">{s.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Slider avec Filtrage Dynamique */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 pb-12"
        >
          <Swiper
            slidesPerView={1.1}
            spaceBetween={10}
            loop={true}
            pagination={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="pb-14 !px-4 md:!px-0" // Ajoute un padding horizontal pour ne pas coller au bord
          >
            <AnimatePresence mode="popLayout">
              {isLoading
                ? [1, 2, 3,4].map((i) => (
                    <SwiperSlide key={i}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <CompanyCardSkeleton/>
                      </motion.div>
                    </SwiperSlide>
                  ))
                : recruiters.data.slice(0, 6).map((c) => (
                    <SwiperSlide key={c.id}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <EnterpriseCard key={c.id} enterprise={c} />
                      </motion.div>
                    </SwiperSlide>
                  ))}
            </AnimatePresence>
          </Swiper>
        </motion.div>

        <div className="mt-4 text-center">
          <Link
            href="/enterprises"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all shadow-lg"
          >
           Explorer les entreprises
          </Link>
        </div>
      </div>
    </section>
  );
}
