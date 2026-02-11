import { useMutation, useQueryClient } from '@tanstack/react-query';
import { KEYS } from '@/config/constants';
import { candidateApi } from '../../endpoints/candidate';


export const useCandidateApply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => candidateApi.addApplication(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.applications] });
    },
    onError: (error: any) => {
      console.log(error.response?.data?.message || 'Erreur lors de la création');
    },
  });
};

export const useCandidateSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => candidateApi.saveJobs(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.saved] });
    },
    onError: (error: any) => {
      console.log(error.response?.data?.message || 'Erreur lors de la sauvegarde');
    },
  });
};

export const useCandidateUnsave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => candidateApi.unSaveJobs(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.saved] });
    },
    onError: (error: any) => {
      console.log(error.response?.data?.message || 'Erreur lors du retrait');
    },
  });
};

