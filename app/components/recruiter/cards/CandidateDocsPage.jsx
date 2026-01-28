"use client";
import { useState } from "react";
import PdfViewer from "./PdfViewer";
import FileCard from "../../candidate/cards/FileCard";

const fakeDocs = [
  {
    id: 1,
    name: "Rapport-financier-Q4.pdf",
    size: "2.4 MB",
    date: "21 janv. 2026",
    status: "shared",
    url: "/pdf/1765379045_56004.pdf",
  },
  {
    id: 2,
    name: "brief-projet-client.zip",
    size: "8.1 MB",
    date: "20 janv. 2026",
    url: "/pdf/certificat (1).pdf",
  },
  {
    id: 3,
    name: "presentation-marathon.pptx",
    size: "5.7 MB",
    date: "19 janv. 2026",
    status: "draft",
    url: "/pdf/1765379045_56004.pdf",
  },
  {
    id: 4,
    name: "presentation-marathon.pptx",
    size: "5.7 MB",
    date: "19 janv. 2026",
    status: "draft",
    url: "/pdf/certificat (1).pdf",
  },
];

export default function CandidateDocsPage() {
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
