import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale, Legend, Filler);

const Graph = ({ graphData }) => {
  const labels = graphData?.map((item) => item.clickDate) || [];
  const userPerDay = graphData?.map((item) => item.count) || [];

  const data = {
    labels: labels.length > 0 ? labels : Array(14).fill(""),
    datasets: [
      {
        label: "Total Clicks",
        data: userPerDay.length > 0 ? userPerDay : [1,2,3,4,5,6,7,6,5,4,3,2,1],
        backgroundColor: userPerDay.length > 0 ? "#3b82f6" : "rgba(54, 162, 235, 0.1)",
        borderColor: "#1D2327",
        fill: true,
        tension: 0.4,
        barThickness: 20,
        categoryPercentage: 1.5,
        barPercentage: 1.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: { legend: { display: true } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => (Number.isInteger(value) ? value.toString() : ""),
        },
        title: {
          display: true,
          text: "Number Of Clicks",
          font: { family: "Arial", size: 16, weight: "bold", color: "#FF0000" },
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
          font: { family: "Arial", size: 16, weight: "bold", color: "#FF0000" },
        },
      },
    },
  };

  return <Bar className="w-full" data={data} options={options} />;
};

export default Graph;
