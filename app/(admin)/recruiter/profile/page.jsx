"use client";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import EnterpriseTabs from "@/features/recruiter/shared/components/cards/EntrepriseTabs";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <BreadCrumb
        items={[{ label: "Accueil", href: "/recruiter" }, { label: "Profil" }]}
      />
      <div
        style={{
          backgroundImage:
            "url('https://jwennjob.com/assets/dashboard/img/banner/file_17576018480.jpg')",
        }}
        className="bg-center relative bg-cover overflow-hidden h-[400] mt-4 mb-6 text-white w-full rounded-[2rem] py-5 px-5"
      >
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-30"></div>
      </div>
      <div className="relative bottom-30 w-full md:w-[90%] mx-auto gap-3 grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <div className="bg-primary mb-6 rounded-3xl p-6">
            <div className="flex flex-wrap md:flex-nowrap gap-3 justify-between items-center">
              <div className="flex gap-4 items-center w-full">
                <Image
                  width={50}
                  height={50}
                  className="size-14 md:size-20 rounded-full object-cover"
                  src="https://jwennjob.com/assets/dashboard/img/profile/entreprise/file_17684761740.jpeg"
                  alt="Rounded avatar"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-white text-3xl font-bold">
                    Université Quisqueya
                  </span>
                  <span className="text-gray-500 text-xs">Web Developer</span>
                </div>
              </div>
              <div className="flex w-full md:w-[200px] justify-end">
                <Link
                  href="/recruiter/profile/edit"
                  className="bg-white text-primary px-6 text-sm py-2 rounded-full font-bold hover:bg-gray-100 transition duration-300"
                >
                  Modifier le profil
                </Link>
              </div>
            </div>
          </div>
          <EnterpriseTabs
            company={{
              id: "1",
              name: "AlphaTech",
              logo: "https://i.pravatar.cc/120?u=alpha",
              banner:
                "https://cdn-images.welcometothejungle.com/tpK0Q7rVQ4zddlrxaOkcUxD81WAzkDxXWtiyvMycBy8/rs:auto:400::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzU4MTQvMTcwODAxL2QwMTA3ZTgyLTQ2M2ItNGY5Yy1iNjExLWE1MTk3YmVhYzI0OC5qcGc",
              sector: "Environnement / Tech / SaaS",
              employees: "150 collaborateurs",
              founded: "Créée en 2019",
              location: "Pétion-Ville, Haiti",
              description:
                "AlphaTech est un leader dans le développement de solutions SaaS durables. Notre mission est de transformer l'industrie technologique en Haïti en proposant des outils innovants qui respectent l'environnement.",
              vision:
                "Devenir le hub technologique de référence dans les Caraïbes d'ici 2030.",
              values: [
                "Innovation Durable",
                "Excellence Technique",
                "Impact Social",
              ],
              jobsCount: 12,
              activeJobs: [
                {
                  id: "1",
                  title: "Développeur Full-Stack React / Node",
                  type: "Temps plein (CDI)",
                  location: "Pétion-Ville",
                },
                {
                  id: "3",
                  title: "Product Designer UI/UX",
                  type: "Temps plein",
                  location: "Remote",
                },
              ],
            }}
          />
        </div>
        <div className="col-span-1">
          <div className="bg-primary text-white rounded-3xl p-6"></div>
        </div>
      </div>
    </div>
  );
}
