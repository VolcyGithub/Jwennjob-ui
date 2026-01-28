import { createContext, useState, useContext } from "react";

export const CvContext = createContext(null);

export function CvProvider({ children }) {
    const [formData, setFormData] = useState({
        personal: {
            name: "",
            email: "",
            phone: "",
            location: "",
            linkedin: "",
            summary: "",
        },
        education: [
            {
                degree: "",
                institution: "",
                start: "",
                end: "",
                details: "",
            },
        ],
        experience: [
            {
                jobTitle: "",
                company: "",
                start: "",
                end: "",
                details: "",
            },
        ],
        skills: {
            technical: "",
            soft: "",
            languages: "",
        },
        requiredFields: {

            personal: [
                "name",
                "email",
                "phone",
                "location",
            ],
            education: [
                "degree",
                "institution",
                "start",
                "end",
            ]
            ,
            experience: [
                "jobTitle",
                "company",
                "start",
                "end",
            ],
            skills: ["technical",]
        }


    });

    // For personal & skills (object sections)
    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    // For education & experience (array sections)
    const handleArrayChange = (section, index, field, value) => {
        setFormData(prev => {
            const updatedSection = [...prev[section]];
            updatedSection[index] = {
                ...updatedSection[index],
                [field]: value,
            };

            return {
                ...prev,
                [section]: updatedSection,
            };
        });
    };

    // Optional helpers
    const addItem = section => {
        const templates = {
            education: {
                degree: "",
                institution: "",
                start: "",
                end: "",
                details: "",
            },
            experience: {
                jobTitle: "",
                company: "",
                start: "",
                end: "",
                details: "",
            },
        };

        setFormData(prev => ({
            ...prev,
            [section]: [...prev[section], templates[section]],
        }));
    };

    const removeItem = (section, index) => {
        setFormData(prev => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index),
        }));
    };

    return (
        <CvContext.Provider
            value={{
                formData,
                handleChange,
                handleArrayChange,
                addItem,
                removeItem,
                setFormData,
            }}
        >
            {children}
        </CvContext.Provider>
    );
}

export function useCv() {
    const context = useContext(CvContext);
    if (!context) {
        throw new Error("useCv must be used within a CvProvider");
    }
    return context;
}