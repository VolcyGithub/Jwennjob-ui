export default function InfoAlert({
  title = "Update Available",
  children,
  onClose,
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl border border-sky-500"
      role="alert"
    >
      <div className="flex w-full items-center gap-2 bg-sky-50 p-4">
        {/* icône */}
        <div className="bg-sky-500/15 text-sky-500 rounded-full p-1">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0Zm-7-4a1 1 0 11-2 0 1 1 0 012 0ZM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* texte */}
        <div className="ml-2">
          <h3 className="text-sm font-semibold text-sky-600">{title}</h3>
          <p className="text-xs font-medium sm:text-sm">{children}</p>
        </div>

        {/* bouton fermer */}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto"
            aria-label="dismiss alert"
          >
            <svg
              className="w-4 h-4 stroke-current"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
