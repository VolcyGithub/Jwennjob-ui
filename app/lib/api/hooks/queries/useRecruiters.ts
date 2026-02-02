import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/app/lib/utils/constants";
import { recruiterApi } from "../../endpoints/recruiter";


export const useRecruiters = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters, params],
    queryFn: () => recruiterApi.getRecruiters(params),
    staleTime: CACHE_TIME,
  });


export const useRecruiter = (id: number, params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters, id, params],
    queryFn: () => recruiterApi.getRecruiter(id, params),
    enabled: !!id,
  });
