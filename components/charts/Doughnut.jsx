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

export function DoughnutSection({data , options , title = "Donnes"}) {
  return (
    <div className="bg-white rounded-4xl p-5">
      <span className="block text-sm font-bold text-primary">{title}</span>
      <div className="h-40 relative">
        <Doughnut height={200} data={data} options={options} />
      </div>
    </div>
  );
}
