import { candidateClient } from "@/lib/client/client";

export const candidateProfileApi = {
    updateProfile : (params : FormData) => candidateClient.put('/candidates/me', params)
} 