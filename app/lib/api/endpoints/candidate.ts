import { candidateClient } from "../client/client";

export const candidateApi = {
   getMe: (params?: Record<string , any>) => candidateClient.get("/candidates/me" , params),
   getApplications:(params?:Record<string, any>) => candidateClient.get("/candidates/applications" , params),
   getDocuments:(params?:Record<string, any>) => candidateClient.get("/candidates/documents" , params),
   getJobSaved:(params?:Record<string, any>) => candidateClient.get("/candidates/jobs/saved" , params),
};
