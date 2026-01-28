import { InputField } from './ui/InputField.jsx';
import { NavigationButtons } from './ui/NavigationButtons.jsx';

export default function Experience({ data, index, onUpdate, onRemove }) {
    return (
        <div className="p-5 space-y-5">
            <InputField
                label="Job Title"
                value={data.jobTitle}
                onChange={(val) => onUpdate("experience", index, "jobTitle", val)}
                placeholder="Software Engineer"
            />
            <InputField
                label="Company"
                value={data.company}
                onChange={(val) => onUpdate("experience", index, "company", val)}
                placeholder="Company Name"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                    label="Start Date"
                    value={data.start}
                    onChange={(val) => onUpdate("experience", index, "start", val)}
                    placeholder="Jan 2020"
                />
                <InputField
                    label="End Date"
                    value={data.end}
                    onChange={(val) => onUpdate("experience", index, "end", val)}
                    placeholder="Present"
                />
            </div>
            <InputField
                label="Job Description"
                value={data.description}
                onChange={(val) => onUpdate("experience", "description", val)}
                placeholder="Describe your responsibilities and achievements..."
                rows={4}
            />
            <button
                className="text-red-600 font-semibold hover:underline"
                onClick={() => onRemove("experience", index)}
            >
                Remove Experience
            </button>
        </div>
    );
}
