
import { API_KEY, API_URL } from "@/config/constants";
import { ApiClient } from "@/utils/class/client";
import getCookies from "@/utils/functions/GetCookies";

export const publicClient = new ApiClient({baseURL: API_URL});

export const candidateClient = new ApiClient({baseURL: API_URL});

export const recruiterClient = new ApiClient({baseURL: API_URL});

export const publicClientKey = new ApiClient({baseURL: API_URL});

candidateClient.useBearerAuth(() => getCookies('candidate_token'));

recruiterClient.useBearerAuth(() => getCookies('recruiter_token'));

publicClientKey.useApiKeyAuth(() => API_KEY);
