import { CACHE_TIME, KEYS } from "@/config/constants";
import { useQuery } from "@tanstack/react-query";
import { recruiterJobApi } from "@/features/recruiter/jobs/api/recruiterJob";


// Get recruiters Jobs
export const useRecruiterJobs = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters.jobs, params],
    queryFn: () => recruiterJobApi.getJobs(params),
    staleTime: CACHE_TIME,
  });
