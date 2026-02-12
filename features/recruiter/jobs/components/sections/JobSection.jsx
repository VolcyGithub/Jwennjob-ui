import ApplicationTableSkeleton from "@/features/candidate/shared/components/tables/ApplicationTableSkeleton";
import { useRecruiterJobs } from "@/features/recruiter/jobs/hooks/queries/useRecruiterJobs";
import Jobs from "@/features/recruiter/shared/components/tables/Jobs";

export function JobSection({filters = {} , count = 5}) {

  const { data: jobs, isLoading, error } = useRecruiterJobs();

  if (isLoading) {
    return <ApplicationTableSkeleton />;
  }

  return (
    <div>
      <Jobs jobs={jobs.data.slice(0,count)} />
    </div>
  );
}
