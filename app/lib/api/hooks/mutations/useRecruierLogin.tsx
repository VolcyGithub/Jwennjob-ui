import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../endpoints/auths';

export const useRecruiterLogin = () => {
  return useMutation({

    mutationFn: (credentials) => {
      return authApi.loginRecruiter(credentials);
    },

    onSuccess: (data : {token : string }) => {
     const token = data.token;
     document.cookie = `recruiter_token=${token}; path=/; max-age=86400`;
     window.location.href= "/recruiter";
    },
    
    onError: (error: any) => {
      console.log(error.response?.data?.message || 'Erreur lors de la connexion du candidat');
    },
  });
};