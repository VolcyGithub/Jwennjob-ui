import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/app/lib/utils/constants";
import { candidateApi } from "../../endpoints/candidate";

export const useMe = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.candidates, params],
    queryFn: () => candidateApi.getMe(params),
    staleTime: CACHE_TIME,
  });
