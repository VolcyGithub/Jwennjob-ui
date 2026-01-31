import { candidateClient } from "../client/client";

interface Candidate {

}

export const candidateApi = {
   getMe: (params?: Record<string , any>) => candidateClient.get("/candidates/me" , params)
};
