import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME, KEYS } from "@/app/lib/utils/constants";
import { User, userApi, UsersResponse } from "../../endpoints/users";

export const useUsers = (params?: Record<string, any>) =>
  useQuery<UsersResponse>({
    queryKey: [KEYS.users, params],
    queryFn: () => userApi.getUsers(params),
    staleTime: CACHE_TIME,
  });

export const useFilterUsers = (params?: Record<string, any>) =>
  useQuery<UsersResponse>({
    queryKey: [KEYS.users, params],
    queryFn: () => userApi.getFilterUsers(params),
    staleTime: CACHE_TIME,
  });

export const useUser = (id: number, params?: Record<string, any>) =>
  useQuery<User>({
    queryKey: [KEYS.users, id, params],
    queryFn: () => userApi.getUser(id, params),
    enabled: !!id,
});
