import { API_URL } from "@/config/constants";
import { createContext, useState, useContext, useCallback } from "react";


export const CvContext = createContext(null);

export function CvProvider({ children }) {
    const [formData, setFormData] = useState({
        personal: {
            name: "",
            email: "",
            firstname: "",
            lastname: "",
            phone: "",
            address: "",
            summary: "",
            profession: "",
            linkedin: "",
        },
        experiences: [
            {
                position: "",
                company: "",
                start: "",
                endtime: "",
                responsibilities: [
                    
                ],
            },
        ],
        educations: [
            {
                degree: "",
                institution: "",
                start: "",
                endtime: "",
            },
        ],
        skills: [],
        awards: [
            {
                award: ""
            }
        ],
        activities: [
            {
                activity: ""
            }
        ],
        requiredFields: {
            personal: [
                "name",
                "email",
                "phone",
                "address",
            ],
            educations: [
                "degree",
                "institution",
                "start",
                "endtime",
            ],
            experiences: [
                "position",
                "company",
                "start",
                "endtime",
            ],
        }
    });

    // For personal & other object sections
    const handleChange = useCallback((section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    }, []);

    // For array sections (experiences, educations, etc.)
    const handleArrayChange = useCallback((section, index, field, value) => {
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
    }, []);

    // For nested arrays like responsibilities
    const handleNestedArrayChange = useCallback((section, itemIndex, nestedField, nestedIndex, value) => {
        setFormData(prev => {
            const updatedSection = [...prev[section]];
            const updatedNested = [...(updatedSection[itemIndex][nestedField] || [])];

            if (nestedField === 'responsibilities') {
                updatedNested[nestedIndex] = { responsability: value };
            } else {
                updatedNested[nestedIndex] = value;
            }

            updatedSection[itemIndex] = {
                ...updatedSection[itemIndex],
                [nestedField]: updatedNested,
            };

            return {
                ...prev,
                [section]: updatedSection,
            };
        });
    }, []);

    // Add responsibility to an experience
    const addResponsibility = useCallback((experienceIndex) => {
        setFormData(prev => {
            const updatedExperiences = [...prev.experiences];
            updatedExperiences[experienceIndex].responsibilities = [
                ...(updatedExperiences[experienceIndex].responsibilities || []),
                { responsability: "" }
            ];
            return {
                ...prev,
                experiences: updatedExperiences,
            };
        });
    }, []);

    // Remove responsibility from an experience
    const removeResponsibility = useCallback((experienceIndex, responsibilityIndex) => {
        setFormData(prev => {
            const updatedExperiences = [...prev.experiences];
            updatedExperiences[experienceIndex].responsibilities =
                updatedExperiences[experienceIndex].responsibilities.filter((_, i) => i !== responsibilityIndex);
            return {
                ...prev,
                experiences: updatedExperiences,
            };
        });
    }, []);

    const addItem = useCallback((section) => {
        const templates = {
            educations: {
                degree: "",
                institution: "",
                start: "",
                endtime: "",
            },
            experiences: {
                position: "",
                company: "",
                start: "",
                endtime: "",
                responsibilities: [{ responsability: "" }],
            },
            awards: {
                award: ""
            },
            activities: {
                activity: ""
            },
        };

        setFormData(prev => ({
            ...prev,
            [section]: [...prev[section], templates[section]],
        }));
    }, []);

    const removeItem = useCallback((section, index) => {
        setFormData(prev => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index),
        }));
    }, []);

    const setBulkData = useCallback((section, data) => {
        setFormData(prev => ({
            ...prev,
            [section]: data
        }));
    }, []);

    // Save CV to API
    const saveCv = useCallback(async (candidateId) => {
        try {
            // Prepare data in the format your API expects
           // get candidate token from cookie
            const getCookie = (name) => {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop().split(';').shift();
            }
            const response = await fetch(`${API_URL}/candidates/cvs/${candidateId}`, {
                method: 'PUT', // or 'POST' depending on your API
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie('candidate_token')}`, // Include auth token if required
                },

                body: JSON.stringify({
                    json_structure: formData,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save CV');
            }

            const result = await response.json();
            return { success: true, data: result };
        } catch (error) {
            console.error('Error saving CV:', error);
            return { success: false, error: error.message };
        }
    }, [formData]);

    return (
        <CvContext.Provider
            value={{
                formData,
                handleChange,
                handleArrayChange,
                handleNestedArrayChange,
                addResponsibility,
                removeResponsibility,
                setBulkData,
                addItem,
                removeItem,
                setFormData,
                saveCv,
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