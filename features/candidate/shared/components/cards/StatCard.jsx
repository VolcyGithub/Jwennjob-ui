"use client";
import { BiChevronRight } from "react-icons/bi";

export default function StatCard({
  icon,
  value,
  label,
  inverse = false,
  color = "text-primary",
}) {
  return (
    <div className={`flex justify-between items-center p-4 ${inverse ? 'bg-primary' : 'bg-white'} rounded-4xl`}>
      <div className="flex items-center gap-3">
        <span className={`p-4 ${inverse ? 'bg-white' : 'bg-primary/5'} rounded-full block text-center`}>
          {icon} 
        </span>
        <div className="flex flex-col">
           <span className="text-gray-400 text-xs">{label}</span>
          <span className={`block ${inverse ? 'text-white' : 'text-primary'} font-bold text-lg`}>{value}</span>
         
        </div>
      </div>
    </div>
  );
}
