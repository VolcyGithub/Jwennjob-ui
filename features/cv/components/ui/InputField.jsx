export const InputField = ({ label, value, onChange, type = "text", placeholder, required = false, rows }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {rows ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className="w-full px-4 py-3 ring-1 ring-gray-300 rounded-lg focus:border-primary focus:ring-4 focus:ring-primary transition-all duration-300 resize-none outline-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 ring-1 ring-gray-300 rounded-lg focus:border-primary focus:ring-4 focus:ring-primary transition-all duration-300 outline-none"
        />
      )}
    </div>
  );
  