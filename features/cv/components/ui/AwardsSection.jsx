import { useCv } from "@/features/cv/contexts/CvContext";
import Award from "@/features/cv/components/sections/Award";
import { NavigationButtons } from "@/features/cv/components/ui/NavigationButtons";

export default function AwardsSection({ setAlert }) {
  const { formData, handleArrayChange, addItem, removeItem } = useCv();

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Awards & Certifications</h2>
      <p className="text-gray-600 mb-4">Add any awards, certifications, or recognitions you've received</p>
      
      <div className="space-y-6">
        {formData.awards.map((award, index) => (
          <div key={index} className="border-2 border-gray-200 rounded-lg">
            <Award
              data={award}
              index={index}
              onUpdate={handleArrayChange}
              onRemove={removeItem}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => addItem("awards")}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
      >
        + Add Award
      </button>

      <NavigationButtons 
        prevTab="skills" 
        nextTab="activities" 
        nextLabel="Next: Activities" 
        formData={formData} 
        setAlert={setAlert} 
      />
    </div>
  );
}