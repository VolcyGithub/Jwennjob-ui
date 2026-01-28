"use client";

import { useCreatePost } from "@/app/lib/api/hooks/mutations/useCreatePost";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPostPage() {
  const router = useRouter();
  const create = useCreatePost();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    create.mutate(
      {
        title,
        body,
        userId: 1
      },
      { onSuccess: () => router.push("/recruiter/posts") },
    ); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl space-y-4">
      <h1 className="text-xl font-bold">Nouveau post</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
        required
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Contenu"
        required
        rows={5}
        className="w-full border px-3 py-2 rounded"
      />

      <button
        type="submit"
        disabled={create.isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {create.isPending ? "Création…" : "Créer"}
      </button>

      {create.isError && (
        <p className="text-red-600">
          {create.error.response?.data?.message || "Erreur"}
        </p>
      )}
    </form>
  );
}
