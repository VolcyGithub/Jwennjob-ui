import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../endpoints/auths';

export const useCandidateRegister = () => {
  return useMutation({
    mutationFn: (credentials) => {
      return authApi.registerCandidate(credentials);
    },
    onSuccess: (data: { token: string }) => {
       const token = data.token;
    },
    onError: (error: any) => {
      console.log(error.response?.data?.message || 'Erreur lors de l\'enregistrement du candidat');
    },
  });
};