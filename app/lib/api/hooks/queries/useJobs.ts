import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/app/lib/utils/constants";
import { jobsApi } from "../../endpoints/jobs";

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
