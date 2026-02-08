"use client";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import ApplicationFilter from "@/app/components/candidate/tables/ApplicationFilter";
import ApplicationTableSkeleton from "@/app/components/candidate/tables/ApplicationTableSkeleton";
import Pagination from "@/app/components/public/Pagination";
import Applications from "@/app/components/recruiter/tables/Application";
import { useRecruiterApplicationsByJob } from "@/app/lib/api/hooks/queries/useRecruiters";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const {data: applications,isLoading,error,
  } = useRecruiterApplicationsByJob(id, { page: currentPage, per_page: 8 });

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= (jobs?.meta?.last_page || 1)) {
      setCurrentPage(pageNumber);
    }
  };

  if (isLoading) {
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
        <ApplicationTableSkeleton />
      </div>
    );
  }

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
      <Applications applications={applications.data} />
      {!isLoading && applications?.meta?.last_page > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={applications.meta.last_page}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
