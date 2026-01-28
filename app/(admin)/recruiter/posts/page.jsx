'use client';

import { usePosts } from '@/app/lib/api/hooks/queries/usePosts';

export default function PostsPage() {
  const { data, isLoading, error } = usePosts();

  if (isLoading) return <p>Chargement…</p>;
  if (error)   return <p>Erreur : {error.message}</p>;

  return (
    <ul className="p-4 space-y-4">
      {data?.posts.map((p) => (
        <li key={p.id} className="border rounded-lg p-4 shadow">
          <h2 className="font-bold text-lg mb-2">{p.title}</h2>
          <p className="text-gray-700 mb-3">{p.body}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>❤️ {p.reactions.likes}</span>
            <span>💔 {p.reactions.dislikes}</span>
            <span>👀 {p.views} vues</span>
          </div>
          <div className="mt-2 flex gap-2 flex-wrap">
            {p.tags.map((t) => (
              <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                #{t}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}