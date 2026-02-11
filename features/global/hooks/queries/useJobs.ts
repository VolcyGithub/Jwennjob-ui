import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/config/constants";
import { jobsApi } from"@/features/global/api/jobs";

export const useJobs = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.jobs, params],
    queryFn: () => jobsApi.getJobs(params),
    staleTime: CACHE_TIME,
  });


export const useJob = (id: number, params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.jobs, id, params],
    queryFn: () => jobsApi.getJob(id, params),
    enabled: !!id,
  });
