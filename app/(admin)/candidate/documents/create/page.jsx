"use client";


import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import { useState } from "react";
import SlimSelect from "slim-select/react";
import "slim-select/styles";

export default function Create() {
  const [formData, setFormData] = useState({
    documentType: "",
    file: null,
    fileName: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file: file,
        fileName: file.name,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.documentType || !formData.file) {
      alert("Veuillez sélectionner le type de document et le fichier");
      return;
    }

    console.log("Document à envoyer:", formData);

    setFormData({
      documentType: "",
      file: null,
      fileName: "",
    });

    alert("Document ajouté avec succès!");
  };

  return (
    <div className="w-full">
      <BreadCrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Mes documents", href: "/candidate/documents" },
          {
            label: "Ajouter un document",
            href: "/candidate/documents/create",
          },
        ]}
      />

      <h1 className="text-2xl my-6 font-bold text-primary mb-6">
        Ajouter un document
      </h1>

      <div className="bg-white rounded-4xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Type de document avec SlimSelect */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de document *
            </label>
            <SlimSelect
              value={formData.documentType}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, documentType: value }))
              }
              placeholder="Sélectionnez le type de document"
              className="w-full"
            >
              <option value="">Sélectionnez le type de document</option>
              <option value="certificat">Certificat</option>
              <option value="diplome">Diplôme</option>
              <option value="attestation">Attestation</option>
            </SlimSelect>
          </div>

          {/* Fichier du document */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fichier du document *
            </label>
            <div className="mt-1 flex justify-center p-10 border-2 border-gray-200 border-dashed rounded-3xl hover:border-gray-300 transition-colors">
              <div className="space-y-2 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-wrap justify-center text-sm text-gray-600">
                  <label
                    htmlFor="file"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Télécharger un fichier</span>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p className="pl-1">ou glisser-déposer</p>
                </div>
                <p className="text-[10px] text-gray-500">
                  PDF, DOC, DOCX, JPG, JPEG, PNG (max. 10MB)
                </p>
                {formData.fileName && (
                  <p className="text-sm text-green-600 font-medium">
                    ✓ {formData.fileName}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-full text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Ajouter le document
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
