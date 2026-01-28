import { InputField } from "./ui/InputField.jsx";

export default function Education({ data, onUpdate, onRemove,index }) {
  return (
    <div className=" p-5 space-y-5">
      <InputField
        label="Degree"
        value={data.degree}
        onChange={(val) => onUpdate("education",index, "degree", val)}
        placeholder="Bachelor of Science in Computer Science"
      />

      <InputField
        label="Institution"
        value={data.institution}
        onChange={(val) => onUpdate("education",index, "institution", val)}
        placeholder="University Name"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Start Date"
          value={data.start}
          onChange={(val) => onUpdate("education",index, "start", val)}
          placeholder="Sept 2016"
        />

        <InputField
          label="End Date"
          value={data.end}
          onChange={(val) => onUpdate("education",index, "end", val)}
          placeholder="May 2020"
        />
      </div>

      <InputField
        label="Additional Details"
        value={data.details}
        onChange={(val) => onUpdate("education",index, "details", val)}
        placeholder="GPA, honors, relevant coursework, achievements..."
        rows={4}
      />

      <button
        onClick={() => onRemove("education", index)}
        className="text-red-600 font-semibold hover:underline"
      >
        Remove Education
      </button>
    </div>
  );
}