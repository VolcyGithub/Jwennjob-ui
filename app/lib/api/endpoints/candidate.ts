import { candidateClient } from "../client/client";

export const candidateApi = {
   getMe: (params?: Record<string , any>) => candidateClient.get("/candidates/me" , params)
};
