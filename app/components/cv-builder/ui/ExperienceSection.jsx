import React from 'react';
import Experience from '../Experience';
import { useCv } from '../../../lib/contexts/CvContext';
import { NavigationButtons } from './NavigationButtons';

export default function ExperienceSection({ setAlert }) {
    const { formData, handleArrayChange, addItem, removeItem } = useCv();

    return (
        <div>
            {formData.experience.map((exp, k) => (
                <Experience 
                    key={k} 
                    index={k} 
                    data={exp} 
                    onUpdate={handleArrayChange} 
                    onRemove={removeItem} 
                />
            ))}
            <button onClick={() => addItem("experience")}>Add Experience</button>
            <NavigationButtons 
                prevTab="education" 
                nextTab="skills" 
                formData={formData} 
                nextLabel="Next: Skills" 
                setAlert={setAlert}
            />
        </div>
    );
}
