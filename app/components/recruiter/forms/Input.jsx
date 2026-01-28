
export default function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-bold text-primary mb-2">{label}</label>
      <input
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring focus:ring-primary"
      />
    </div>
  );
}
