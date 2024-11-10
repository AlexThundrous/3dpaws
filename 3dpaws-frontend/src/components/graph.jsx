"use client";
import { useRef, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import classNames from 'classnames';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(...registerables);

const ScatterPlot = () => {
  const chartRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const [unit, setUnit] = useState("Samples per Minute"); // Default unit

  // Different datasets based on units
  const unitsData = {
    "Samples per Minute": [
      { x: new Date('2023-05-19T14:50:00'), y: 400 },
      { x: new Date('2023-05-19T14:51:00'), y: 350 },
      { x: new Date('2023-05-19T14:52:00'), y: 300 },
      { x: new Date('2023-05-19T14:53:00'), y: 250 },
    ],
    "Samples per Hour": [
      { x: new Date('2023-05-19T14:50:00'), y: 24000 },
      { x: new Date('2023-05-19T14:51:00'), y: 21000 },
      { x: new Date('2023-05-19T14:52:00'), y: 18000 },
      { x: new Date('2023-05-19T14:53:00'), y: 15000 },
    ],
    "Samples per Day": [
      { x: new Date('2023-05-19T14:50:00'), y: 576000 },
      { x: new Date('2023-05-19T14:51:00'), y: 504000 },
      { x: new Date('2023-05-19T14:52:00'), y: 432000 },
      { x: new Date('2023-05-19T14:53:00'), y: 360000 },
    ]
  };

  const data = {
    datasets: [
      {
        label: unit,
        data: unitsData[unit],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointRadius: 10,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          tooltipFormat: 'HH:mm',
          displayFormats: {
            minute: 'HH:mm',
          },
          min: new Date('2023-05-19T14:40:00'),
        },
        title: {
          display: true,
          text: 'Time (UTC)',
        },
      },
      y: {
        title: {
          display: true,
          text: unit,
        },
        beginAtZero: true,
        ticks: {
          stepSize: unit === "Samples per Minute" ? 100 :
                     unit === "Samples per Hour" ? 5000 : 100000, // Adjust step size
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw.x}: ${context.raw.y} ${unit}`;
          },
        },
      },
    },
  };

  const downloadChart = (format) => {
    if (chartRef.current) {
      const chartInstance = chartRef.current;
      let url;
      if (format === 'jpg') {
        url = chartInstance.toBase64Image('image/jpeg');
      } else {
        url = chartInstance.toBase64Image();
      }
      const link = document.createElement('a');
      link.href = url;
      link.download = `chart.${format}`;
      link.click();
    }
  };

  return (
    <div className="relative w-full h-70vh">
      <div className={classNames(`absolute top-0 right-0 tham tham-e-squeeze tham-w-6 mr-4`, { 'tham-active': opened })} onClick={() => setOpened(!opened)}>
        <div className="tham-box">
          <div className="tham-inner"></div>
        </div>
      </div>
      <div className={classNames("menu bg-white absolute top-8 right-0 p-4 shadow-lg", { hidden: !opened })}>
        <button onClick={() => downloadChart('png')} className="block mb-2 hover:bg-gray-200">Download PNG</button>
        <button onClick={() => downloadChart('jpg')} className="block mb-2 hover:bg-gray-200">Download JPG</button>
        <button onClick={() => setUnit("Samples per Minute")} className="block mb-2 hover:bg-gray-200">Samples per Minute</button>
        <button onClick={() => setUnit("Samples per Hour")} className="block mb-2 hover:bg-gray-200">Samples per Hour</button>
        <button onClick={() => setUnit("Samples per Day")} className="block hover:bg-gray-200">Samples per Day</button>
      </div>
      <br /> <br />
      <Scatter ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ScatterPlot;
