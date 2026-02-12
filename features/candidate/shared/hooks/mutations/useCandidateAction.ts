import { useMutation, useQueryClient } from "@tanstack/react-query";
import { KEYS } from "@/config/constants";
import { candidateApi } from "@/features/candidate/shared/api/candidate";

export const useCandidateApply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => candidateApi.addApplication(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [KEYS.candidates.applications],
      });
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.me] });
    },
    onError: (error: any) => {
      console.log(
        error.response?.data?.message || "Erreur lors de la création",
      );
    },
  });
};

export const useCandidateSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => candidateApi.saveJobs(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.saved] });
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.me] });
    },
    onError: (error: any) => {
      console.log(
        error.response?.data?.message || "Erreur lors de la sauvegarde",
      );
    },
  });
};

export const useCandidateUnsave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => candidateApi.unSaveJobs(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.saved] });
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.me] });
    },
    onError: (error: any) => {
      console.log(error.response?.data?.message || "Erreur lors du retrait");
    },
  });
};
