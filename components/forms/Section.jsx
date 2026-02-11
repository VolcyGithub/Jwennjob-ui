export function Section({ title, children }) {
  return (
    <div className="bg-white rounded-4xl p-6">
      <h2 className="text-base font-semibold pb-2 border-b border-gray-200 text-primary mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
