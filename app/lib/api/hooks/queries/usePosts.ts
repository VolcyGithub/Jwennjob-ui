import { useQuery } from '@tanstack/react-query';
import { postsApi, type Post, type PostsResponse } from '../../endpoints/posts';
import { CACHE_TIME, KEYS } from '@/app/lib/utils/constants';

export const usePosts = () =>
  useQuery<PostsResponse>({
    queryKey: [KEYS.posts],
    queryFn: postsApi.getPosts,
    staleTime: CACHE_TIME,
  });

export const usePost = (id: number) =>
  useQuery<Post>({
    queryKey: [KEYS.posts, id],
    queryFn: () => postsApi.getPost(id),
    enabled: !!id,
  });