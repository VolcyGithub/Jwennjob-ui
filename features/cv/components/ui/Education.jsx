import { InputField } from "../../features/cv/ui/InputField.jsx";

export default function Education({ data, onUpdate, onRemove, index }) {
  return (
    <div className="p-5 space-y-5">
      <InputField
        label="Degree"
        value={data.degree}
        onChange={(val) => onUpdate("educations", index, "degree", val)}
        placeholder="Bachelor of Science in Computer Science"
      />

      <InputField
        label="Institution"
        value={data.institution}
        onChange={(val) => onUpdate("educations", index, "institution", val)}
        placeholder="University Name"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Start Date"
          value={data.start}
          onChange={(val) => onUpdate("educations", index, "start", val)}
          placeholder="2016"
        />

        <InputField
          label="End Date"
          value={data.endtime}
          onChange={(val) => onUpdate("educations", index, "endtime", val)}
          placeholder="2020"
        />
      </div>

      <button
        onClick={() => onRemove("educations", index)}
        className="text-red-600 font-semibold hover:underline"
      >
        Remove Education
      </button>
    </div>
  );
}