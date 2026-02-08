import { useQuery } from '@tanstack/react-query';
import { socialAuthApi } from '../../endpoints/auths';
import { CACHE_TIME, KEYS } from '@/app/lib/utils/constants';

export const useLoginSocialRedirect = (provider: string) =>
  useQuery({
    queryKey: [KEYS.socials.redirect],
    queryFn: () => socialAuthApi.loginSocialRedirect(provider),
    staleTime: CACHE_TIME,
  });