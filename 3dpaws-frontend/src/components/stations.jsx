'use client';
import React, { useState, useEffect } from 'react';
export default function Stations({ isGreen, Name, Number }) {
  const [randomColor, setRandomColor] = useState('');

  useEffect(() => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setRandomColor(randomColor);
  }, []);

  return (
    <div className="flex items-center w-full m-0">
      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: randomColor }}></div>
      <div className={`ml-2 flex-1 p-2 ${isGreen ? 'bg-green-300' : 'bg-red-300'} text-xs md:text-sm text-blue-700`}>{Name} ({Number})</div>
    </div>
  );
}
