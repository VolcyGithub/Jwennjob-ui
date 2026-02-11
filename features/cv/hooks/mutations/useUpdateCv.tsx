import { KEYS } from '@/config/constants';
import { candidateApi } from '@/features/candidate/shared/api/candidate';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export const useUpdateCv = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: [KEYS.candidates.cvs, id],
        mutationFn: (updatedData: Record<string, any>) => candidateApi.updateCv(id, updatedData),
        onSuccess: () => {
           
        },
    });
};

export default useUpdateCv;