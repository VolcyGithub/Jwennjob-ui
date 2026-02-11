import { recruiterClient } from "@/lib/client/client";

export const recruiterJobApi = {
  // Get recruiters jobs
  getJobs: (params?: Record<string, any>) =>
    recruiterClient.get("/recruiters/jobs", params),
};
