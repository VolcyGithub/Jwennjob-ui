import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/config/constants";
import { filterApi } from "../../endpoints/filters";

export const useFilters = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.filters, params],
    queryFn: () => filterApi.getFilters(params),
    staleTime: CACHE_TIME,
  });
