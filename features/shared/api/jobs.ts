import { publicClientKey } from  "@/lib/client/client";

export const globalJobApi = {
  getJobs: (params?: Record<string, any>) =>
    publicClientKey.get("/jobs", params),
  
  getJob: (id: number, params?: Record<string, any>) =>
    publicClientKey.get(`/jobs/${id}`, params),
};
