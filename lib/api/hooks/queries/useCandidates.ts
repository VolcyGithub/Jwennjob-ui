import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/config/constants";
import { candidateApi } from "../../endpoints/candidate";

export const useMe = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.candidates.me, params],
    queryFn: () => candidateApi.getMe(params),
    staleTime: CACHE_TIME,
  });

export const useCandidateApplications = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.candidates.applications, params],
    queryFn: () => candidateApi.getApplications(params),
    staleTime: CACHE_TIME,
  });

export const useCandidateDocuments = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.candidates.documents, params],
    queryFn: () => candidateApi.getDocuments(params),
    staleTime: CACHE_TIME,
  });


export const useCandidateJobSaved = (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.candidates.saved, params],
    queryFn: () => candidateApi.getJobSaved(params),
    staleTime: CACHE_TIME,
  });

export const useCandidateCvs= (params?: Record<string, any>) =>
  useQuery({
    queryKey: [KEYS.candidates.cvs, params],
    queryFn: () => candidateApi.getCvs(params),
    staleTime: CACHE_TIME,
  });

export const useCandidateCv = (id: string) =>
  useQuery({
    // Include id in the key so each CV has its own cache entry
    queryKey: [KEYS.candidates.cvs, id], 
    
    // Pass the id to your API function
    queryFn: () => candidateApi.getCvById(id), 
    
    staleTime: CACHE_TIME,
    
    // Optional: Only run the query if an ID actually exists
    enabled: !!id, 
  });
