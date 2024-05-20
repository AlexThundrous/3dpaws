"use client";
import { useRef, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import classNames from 'classnames';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
  TimeScale,
  registerables
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(...registerables);

const ScatterPlot = () => {
  const chartRef = useRef(null);
  const [opened, setOpened] = useState(false);

  const data = {
    datasets: [
      {
        label: 'Samples per minute',
        data: [
          { x: new Date('2023-05-19T14:50:00'), y: 400 },
          { x: new Date('2023-05-19T14:50:00'), y: 350 },
          { x: new Date('2023-05-19T14:51:00'), y: 300 },
          { x: new Date('2023-05-19T14:52:00'), y: 250 },
        ],
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
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Samples per minute',
        },
        beginAtZero: true,
        ticks: {
          stepSize: 100,
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
            return `${context.raw.x}: ${context.raw.y} samples`;
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
        <button onClick={() => downloadChart('jpg')} className="block hover:bg-gray-200">Download JPG</button>
      </div>
      <br /> <br />
      <Scatter ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ScatterPlot;
