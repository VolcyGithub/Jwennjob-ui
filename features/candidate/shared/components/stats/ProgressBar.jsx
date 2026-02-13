"use client";

export default function ProgressBar({
  percentage = 75,
  label = "Completion",
  color = "text-primary",
}) {
  const strokeWidth = 8;
  const size = 120;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl mb-4 p-6 flex flex-col items-center justify-center gap-3 w-full">
      <div className="relative w-[150px] h-[150px]">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 120 120"
        >
          {/* fond */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-200"
          />
          {/* progression */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`${color} transition-all duration-700 ease-out`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center text-primary justify-center text-xl font-semibold">
          {percentage}%
        </span>
      </div>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
