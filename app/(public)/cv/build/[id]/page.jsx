"use client";
import Alert from "../../../../components/public/Alert";
import { InputField } from "../../../../components/cv-builder/ui/InputField";
import { NavigationButtons } from "../../../../components/cv-builder/ui/NavigationButtons";
import { useTab } from "../../../../lib/contexts/TabContext.jsx";
import { useCv } from "../../../../lib/contexts/CvContext.jsx";
import { useState, useEffect, useRef } from "react";
import ExperienceSection from "../../../../components/cv-builder/ui/ExperienceSection";
import EducationSection from "../../../../components/cv-builder/ui/EducationSection";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../../../../components/cv-builder/ui/PreviewSection";
import { useParams } from "next/navigation";
import { useCandidateCv } from "@/app/lib/api/hooks/queries/useCandidates";
import AwardsSection from "../../../../components/cv-builder/ui/AwardsSection";
import ActivitiesSection from "../../../../components/cv-builder/ui/ActivitiesScetion";

export default function CVBuilder() {
  const [alert, setAlert] = useState(null);
   const [isSaving, setIsSaving] = useState(false);
  const { id } = useParams();
  const { data: cv, isLoading, error } = useCandidateCv(id);
  const { formData, handleChange, setBulkData, saveCv:saveCv} = useCv();
  const { tabs, activeTab, setActiveTab, handleTabChange, alert: tabAlert } = useTab();

  const hasLoadedData = useRef(false);

  const handleSave = async () => {
    setIsSaving(true);
    const result = await saveCv(id);

    if (result.success) {
      setAlert({ type: 'success', message: 'CV saved successfully!' });
    } else {
      setAlert({ type: 'error', message: `Failed to save CV: ${result.error}` });
    }

    setIsSaving(false);
  };
  // Load CV data directly from API structure
  useEffect(() => {
    if (cv?.data?.json_structure && !hasLoadedData.current) {
      hasLoadedData.current = true;
      const jsonData = cv.data.json_structure;

      console.log("Loading CV data:", jsonData);

      // Load personal info
      setBulkData("personal", {
        name: jsonData.personal?.name || jsonData.name || "",
        email: jsonData.personal?.email || jsonData.email || "",
        firstname: jsonData.personal?.firstname || jsonData.firstname || "",
        lastname: jsonData.personal?.lastname || jsonData.lastname || "",
        phone: jsonData.personal?.phone || jsonData.phone || "",
        address: jsonData.personal?.address || jsonData.address || "",
        summary: jsonData.personal?.summary || jsonData.summary || "",
        profession: jsonData.personal?.profession || jsonData.profession || "",
        linkedin: jsonData.personal?.linkedin || "",
      });

      // Load experiences
      if (jsonData.experiences && Array.isArray(jsonData.experiences) && jsonData.experiences.length > 0) {
        setBulkData("experiences", jsonData.experiences.map(exp => ({
          position: exp.position || "",
          company: exp.company || "",
          start: exp.start || "",
          endtime: exp.endtime || "",
          responsibilities: exp.responsibilities && Array.isArray(exp.responsibilities)
            ? exp.responsibilities
            : [{ responsability: "" }],
        })));
      }

      // Load educations
      if (jsonData.educations && Array.isArray(jsonData.educations) && jsonData.educations.length > 0) {
        setBulkData("educations", jsonData.educations.map(edu => ({
          degree: edu.degree || "",
          institution: edu.institution || "",
          start: edu.start || "",
          endtime: edu.endtime || "",
        })));
      }

      // Load skills
      if (jsonData.skills && Array.isArray(jsonData.skills)) {
        setBulkData("skills", jsonData.skills);
      }

      // Load awards
      if (jsonData.awards && Array.isArray(jsonData.awards) && jsonData.awards.length > 0) {
        setBulkData("awards", jsonData.awards);
      }

      // Load activities
      if (jsonData.activities && Array.isArray(jsonData.activities) && jsonData.activities.length > 0) {
        setBulkData("activities", jsonData.activities);
      }
    }
  }, [cv, setBulkData]);

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Loading CV data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Error loading CV data. Please try again later.
      </div>
    );
  }

  const isComplete = cv.completion_rate === 100;

  return (
    <>
      {/* Header */}
      <div className="container mx-auto">
        <div className="relative flex flex-col pb-10 items-center mt-8 mx-2 justify-center rounded-t-3xl text-sm px-4 md:px-16 bg-primary text-white">

          <a
            href="https://jwennjob.com"
            className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-20 mb-6 text-purple-100 bg-primary/15"
          >
            <span className="bg-secondary text-white text-xs px-3.5 py-1 rounded-full">
              SERVICES CV
            </span>
            <p className="flex items-center gap-1">
              <span>Optimisez votre candidature</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right group-hover:translate-x-0.5 transition duration-300"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
          <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-2xl md:max-w-6xl text-center">
            Créez un CV{" "}
            <span className="ms-3 bg-gradient-to-r from-primary to-secondary px-3 rounded-xl text-nowrap py-2">
              professionnel
            </span>
          </h1>
          <p className="text-base text-center text-slate-200 max-w-lg mt-6">
            Téléchargez votre CV, recevez des conseils personnalisés et améliorez vos chances d'être embauché
          </p>
        </div>
      </div>

      {/* Alert */}
      {alert && (
        <div className="container mx-auto mt-4">
          <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />
        </div>
      )}

      {/* Main Content */}
      <div className="min-h-screen md:px-20">
        <div className="bg-white rounded-4xl shadow-xl">
          {/* Tabs */}
          <div className="flex overflow-x-auto bg-gray-50 border-b-2 border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id, formData, setAlert)}
                className={`flex items-center justify-center gap-2 flex-1 min-w-[140px] px-6 py-4 text-center font-semibold transition-all duration-300 ${activeTab === tab.id
                  ? "bg-white text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600 border-b-4 border-transparent hover:bg-gray-100 hover:text-gray-900"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {activeTab === "personal" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Personal Information</h2>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField
                      label="First Name"
                      value={formData.personal.firstname}
                      onChange={(val) => handleChange("personal", "firstname", val)}
                      placeholder="John"
                      required
                    />
                    <InputField
                      label="Last Name"
                      value={formData.personal.lastname}
                      onChange={(val) => handleChange("personal", "lastname", val)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <InputField
                    label="Full Name"
                    value={formData.personal.name}
                    onChange={(val) => handleChange("personal", "name", val)}
                    placeholder="John Doe"
                    required
                  />
                  <InputField
                    label="Profession"
                    value={formData.personal.profession}
                    onChange={(val) => handleChange("personal", "profession", val)}
                    placeholder="Software Engineer"
                  />
                  <InputField
                    label="Email Address"
                    type="email"
                    value={formData.personal.email}
                    onChange={(val) => handleChange("personal", "email", val)}
                    placeholder="john.doe@email.com"
                    required
                  />
                  <InputField
                    label="Phone Number"
                    type="tel"
                    value={formData.personal.phone}
                    onChange={(val) => handleChange("personal", "phone", val)}
                    placeholder="+1 (555) 123-4567"
                  />
                  <InputField
                    label="Address"
                    value={formData.personal.address}
                    onChange={(val) => handleChange("personal", "address", val)}
                    placeholder="123 Main St, New York, NY"
                  />
                  <InputField
                    label="LinkedIn Profile"
                    type="url"
                    value={formData.personal.linkedin}
                    onChange={(val) => handleChange("personal", "linkedin", val)}
                    placeholder="linkedin.com/in/johndoe"
                  />
                </div>
                <NavigationButtons
                  nextTab="summary"
                  nextLabel="Next: Summary"
                  formData={formData}
                  setAlert={setAlert}
                  setActiveTab={setActiveTab}
                />
              </div>
            )}

            {activeTab === "summary" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Summary</h2>
                <div className="space-y-5">
                  <InputField
                    label="Professional Summary"
                    value={formData.personal.summary}
                    onChange={(val) => handleChange("personal", "summary", val)}
                    placeholder="Write a brief overview of your professional background, key achievements, and career objectives..."
                    rows={6}
                  />
                  <p className="text-sm text-gray-500">
                    Tip: Keep it concise (3-4 sentences) and highlight your unique value proposition.
                  </p>
                </div>
                <NavigationButtons
                  prevTab="personal"
                  nextTab="education"
                  formData={formData}
                  nextLabel="Next: Education"
                  setActiveTab={setActiveTab}
                  setAlert={setAlert}
                />
              </div>
            )}

            {activeTab === "educations" && (
              <EducationSection setAlert={setAlert} />
            )}

            {activeTab === "experiences" && (
              <ExperienceSection setAlert={setAlert} />
            )}

            {activeTab === "skills" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
                <p className="text-gray-600 mb-4">Add your professional skills</p>
                {/* You'll need to create a SkillsSection component similar to Experience/Education */}
                <NavigationButtons
                  prevTab="experience"
                  formData={formData}
                  nextTab="preview"
                  nextLabel="Preview CV"
                  setActiveTab={setActiveTab}
                  setAlert={setAlert}
                />
              </div>
            )}
            {activeTab === "awards" && (
              <AwardsSection setAlert={setAlert} />
            )}

            {activeTab === "activities" && (
              <ActivitiesSection setAlert={setAlert} />
            )}
            {activeTab === "preview" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">CV Preview</h2>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
                  >
                    {isSaving ? 'Saving...' : 'Save CV'}
                  </button>
                </div>

                <PDFViewer style={{ width: '100%', height: '90vh' }}>
                  <MyDocument formData={formData} />
                </PDFViewer>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}