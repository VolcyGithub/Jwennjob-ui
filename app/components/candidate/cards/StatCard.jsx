"use client";
import { BiChevronRight } from "react-icons/bi";

export default function StatCard({
  icon,
  value,
  label,
  color = "text-primary",
}) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-3xl">
      <div className="flex items-center gap-3">
        <span className="p-4 bg-primary/10 rounded-full block text-center">
          {icon} 
        </span>
        <div className="flex flex-col">
          <span className="block text-primary font-bold text-md">{value}</span>
          <span className="text-gray-500 text-xs">{label}</span>
        </div>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <BiChevronRight className="text-primary size-6" />
      </button>
    </div>
  );
}
