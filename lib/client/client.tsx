
import { API_KEY, API_URL } from "@/config/constants";
import { ApiClient } from "@/utils/class/client";

export const publicClient = new ApiClient({
  baseURL: API_URL,
});

export const candidateClient = new ApiClient({
  baseURL: API_URL,
});

export const recruiterClient = new ApiClient({
  baseURL: API_URL,
});

export const publicClientKey = new ApiClient({
  baseURL: API_URL,
});

candidateClient.useBearerAuth(
  () =>
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("candidate_token="))
      ?.split("=")[1],
);

recruiterClient.useBearerAuth(
  () =>
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("recruiter_token="))
      ?.split("=")[1],
);

publicClientKey.useApiKeyAuth(() => API_KEY);
