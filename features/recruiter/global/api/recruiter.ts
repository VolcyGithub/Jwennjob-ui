import { recruiterClient } from "@/lib/client/client";

export const recruiterApi = {

  // Get authenticated recruiter
  getMe: (params?: Record<string, any>) =>
    recruiterClient.get("/recruiters/me", params),

  // Get recruiters jobs
  getJobs: (params?: Record<string, any>) =>
    recruiterClient.get("/recruiters/jobs", params),

  // Get recruiters applications
  getApplications: (params?: Record<string, any>) =>
    recruiterClient.get("/recruiters/applications", params),

  // Get recruiters applications by Job ID
  getApplicationsByJob: (id: number, params?: Record<string, any>) =>
    recruiterClient.get(`/recruiters/jobs/${id}/applications`, params),

  // Get Candidtes
  getCandidates: (params?: Record<string, any>) =>
    recruiterClient.get("/recruiters/candidates", params),

  // Get candidates by ID
  getCandidatesById: (id: number, params?: Record<string, any>) =>
    recruiterClient.get(`/recruiters/candidates/${id}`),
};
