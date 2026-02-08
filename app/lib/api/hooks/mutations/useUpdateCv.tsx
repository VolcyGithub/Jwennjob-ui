import { useMutation, useQueryClient } from '@tanstack/react-query';
import { candidateApi } from '../../endpoints/candidate';
import { KEYS } from '../../../utils/constants';

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