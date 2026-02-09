"use client";
import { useState } from "react";
import PdfViewer from "./PdfViewer";
import FileCard from "../../candidate/cards/FileCard";

export default function CandidateDocsPage({ docs = [] }) {
  const [selected, setSelected] = useState(docs[0]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="h-fit  md:h-[500px] overflow-y-auto">
        <div className="flex border border-gray-300 rounded-4xl p-3 md:flex-col md:col-span-1 gap-4 overflow-x-auto">
          {docs.length >= 1
            ? docs.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelected(doc)}
                  className={`shrink-0 w-75 md:w-full text-left rounded-3xl border transition ${selected.id === doc.id ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary"}`}
                >
                  <FileCard file={doc} />
                </button>
              ))
            : [1, 2, 3, 4].map((dc) => (
                <div key={dc} className="flex h-[200px] w-full rounded-3xl bg-white items-center justify-center">
                  <span className="text-gray-500 text-xs italic">
                    Aucun document enregistré
                  </span>
                </div>
              ))}
        </div>
      </div>

      <div className="md:col-span-3">
        {docs.length >= 1 ? (
          <PdfViewer fileUrl={selected.url} />
        ) : (
          <div className="flex h-[400px] w-full rounded-3xl bg-white items-center justify-center">
            <span className="text-gray-500 text-sm italic">
              Aucun document enregistré
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
