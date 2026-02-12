import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/features/auth/api/auths";
import createCookies from "@/utils/functions/CreateCookies";

export const useCandidateLogin = () => {
  return useMutation({
    mutationFn: (credentials) => {
      return authApi.loginCandidate(credentials);
    },

    onSuccess: (data: { token: string }) => {
      createCookies("candidate_token", data.token);
      window.location.href = "/candidate";
    },
    onError: (error: any) => {
      console.log(
        error.response?.data?.message ||
          "Erreur lors de la connexion du candidat",
      );
    },
  });
};
