"use client";
import { useState } from "react";
import PdfViewer from "./PdfViewer";
import FileCard from "../../candidate/cards/FileCard";


export default function CandidateDocsPage({docs : []}) {

  
  const [selected, setSelected] = useState(fakeDocs[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="h-fit  md:h-[500px] overflow-y-auto">
        <div className="flex border border-gray-300 rounded-4xl p-3 md:flex-col md:col-span-1 gap-4 overflow-x-auto">
          {fakeDocs.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelected(doc)}
              className={`shrink-0 w-75 md:w-full text-left rounded-3xl border transition ${selected.id === doc.id ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary"}`}
            >
              <FileCard file={doc} />
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-3">
        <PdfViewer fileUrl={selected.url} />
      </div>
    </div>
  );
}
