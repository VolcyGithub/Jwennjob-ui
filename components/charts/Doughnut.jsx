import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

export function DoughnutSection({data , options}) {
  return (
    <div className="bg-white rounded-3xl  border border-slate-100 p-6">
      <div className="h-100 relative">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
