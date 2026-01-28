import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postsApi } from '../../endpoints/posts';
import { KEYS } from '@/app/lib/utils/constants';


export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postsApi.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.posts] });
    },
    onError: (error: any) => {
      console.error(error.response?.data?.message || 'Erreur lors de la création');
    },
  });
};