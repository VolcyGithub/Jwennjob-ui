"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function ChartBar() {
  const labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const jobTitles = [
    "Développeur Frontend",
    "Designer UX/UI",
    "Product Manager",
    "Data Analyst",
    "Marketing Manager",
    "DevOps Engineer",
    "Sales Representative",
    "Content Writer",
    "HR Specialist",
    "QA Engineer",
  ];
  const dataValues = [12, 19, 8, 15, 10, 22, 18, 25, 30, 28];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Nombre de postes",
        data: dataValues,
        backgroundColor: "#2a2773",
        borderRadius: 10,
        borderWidth: 0,
        fill: true,
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Applications par poste d'emplois",
      },
      tooltip: {
        callbacks: {
          afterLabel: function (context) {
            const index = context.dataIndex;
            return `Titre: ${jobTitles[index]}`;
          },
          label: function (context) {
            return `Postes: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          stepSize: 5,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 9,
          },
        },
      },
    },
  };

  return (
    <div className="h-[400px] w-full bg-white p-4 rounded-3xl">
      <Bar data={data} options={options} />
    </div>
  );
}
