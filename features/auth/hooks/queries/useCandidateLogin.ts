import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/features/auth/api/auths';

export const useCandidateLogin = () => {
  return useMutation({

    mutationFn: (credentials) => {
      return authApi.loginCandidate(credentials);
    },

    onSuccess: (data : {token : string }) => {
     const token = data.token;
     document.cookie = `candidate_token=${token}; path=/; max-age=86400`;
     window.location.href= "/candidate";
    },
    onError: (error: any) => {
      console.log(error.response?.data?.message || 'Erreur lors de la connexion du candidat');
    },
  });
};