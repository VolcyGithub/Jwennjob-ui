"use client";
import { createContext, useContext, useState } from "react";

const TabContext = createContext(null);

export const tabOrder = [
  "personal",
  "summary",
  "education",
  "experience",
  "skills",
  "preview",
];

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("personal");
  const tabs = [
    { id: "personal", label: "Personal Info" },
    { id: "summary", label: "Summary" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
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
    console.log(formData)
    // Example validation
    const currentTabRequiredFields = formData.requiredFields?.[activeTab]?? [];
    for (let field of currentTabRequiredFields) {
      if (activeTab === "education" || activeTab === "experience") {
        if (!formData[activeTab] || formData[activeTab].length === 0) {
          setAlert(`Please add at least one ${activeTab} entry`);
          return;
        }
        for (let entry of formData[activeTab]) {
          if (!entry[field] || entry[field].trim() === "") {
            setAlert(`Please fill out the required field: ${field} in all ${activeTab} entries`);
            return;
          }
        }
      } else {
        if (!formData[activeTab]?.[field] || formData[activeTab][field].trim?.() === "") {
          setAlert(`Please fill out the required field: ${field}`);
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