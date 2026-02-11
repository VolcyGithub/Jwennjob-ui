import React, { useState } from 'react';
import { useCv } from "@/features/cv/contexts/CvContext";
import Education from "@/features/cv/components/ui/Education";
import { NavigationButtons } from "@/features/cv/components/ui/NavigationButtons";

export default function EducationSection({ setAlert }) {
    const { formData, handleChange, handleArrayChange, addItem, removeItem } = useCv();

    return (
        <div>
            {formData.educations.map((edu, k) => (
                <Education key={k} index={k} data={edu} onUpdate={handleArrayChange} onRemove={removeItem} />
            ))}
            <button onClick={() => addItem("education")} className='bg-secondary px-4 py-2 text-white font-semibold hover:underline'>Add Education</button>
            <NavigationButtons prevTab="personal" formData={formData} setAlert={setAlert} nextTab="experience" nextLabel="Next: Experience" />
        </div>
    );
}