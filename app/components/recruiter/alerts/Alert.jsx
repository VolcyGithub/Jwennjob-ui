"use client";

import { useState } from "react";

export default function Alert({
  type = "info",
  title,
  children,
  dismissible = true, 
  onDismiss, 
  autoClose = false, 
  autoCloseDelay = 5000,
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (autoClose && isVisible) {
    setTimeout(() => {
      handleClose();
    }, autoCloseDelay);
  }

  const handleClose = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };


  const config = {
    info: {
      border: "border-sky-500",
      bg: "bg-sky-50",
      iconBg: "bg-sky-500/15",
      iconColor: "text-sky-500",
      titleColor: "text-sky-600",
      textColor: "text-sky-700",
      closeColor: "text-sky-500 hover:text-sky-700 hover:bg-sky-100",
      defaultTitle: "Information",
      iconPath: (
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0Zm-7-4a1 1 0 11-2 0 1 1 0 012 0ZM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9Z"
          clipRule="evenodd"
        />
      ),
    },
    danger: {
      border: "border-red-500",
      bg: "bg-red-50",
      iconBg: "bg-red-500/15",
      iconColor: "text-red-500",
      titleColor: "text-red-600",
      textColor: "text-red-700",
      closeColor: "text-red-500 hover:text-red-700 hover:bg-red-100",
      defaultTitle: "Erreur",
      iconPath: (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
          clipRule="evenodd"
        />
      ),
    },
    success: {
      border: "border-green-500",
      bg: "bg-green-50",
      iconBg: "bg-green-500/15",
      iconColor: "text-green-500",
      titleColor: "text-green-600",
      textColor: "text-green-700",
      closeColor: "text-green-500 hover:text-green-700 hover:bg-green-100",
      defaultTitle: "Succès",
      iconPath: (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      ),
    },
    warning: {
      border: "border-amber-500",
      bg: "bg-amber-50",
      iconBg: "bg-amber-500/15",
      iconColor: "text-amber-500",
      titleColor: "text-amber-600",
      textColor: "text-amber-700",
      closeColor: "text-amber-500 hover:text-amber-700 hover:bg-amber-100",
      defaultTitle: "Attention",
      iconPath: (
        <path
          fillRule="evenodd"
          d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      ),
    },
  };

  const currentConfig = config[type] || config.info;
  const displayTitle = title || currentConfig.defaultTitle;

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl border ${currentConfig.border}`}
      role="alert"
    >
      <div className={`flex w-full items-start gap-3 ${currentConfig.bg} p-4`}>
        {/* icône */}
        <div className={`shrink-0 ${currentConfig.iconBg} ${currentConfig.iconColor} rounded-full p-1`}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            {currentConfig.iconPath}
          </svg>
        </div>

        {/* contenu texte */}
        <div className="flex-1 min-w-0 pt-0.5">
          <h3 className={`text-sm font-semibold ${currentConfig.titleColor}`}>
            {displayTitle}
          </h3>
          <div className={`text-xs font-medium sm:text-sm ${currentConfig.textColor} mt-1`}>
            {children}
          </div>
        </div>

        {/* bouton fermer intégré */}
        {dismissible && (
          <button
            onClick={handleClose}
            className={`shrink-0 p-1.5 rounded-full transition-all duration-200 ${currentConfig.closeColor}`}
            aria-label="Fermer l'alerte"
            type="button"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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