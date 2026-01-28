import { apiClient } from "../client/client";

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export const postsApi = {
  getPosts: () => apiClient.get<PostsResponse>('/posts'),
  getPost: (id: number) => apiClient.get<Post>(`/posts/${id}`),
  createPost: (data: Omit<Post, 'id'>) => apiClient.post<Post>('/posts/add', data),
  updatePost: (id: number, data: Partial<Post>) => apiClient.put<Post>(`/posts/${id}`, data),
  deletePost: (id: number) => apiClient.delete<void>(`/posts/${id}`),
};
