import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/config/constants";
import { globalJobApi } from "@/features/shared/api/jobs";


export const useJobs = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.jobs, params],
    queryFn: () => globalJobApi.getJobs(params),
    staleTime: CACHE_TIME,
  });


export const useJob = (id: number, params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.jobs, id, params],
    queryFn: () => globalJobApi.getJob(id, params),
    enabled: !!id,
  });
