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

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

export default function BarSection({ data, options  , title="Données"}) {
  return (
    <div className="bg-white rounded-4xl p-6">
      <span className="block text-sm font-bold mb-4 text-primary">{title}</span>
      <div className="h-100 relative">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
