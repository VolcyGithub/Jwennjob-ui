import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import Pagination from "@/app/components/recruiter/paginations/Pagination";
import Jobs from "@/app/components/recruiter/tables/Jobs";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

export default function Index() {
  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Accueil", href: "/recruiter" },
          { label: "Mes emplois" },
        ]}
      />
      <div className="flex my-6 w-full justify-between items-center">
        <h2 className="text-2xl text-primary">Mes emplois</h2>
        <Link
          href="/recruiter/jobs/create"
          className="px-6 py-2 active:scale-95 transition text-xs text-white rounded-full bg-primary flex items-center justify-center gap-1"
        >
          <BiPlus/>
          <p className="mb-0.5">Publier</p>
        </Link>
      </div>
      <Jobs/>
      <Pagination/>
    </div>
  );
}
