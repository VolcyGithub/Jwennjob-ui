"use client";

import { useLoginSocialCallback } from "@/features/auth/hooks/queries/useLoginSocial";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ImSpinner8 } from "react-icons/im";

export default function Index() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { data, isLoading, error } = useLoginSocialCallback("google", code);

  useEffect(() => {
    if (!code) {
      router.push("/login");
      return;
    }

    if (data?.token) {
      document.cookie = `candidate_token=${data.token}; path=/; max-age=86400; secure; samesite=strict`;
      router.push("/candidate");
    }
  }, [code, data, router]);

  if (!code) return null;

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
        <ImSpinner8 className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg font-semibold mb-2">Échec de la connexion Google</p>
          <button 
            onClick={() => router.push("/login")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <ImSpinner8 className="animate-spin text-4xl text-primary" />
        <p className="text-gray-600">Redirection...</p>
      </div>
    </div>
  );
}