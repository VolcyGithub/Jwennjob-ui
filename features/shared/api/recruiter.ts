import { publicClientKey } from "@/lib/client/client";

export const globalRecruiterApi = {

  getRecruiters: (params?: Record<string, any>) =>
    publicClientKey.get("/recruiters", params),

  getRecruiter: (id: number, params?: Record<string, any>) =>
    publicClientKey.get(`/recruiters/${id}`, params),
};
