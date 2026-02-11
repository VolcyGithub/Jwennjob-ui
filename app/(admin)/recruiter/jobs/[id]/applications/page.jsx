"use client";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import ApplicationFilter from "@/features/candidate/shared/components/tables/ApplicationFilter";
import ApplicationTableSkeleton from "@/features/candidate/shared/components/tables/ApplicationTableSkeleton";
import Pagination from "@/components/global/Pagination";
import Applications from "@/features/recruiter/shared/components/tables/Application";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useRecruiterApplicationsByJob } from "@/features/recruiter/shared/hooks/queries/useRecruiters";

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
