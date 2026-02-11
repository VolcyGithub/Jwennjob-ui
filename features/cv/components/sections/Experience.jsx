import { InputField } from '../ui/InputField.jsx';

export default function Experience({ data, index, onUpdate, onRemove, onAddResponsibility, onRemoveResponsibility, onUpdateResponsibility }) {
    return (
        <div className="p-5 space-y-5">
            <InputField
                label="Position"
                value={data.position}
                onChange={(val) => onUpdate("experiences", index, "position", val)}
                placeholder="Software Engineer"
            />
            <InputField
                label="Company"
                value={data.company}
                onChange={(val) => onUpdate("experiences", index, "company", val)}
                placeholder="Company Name"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                    label="Start Date"
                    value={data.start}
                    onChange={(val) => onUpdate("experiences", index, "start", val)}
                    placeholder="Jan 2020"
                />
                <InputField
                    label="End Date"
                    value={data.endtime}
                    onChange={(val) => onUpdate("experiences", index, "endtime", val)}
                    placeholder="Present"
                />
            </div>

            {/* Responsibilities Section */}
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <label className="block text-sm font-semibold text-gray-700">
                        Responsibilities
                    </label>
                    <button
                        type="button"
                        onClick={() => onAddResponsibility(index)}
                        className="text-blue-600 text-sm font-semibold hover:underline"
                    >
                        + Add Responsibility
                    </button>
                </div>
                
                {data.responsibilities && data.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex gap-2 items-start">
                        <InputField
                            value={resp.responsability}
                            onChange={(val) => onUpdateResponsibility("experiences",index,"responsibilities", respIndex, val)}
                            placeholder="Describe a key responsibility or achievement..."
                            rows={2}
                        />
                        {data.responsibilities.length > 1 && (
                            <button
                                type="button"
                                onClick={() => onRemoveResponsibility(index, respIndex)}
                                className="text-red-600 text-sm mt-2 hover:underline"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <button
                type="button"
                className="text-red-600 font-semibold hover:underline"
                onClick={() => onRemove("experiences", index)}
            >
                Remove Experience
            </button>
        </div>
    );
}