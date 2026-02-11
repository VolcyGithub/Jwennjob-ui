import { publicClientKey } from "../client/client";

export const jobsApi = {
  getJobs: (params?: Record<string, any>) =>
    publicClientKey.get("/jobs", params),
  
  getJob: (id: number, params?: Record<string, any>) =>
    publicClientKey.get(`/jobs/${id}`, params),
};
