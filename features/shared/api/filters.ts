import { publicClientKey } from  "@/lib/client/client";

export const globalFilterApi = {
  getFilters: (params?: Record<string, any>) =>
    publicClientKey.get("/filters", params),
};
