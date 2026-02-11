"use client";
import { createContext, useContext, useState } from "react";

const TabContext = createContext(null);

export const tabOrder = [
  "personal",
  "summary",
  "educations",
  "experiences",
  "skills",
  "awards",
  "activities",
  "preview",
];

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("personal");
  const tabs = [
    { id: "personal", label: "Personal Info" },
    { id: "summary", label: "Summary" },
    { id: "educations", label: "Education" },
    { id: "experiences", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "awards", label: "Awards" },
    { id: "activities", label: "Activities" },
    { id: "preview", label: "Preview" },
  ];
  
  const handleTabChange = (newTab, formData, setAlert) => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newTab);
    
    // Allow going back
    if (newIndex <= currentIndex) {
      setActiveTab(newTab);
      return;
    }
    
    console.log(formData);
    
    // Get required fields for current tab
    const currentTabRequiredFields = formData.requiredFields?.[activeTab] ?? [];
    for (let field of currentTabRequiredFields) {
      // For array sections (educations, experiences, awards, activities)
      if (activeTab === "educations" || activeTab === "experiences" || activeTab === "awards" || activeTab === "activities") {
      if (!formData[activeTab] || formData[activeTab].length === 0) {
        const tabName = activeTab === "educations" ? "education" : 
               activeTab === "experiences" ? "experience" : 
               activeTab.slice(0, -1); // Remove 's' for awards/activities
        setAlert({ type: 'error', message: `Please add at least one ${tabName} entry` });
        return;
      }
      
      for (let entry of formData[activeTab]) {
        if (!entry[field] || entry[field].trim() === "") {
        const tabName = activeTab === "educations" ? "education" : 
                 activeTab === "experiences" ? "experience" : 
                 activeTab.slice(0, -1);
        setAlert({ type: 'error', message: `Please fill out the required field: ${field} in all ${tabName} entries` });
        return;
        }
      }
      } 
      // For object sections (personal, skills)
      else {
      if (!formData[activeTab]?.[field] || formData[activeTab][field].trim?.() === "") {
        setAlert({ type: 'error', message: `Please fill out the required field: ${field}` });
        return;
      }
      }
    }
    
    setAlert(null);
    setActiveTab(newTab);
  };

  return (
    <TabContext.Provider value={{ tabs, activeTab, setActiveTab, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);