/* ---------- composant ProgressRing ---------- */
const ProgressRing = ({ percent, color, label }) => {
      /* ---------- util : circonférence d’un cercle ---------- */
  const R = 45; // rayon
  const C = 2 * Math.PI * R;
  const offset = C - (percent / 100) * C;


  return (
    <div className="relative w-15 h-15">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* fond */}
        <circle
          cx="50"
          cy="50"
          r={R}
          stroke="#e5e7eb"
          strokeWidth="4"
          fill="none"
        />
        {/* progression */}
        <circle
          cx="50"
          cy="50"
          r={R}
          stroke={color}
          strokeWidth="4"
          strokeDasharray={C}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          transform="rotate(-90 50 50)"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[12px] font-bold text-gray-800">{percent}%</span>
        <span className="text-[10px] text-gray-500">{label}</span>
      </div>
    </div>
  );
};

export default ProgressRing;
