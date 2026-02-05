import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/app/lib/utils/constants";
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

