"use client";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import ApplicationFilter from "@/app/components/candidate/tables/ApplicationFilter";
import Pagination from "@/app/components/recruiter/paginations/Pagination";
import Application from "@/app/components/recruiter/tables/Application";
import { useRecruiterApplications } from "@/app/lib/api/hooks/queries/useRecruiters";

export default function Index() {
  const {data : applications , isLoading , error} = useRecruiterApplications();
  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Accueil", href: "/recruiter" },
          { label: "Applications" },
        ]}
      />
      <div className="flex my-6 w-full justify-between items-center">
        <h2 className="text-2xl text-primary">Applications</h2>
       
      </div>
      <div className="my-6">
        <ApplicationFilter />
      </div>
      <Application />
      <Pagination />
    </div>
  );
}
