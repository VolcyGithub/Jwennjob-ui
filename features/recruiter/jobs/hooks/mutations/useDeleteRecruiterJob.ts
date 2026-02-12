import { useMutation, useQueryClient } from "@tanstack/react-query";
import { recruiterJobApi } from "@/features/recruiter/jobs/api/recruiterJob";
import { KEYS } from "@/config/constants";

export const useDeleteRecruiterJob = () => {
    
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => recruiterJobApi.deleteJob(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.recruiters.jobs] });
      queryClient.invalidateQueries({ queryKey: [KEYS.recruiters.me] });
    },
    onError: (error: any) => {
      console.log(error.response?.data?.message || "Erreur lors de la suppression de l'emploi");
    },
  });
};
