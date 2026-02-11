"use client";
import Alert from "../../../../components/global/Alert";
import { InputField } from "../../../../features/cv/components/ui/InputField";
import { NavigationButtons } from "../../../../features/cv/components/ui/NavigationButtons";
import { useTab } from "../../../lib/contexts/TabContext.jsx";
import { useCv } from "../../../lib/contexts/CvContext.jsx";
import { useState } from "react";
import ExperienceSection from "../../../../features/cv/components/ui/ExperienceSection";
import EducationSection from "../../../../features/cv/components/ui/EducationSection";
import { pdf, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../../../../features/cv/components/ui/PreviewSection";
export default function CVBuilder() {
  const [alert, setAlert] = useState(null);
 const { formData, handleChange } = useCv();
  const {tabs, activeTab, setActiveTab, handleTabChange, alert: tabAlert} = useTab();
  

 

  

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
          <Alert message={alert} onClose={() => setAlert(null)} />
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
                className={`flex items-center justify-center gap-2 flex-1 min-w-[140px] px-6 py-4 text-center font-semibold transition-all duration-300 ${
                  activeTab === tab.id
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
                  <InputField
                    label="Full Name"
                    value={formData.personal.name}
                    onChange={(val) => handleChange("personal", "name", val)}
                    placeholder="John Doe"
                    required
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
                    label="Location"
                    value={formData.personal.location}
                    onChange={(val) => handleChange("personal", "location", val)}
                    placeholder="New York, NY"
                  />
                  <InputField
                    label="LinkedIn Profile"
                    type="url"
                    value={formData.personal.linkedin}
                    onChange={(val) => handleChange("personal", "linkedin", val)}
                    placeholder="linkedin.com/in/johndoe"
                  />
                </div>
                <NavigationButtons nextTab="summary" nextLabel="Next: Summary" formData={formData} setAlert={setAlert} setActiveTab={setActiveTab} />
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
                <NavigationButtons prevTab="personal" nextTab="education" formData={formData} nextLabel="Next: Education" />
              </div>
            )}

            {activeTab === "education" && (
              <EducationSection setAlert={setAlert} />
            )}

            {activeTab === "experience" && (
            <ExperienceSection setAlert={setAlert} />
            )}

            {activeTab === "skills" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
                <div className="space-y-5">
                  <InputField
                    label="Technical Skills"
                    value={formData.skills.technical}
                    onChange={(val) => handleChange("skills", "technical", val)}
                    placeholder="JavaScript, React, Node.js, Python, SQL, AWS"
                    rows={4}
                  />
                  <InputField
                    label="Soft Skills"
                    value={formData.skills.soft}
                    onChange={(val) => handleChange("skills", "soft", val)}
                    placeholder="Leadership, Communication, Problem Solving, Team Collaboration"
                    rows={4}
                  />
                  <InputField
                    label="Languages"
                    value={formData.skills.languages}
                    onChange={(val) => handleChange("skills", "languages", val)}
                    placeholder="English (Native), Spanish (Fluent)"
                  />
                </div>
                <NavigationButtons prevTab="experience" formData={formData} nextTab="preview" nextLabel="Preview CV" />
              </div>
            )}

            {activeTab === "preview" && (
              // <div>
              //   <div className="flex justify-between items-center mb-6">
              //     <h2 className="text-3xl font-bold text-gray-800">CV Preview</h2>
              //     <button
              //       onClick={downloadCV}
              //       className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 hover:shadow-lg transition-all duration-300"
              //     >
              //       Download CV
              //     </button>
              //   </div>

              //   <div className="bg-gray-50 p-8 md:p-12 rounded-xl border-2 border-gray-200">
              //     {/* CV Header */}
              //     <div className="text-center border-b-4 border-primary pb-6 mb-6">
              //       <h3 className="text-4xl font-bold text-gray-900 mb-2">
              //         {formData.personal.name || "Your Name"}
              //       </h3>
              //       <div className="text-gray-600 space-y-1">
              //         {formData.personal.email && <p>{formData.personal.email}</p>}
              //         {formData.personal.phone && <p>{formData.personal.phone}</p>}
              //         {formData.personal.location && <p>{formData.personal.location}</p>}
              //         {formData.personal.linkedin && <p>{formData.personal.linkedin}</p>}
              //       </div>
              //     </div>

              //     {/* Professional Summary */}
              //     {formData.personal.summary && (
              //       <div className="mb-6">
              //         <h4 className="text-2xl font-bold text-purple-700 mb-3">PROFESSIONAL SUMMARY</h4>
              //         <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              //           {formData.personal.summary}
              //         </p>
              //       </div>
              //     )}

              //     {/* Education */}
              //     {formData.education && formData.education.length > 0 && (
              //       <div className="mb-6">
              //         <h4 className="text-2xl font-bold text-purple-700 mb-3">EDUCATION</h4>
              //         <div className="space-y-4">
              //           {formData.education.map((edu, index) => (
              //             <div key={index} className="border-l-4 border-purple-700 pl-4">
              //               {edu.degree && (
              //                 <p className="text-lg font-semibold text-gray-800">{edu.degree}</p>
              //               )}
              //               {edu.institution && (
              //                 <p className="text-gray-700">{edu.institution}</p>
              //               )}
              //               {(edu.start || edu.end) && (
              //                 <p className="text-gray-600 text-sm">
              //                   {edu.start} - {edu.end}
              //                 </p>
              //               )}
              //               {edu.details && (
              //                 <p className="text-gray-700 mt-2 whitespace-pre-line">{edu.details}</p>
              //               )}
              //             </div>
              //           ))}
              //         </div>
              //       </div>
              //     )}

              //     {/* Work Experience */}
              //     {formData.experience && formData.experience.length > 0 && (
              //       <div className="mb-6">
              //         <h4 className="text-2xl font-bold text-purple-700 mb-3">WORK EXPERIENCE</h4>
              //         <div className="space-y-4">
              //           {formData.experience.map((exp, index) => (
              //             <div key={index} className="border-l-4 border-purple-700 pl-4">
              //               {exp.jobTitle && (
              //                 <p className="text-lg font-semibold text-gray-800">{exp.jobTitle}</p>
              //               )}
              //               {exp.company && (
              //                 <p className="text-gray-700">{exp.company}</p>
              //               )}
              //               {(exp.start || exp.end) && (
              //                 <p className="text-gray-600 text-sm">
              //                   {exp.start} - {exp.end}
              //                 </p>
              //               )}
              //               {exp.details && (
              //                 <p className="text-gray-700 mt-2 whitespace-pre-line">{exp.details}</p>
              //               )}
              //             </div>
              //           ))}
              //         </div>
              //       </div>
              //     )}

              //     {/* Skills */}
              //     {(formData.skills.technical || formData.skills.soft || formData.skills.languages) && (
              //       <div className="mb-6">
              //         <h4 className="text-2xl font-bold text-purple-700 mb-3">SKILLS</h4>
              //         <div className="space-y-2">
              //           {formData.skills.technical && (
              //             <p className="text-gray-700">
              //               <span className="font-semibold">Technical Skills:</span> {formData.skills.technical}
              //             </p>
              //           )}
              //           {formData.skills.soft && (
              //             <p className="text-gray-700">
              //               <span className="font-semibold">Soft Skills:</span> {formData.skills.soft}
              //             </p>
              //           )}
              //           {formData.skills.languages && (
              //             <p className="text-gray-700">
              //               <span className="font-semibold">Languages:</span> {formData.skills.languages}
              //             </p>
              //           )}
              //         </div>
              //       </div>
              //     )}
              //   </div>
              // </div>
    //           <PDFDownloadLink
    //   document={<MyDocument />}
    //   fileName="Yowensly_Volcy_CV.pdf"
    //   style={{
    //     textDecoration: 'none',
    //     padding: '10px 16px',
    //     backgroundColor: '#000',
    //     color: '#fff',
    //     borderRadius: 4,
    //     fontSize: 14,
    //   }}
    // >
    //   {({ loading }) =>
    //     loading ? 'Preparing PDF...' : 'Download CV'
    //   }
    // </PDFDownloadLink>

      <PDFViewer style={{ width: '100%', height: '90vh' }}>
        <MyDocument formData={formData}/>
      </PDFViewer>
            )}
          </div>
        </div>
      </div>
    </>
  );
}