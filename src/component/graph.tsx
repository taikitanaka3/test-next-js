"use client";
// components/Graph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,FontSpec } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Demo Line Plot',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 4,
    },
  ],
}
const fontStyle: FontSpec = {
    size: 16, 
    family: 'Arial', 
  };;

const options = {
plugins: {
    legend: {
      labels: {
        font: fontStyle,
      }
    },
    title: {
      display: true,
      text: 'Monthly Data',
      font: {
        ...fontStyle,
        size: 18, 
      }
    },
  },
scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: fontStyle,
      }
    },
    x: {
      ticks: {
        font: fontStyle,
      }
    }
  },
};

const Graph = () => {
  return <Line data={data} options={options} />;
};

export default Graph;
