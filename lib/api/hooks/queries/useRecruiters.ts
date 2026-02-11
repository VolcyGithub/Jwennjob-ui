import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/config/constants";
import { recruiterApi } from "../../endpoints/recruiter";

// Recruiter ME
export const useRecruiterMe = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters.me, params],
    queryFn: () => recruiterApi.getMe(params),
    staleTime: CACHE_TIME,
  });
  

// Get all recruiters
export const useRecruiters = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters.public, params],
    queryFn: () => recruiterApi.getRecruiters(params),
    staleTime: CACHE_TIME,
  });


// Get recruiters Jobs
export const useRecruiterJobs = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters.jobs, params],
    queryFn: () => recruiterApi.getJobs(params),
    staleTime: CACHE_TIME,
  });


// Get single recruiter
export const useRecruiter = (id: number, params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters.show, id, params],
    queryFn: () => recruiterApi.getRecruiter(id, params),
    enabled: !!id,
  });


// Get all applications
export const useRecruiterApplications = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.recruiters.applications, params],
    queryFn: () => recruiterApi.getApplications(params),
    staleTime: CACHE_TIME,
  });


// Get all applications
export const useRecruiterApplicationsByJob = (
  id: number,
  params?: Record<string, any>,
) =>
  useQuery({
    queryKey: [KEYS.recruiters.byJob, id, params],
    queryFn: () => recruiterApi.getApplicationsByJob(id, params),
    staleTime: CACHE_TIME,
  });


  // Get candidates
  export const useRecruiterCandidates = (
  params?: Record<string, any>,
) =>
  useQuery({
    queryKey: [KEYS.recruiters.candidates, params],
    queryFn: () => recruiterApi.getCandidates(params),
    staleTime: CACHE_TIME,
  });


  // Get candidates by Id
export const useRecruiterCandidatesById = (
  id: number,
  params?: Record<string, any>,
) =>
  useQuery({
    queryKey: [KEYS.recruiters.byCandidate, id, params],
    queryFn: () => recruiterApi.getCandidatesById(id, params),
    staleTime: CACHE_TIME,
  });

