"use client";

import { useRouter } from "next/navigation";
import { 
  FaExclamationTriangle, 
  FaRedo, 
  FaArrowLeft 
} from "react-icons/fa";

export default function ErrorState({ 
  title = "Oups ! Une erreur s'est produite",
  message = "Nous n'avons pas pu charger les données demandées. Veuillez réessayer.",
  onRetry,
  showHome = true,
  showBack = true,
  className = ""
}) {
  const router = useRouter();

  return (
    <div className={`min-h-[100vh] w-full flex items-center justify-center bg-primary/5 p-4 ${className}`}>
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
        
        {/* Icône d'erreur animée */}
        <div className="relative mb-6">
          <div className="relative w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center">
            <FaExclamationTriangle className="text-red-500 text-3xl" />
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-2xl font-black text-gray-900 mb-3">
          {title}
        </h2>

        {/* Message */}
        <p className="text-gray-500 mb-8 leading-relaxed">
          {message}
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          
          {/* Bouton Réessayer */}
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-full transition-all active:scale-95 shadow-lg shadow-secondary/25"
            >
              <FaRedo className="text-sm" />
              Réessayer
            </button>
          )}

          {/* Bouton Retour */}
          {showBack && (
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-all active:scale-95"
            >
              <FaArrowLeft className="text-sm" />
              Retour
            </button>
          )}

          
        </div>

        {/* Code d'erreur décoratif */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-mono">
            Erreur #{500}
          </p>
        </div>
      </div>
    </div>
  );
}