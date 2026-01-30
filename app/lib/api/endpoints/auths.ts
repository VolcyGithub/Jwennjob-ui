import { apiClient, publicClient } from "../client/client";


export const authApi = {
  registerCandidate: (data : any) => publicClient.post('/auth/candidate/register' , data),
  loginCandidate : (data : any) => publicClient.post("auth/candidate/login" , data),
  registerRecruiter : (data : any) => publicClient.post("/auth/recruiter/register" , data)
};
