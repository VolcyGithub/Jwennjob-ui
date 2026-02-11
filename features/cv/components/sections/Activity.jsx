import { InputField } from "../ui/InputField.jsx";

export default function Activity({ data, onUpdate, onRemove, index }) {
  return (
    <div className="p-5 space-y-5">
      <InputField
        label="Activity or Volunteering"
        value={data.activity}
        onChange={(val) => onUpdate("activities", index, "activity", val)}
        placeholder="Volunteering at local shelter, Community organizer, etc."
        rows={2}
      />

      <button
        onClick={() => onRemove("activities", index)}
        className="text-red-600 font-semibold hover:underline"
      >
        Remove Activity
      </button>
    </div>
  );
}