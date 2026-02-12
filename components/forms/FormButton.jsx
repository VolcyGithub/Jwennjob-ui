"use client";

export default function FormButton({
  children,
  type = "button",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`
        w-full
        bg-primary
        border border-primary
        text-white
        py-2
        rounded-full
        transition
        hover:bg-primary/90
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
          Chargement...
        </span>
      ) : (
        children
      )}
    </button>
  );
}


