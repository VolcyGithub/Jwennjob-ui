"use client";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function FormFileInput({
  name,
  control,
  label,
  error,
  accept,
  existingFileUrl,
}) {
  const [preview, setPreview] = useState(existingFileUrl || null);

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium">{label}</label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="file"
            accept={accept}
            onChange={(e) => {
              const file = e.target.files?.[0];
              field.onChange(file);

              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setPreview(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
            className="w-full border rounded px-3 py-2"
          />
        )}
      />

      {/* Preview */}
      {preview && (
        <div className="mt-2">
          <img
            src={preview}
            alt="Preview"
            className="h-24 w-24 object-cover rounded-full"
          />
        </div>
      )}

      {error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
}


