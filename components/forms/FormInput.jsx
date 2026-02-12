"use client";

export default function FormInput({
  label,
  name,
  register,
  rules,
  error,
  ...props
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium">
          {label}
        </label>
      )}

      <input
        {...register(name, rules)}
        {...props}
        className={`w-full bg-white border rounded px-3 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error.message}
        </p>
      )}
    </div>
  );
}

