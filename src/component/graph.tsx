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
      label: 'Score Transition',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgba(192, 20, 20, 0.4)',
      borderWidth: 4,
    },
  ],
}
interface FontSpec {
  size: number;
  family: string;
  style: string;
  weight: string;
  lineHeight: number;
}

// Define fontStyle with all required properties
const fontStyle: FontSpec = {
  size: 16,
  family: 'Arial',
  style: 'normal',  // Example value: 'normal', 'italic'
  weight: 'normal', // Example value: 'normal', 'bold', '600'
  lineHeight: 1.5   // Example value: Number representing line-height multiplier
};

const options = {
plugins: {
    legend: {
      labels: {
        font: fontStyle,
      }
    },
    title: {
      display: true,
      text: 'Monthly Score',
      font: {
        ...fontStyle,
        size: 28, 
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
