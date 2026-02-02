
import { publicClientKey } from "../client/client";

export const recruiterApi = {
  getRecruiters: (params?: Record<string, any>) =>
    publicClientKey.get("/recruiters", params),
  
  getRecruiter: (id: number, params?: Record<string, any>) =>
    publicClientKey.get(`/recruiters/${id}`, params),
};
