import { useQuery } from '@tanstack/react-query';
import { socialAuthApi } from '@/features/auth/api/auths';
import { CACHE_TIME, KEYS } from '@/config/constants';

export const useLoginSocialRedirect = (provider: string) =>
  useQuery({
    queryKey: [KEYS.socials.redirect],
    queryFn: () => socialAuthApi.loginSocialRedirect(provider),
    staleTime: CACHE_TIME,
  });

  export const useLoginSocialCallback = (provider: string , code : string) =>
  useQuery({
    queryKey: [KEYS.socials.callback],
    queryFn: () => socialAuthApi.loginSocialCallback(provider , code),
    staleTime: CACHE_TIME,
  });