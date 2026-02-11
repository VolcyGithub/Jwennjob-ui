"use client";
import { useTab } from "../../../../contexts/TabContext.jsx";

export const NavigationButtons = ({
  prevTab,
  nextTab,
  nextLabel,
  formData,
  setAlert = () => {}
}) => {
  const { handleTabChange } = useTab();

  return (
    <div className="flex gap-4 mt-8">
      {prevTab && (
        <button
          onClick={() => handleTabChange(prevTab, formData, setAlert)}
          className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg"
        >
          Previous
        </button>
      )}

      {nextTab && (
        <button
          onClick={() => handleTabChange(nextTab, formData, setAlert)}
          className="flex-1 bg-secondary text-white px-6 py-3 rounded-lg"
        >
          {nextLabel || "Next"}
        </button>
      )}
    </div>
  );
};
