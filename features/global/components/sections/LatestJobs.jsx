"use client";
import Link from "next/link";
import TitleHead from "../alerts/TitleHead";
import JobCard from "@/components/global/card/Jobcard";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useJobs } from "@/lib/api/hooks/queries/useJobs";
import JobCardSkeleton from "../card/JobCardSkeleton";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function LatestJobs() {
  const { data: jobs, isLoading, error } = useJobs();

  return (
    <section
      className="px-4  py-16 third"
      id="jobs-section"
    >
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <TitleHead
          title="Offres en vedette"
          subtitle="Découvrez une sélection d'opportunités triées sur le volet pour vous."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20"
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
                        <JobCardSkeleton/>
                      </motion.div>
                    </SwiperSlide>
                ))
                : jobs.data.slice(0, 6).map((j) => (
                    <SwiperSlide key={j.id}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <JobCard key={j.id} job={j} />
                      </motion.div>
                    </SwiperSlide>
                  ))}
            </AnimatePresence>
          </Swiper>
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            <IoBriefcaseOutline className="text-lg" />
            Toutes les offres
          </Link>
        </div>
      </div>
    </section>
  );
}
