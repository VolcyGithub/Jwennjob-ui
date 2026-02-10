import { candidateClient } from "../client/client";

export const candidateApi = {
  getMe: (params?: Record<string, any>) =>
    candidateClient.get("/candidates/me", params),

  getApplications: (params?: Record<string, any>) =>
    candidateClient.get("/candidates/applications", params),

  getDocuments: (params?: Record<string, any>) =>
    candidateClient.get("/candidates/documents", params),

  getJobSaved: (params?: Record<string, any>) =>
    candidateClient.get("/candidates/jobs/saved", params),

  getCvs: (params?: Record<string, any>) =>
    candidateClient.get("/candidates/cvs", params),

  getCvById: (id: string) => 
   candidateClient.get(`/candidates/cvs/${id}`),

  updateCv: (id: string, data: Record<string, any>) =>
    candidateClient.put(`/candidates/cvs/${id}`, data),

  addApplication: (id: string) =>
    candidateClient.post(`/candidates/jobs/${id}/apply`),

  saveJobs: (id: string) =>
    candidateClient.post(`/candidates/jobs/${id}/save`),

  unSaveJobs: (id: string) =>
    candidateClient.delete(`/candidates/jobs/${id}/unsave`),
};
