"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "../../../globals.css"

export default function PdfViewer({ fileUrl }) {
  const defaultLayout = defaultLayoutPlugin(); // toolbar + sidebar
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="h-[350px] border border-gray-300 p-3 rounded-3xl md:h-[500px] overflow-hidden">
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayout]}
        />
      </div>
    </Worker>
  );
}
