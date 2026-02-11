import { publicClient } from "@/lib/client/client";

export const authApi = {
  registerCandidate: (data : any) => publicClient.post('/auth/candidate/register' , data),
  loginCandidate : (data : any) => publicClient.post("auth/candidate/login" , data),
  registerRecruiter : (data : any) => publicClient.post("/auth/recruiter/register" , data),
  loginRecruiter : (data : any) => publicClient.post("auth/recruiter/login" , data),
};

export const socialAuthApi = {
   loginSocialRedirect : (provider : string ) => publicClient.get(`/auth/${provider}/redirect`),
   loginSocialCallback : (provider : string , code : string ) => publicClient.get(`/auth/${provider}/callback?code=${code}`)
}
