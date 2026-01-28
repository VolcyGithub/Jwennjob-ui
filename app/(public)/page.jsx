"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "@/app/components/public/HeroSection";
import ChatSection from "@/app/components/public/ChatSection";
import HeroJobSearch from "@/app/components/public/HeroJobSearch";
import LatestJobs from "@/app/components/public/LatestJobs";
import ExploreCompanies from "@/app/components/public/ExploreCompanies";
import Faqs from "@/app/components/public/Faqs";
import ReviewSection from "@/app/components/public/ReviewSection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-third">
      <HeroSection />
      <ExploreCompanies />
      <HeroJobSearch />
      <ChatSection />
      <LatestJobs />
      <Faqs />
      <ReviewSection />
    </div>
  );
}
