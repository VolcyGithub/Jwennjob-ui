import { CACHE_TIME, KEYS } from "@/config/constants";
import { useQuery } from "@tanstack/react-query";
import { globalRecruiterApi } from "@/features/global/api/recruiter";

// Get all recruiters
export const useRecruiters = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters.public, params],
    queryFn: () => globalRecruiterApi.getRecruiters(params),
    staleTime: CACHE_TIME,
  });


// Get single recruiter
export const useRecruiter = (id: number, params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters.show, id, params],
    queryFn: () => globalRecruiterApi.getRecruiter(id, params),
    enabled: !!id,
  });
