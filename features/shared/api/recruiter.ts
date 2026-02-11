import { publicClientKey } from "@/lib/client/client";

export const globalRecruiterApi = {
  // Public
  getRecruiters: (params?: Record<string, any>) =>
    publicClientKey.get("/recruiters", params),

  // Public
  getRecruiter: (id: number, params?: Record<string, any>) =>
    publicClientKey.get(`/recruiters/${id}`, params),
};
