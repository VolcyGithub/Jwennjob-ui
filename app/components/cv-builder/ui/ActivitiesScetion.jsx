import { useCv } from "../../../lib/contexts/CvContext";
import Activity from "../Activity";
import { NavigationButtons } from "./NavigationButtons";

export default function ActivitiesSection({ setAlert }) {
  const { formData, handleArrayChange, addItem, removeItem } = useCv();

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Activities & Volunteering</h2>
      <p className="text-gray-600 mb-4">Add any volunteer work, extracurricular activities, or community involvement</p>
      
      <div className="space-y-6">
        {formData.activities.map((activity, index) => (
          <div key={index} className="border-2 border-gray-200 rounded-lg">
            <Activity
              data={activity}
              index={index}
              onUpdate={handleArrayChange}
              onRemove={removeItem}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => addItem("activities")}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
      >
        + Add Activity
      </button>

      <NavigationButtons 
        prevTab="awards" 
        nextTab="preview" 
        nextLabel="Preview CV" 
        formData={formData} 
        setAlert={setAlert} 
      />
    </div>
  );
}