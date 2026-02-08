import { InputField } from "./ui/InputField.jsx";

export default function Award({ data, onUpdate, onRemove, index }) {
  return (
    <div className="p-5 space-y-5">
      <InputField
        label="Award or Certification"
        value={data.award}
        onChange={(val) => onUpdate("awards", index, "award", val)}
        placeholder="Certificate of Completion in AI, Best Employee Award, etc."
        rows={2}
      />

      <button
        onClick={() => onRemove("awards", index)}
        className="text-red-600 font-semibold hover:underline"
      >
        Remove Award
      </button>
    </div>
  );
}