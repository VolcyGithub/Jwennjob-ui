import { useMutation, useQueryClient } from "@tanstack/react-query";
import { candidateProfileApi } from "@/features/candidate/profile/api/profile";
import { KEYS } from "@/config/constants";

export const useCandidateUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: FormData) => candidateProfileApi.updateProfile(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.candidates.me] });
    },
    onError: (error: any) => {
      console.log(error.response?.data?.message || 'Erreur lors de la modification de profile');
    },
  });
};