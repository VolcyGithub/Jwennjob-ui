import { publicClientKey } from  "@/lib/client/client";

export const filterApi = {
  getFilters: (params?: Record<string, any>) =>
    publicClientKey.get("/filters", params),
};
