import React, { useState } from 'react';
import Education from '../Education';
import { useCv } from '../../../lib/contexts/CvContext'
import { NavigationButtons } from './NavigationButtons';

export default function EducationSection({ setAlert }) {
    const { formData, handleChange, handleArrayChange, addItem, removeItem } = useCv();

    return (
        <div>
            {formData.education.map((edu, k) => (
                <Education key={k} index={k} data={edu} onUpdate={handleArrayChange} onRemove={removeItem} />
            ))}
            <button onClick={() => addItem("education")} className='bg-secondary px-4 py-2 text-white font-semibold hover:underline'>Add Education</button>
            <NavigationButtons prevTab="personal" formData={formData} setAlert={setAlert} nextTab="experience" nextLabel="Next: Experience" />
        </div>
    );
}