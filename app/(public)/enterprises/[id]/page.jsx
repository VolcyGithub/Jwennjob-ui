"use client";

import Image from "next/image";

import { MdVerified } from "react-icons/md";
import React from "react";
import { useParams } from "next/navigation";

import "react-loading-skeleton/dist/skeleton.css";
import EnterpriseDetailSkeleton from "@/features/shared/components/details/CompanyDetailSkeleton";
import { useRecruiter } from "@/features/shared/hooks/queries/useGlobalRecruiter";
import EnterpriseTabs from "@/features/shared/components/sections/EnterpriseTabs";


export default function EnterpriseDetailPage() {
  const { id } = useParams();

  const { data: company, isLoading, error } = useRecruiter(id);

  if (isLoading) {
    return <EnterpriseDetailSkeleton />;
  }

  console.log(company);
  return (
    <main className="bg-third min-h-screen pb-80 font-sans text-gray-900">
      {/* BANNER IMMERSIVE */}
      <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden">
        <Image
          src={company.data.banner}
          alt="banner"
          width={1600}
          height={400}
          className="w-full h-full object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 py-8 relative top-60 md:top-75">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="rounded-4xl p-8 shadow-sm bg-primary mb-16">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 flex justify-center items-center rounded-3xl border-4 border-white shadow-lg overflow-hidden bg-white shrink-0">
                  <Image
                    src={company.data.logo}
                    alt="logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-xl md:text-3xl font-black text-third">
                      {company.data.nom}
                    </h1>
                    <MdVerified className="text-secondary" size={24} />
                  </div>
                  <p className="text-gray-300 text-xs md:font-medium">
                    {company.data.sector}
                  </p>
                </div>
              </div>
            </div>

            <EnterpriseTabs company={company.data} />
          </div>

          <aside className="lg:col-span-4 space-y-6 sticky top-40 h-fit">
            <div className="bg-primary rounded-4xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-4 h-1 bg-secondary" /> Chiffres Clés
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-4xl text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                      Fondation
                    </p>
                    <p className="text-sm font-bold">{company.data.founded}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-4xl text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                      Departement
                    </p>
                    <p className="text-sm font-bold">
                      {company.data.department}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-4xl text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                      Siège Social
                    </p>
                    <p className="text-sm font-bold">{company.data.adresse}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 rounded-4xl p-8">
              <h3 className="font-black text-lg mb-6 text-primary">
                Social & Web
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-3 bg-gray-50 rounded-4xl hover:bg-secondary hover:text-white transition-all text-xs font-bold text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Site Web
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-gray-50 rounded-4xl hover:bg-secondary hover:text-white transition-all text-xs font-bold text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014V8.887h2.559v1.173h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.56zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34V8.887H3.667v7.451zM17.64 0H2.359C.996 0 0 .991 0 2.313v15.374C0 19.009.996 20 2.359 20h15.282C19.004 20 20 19.009 20 17.687V2.313C20 .991 19.004 0 17.64 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  LinkedIn
                </button>
              </div>
              <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 hover:text-secondary cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 hover:text-secondary cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 hover:text-secondary cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
