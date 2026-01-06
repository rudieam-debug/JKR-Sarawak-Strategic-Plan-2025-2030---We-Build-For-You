import React from 'react';

interface GaugeChartProps {
  percentage: number;
  label: string;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({ percentage, label }) => {
  const radius = 50;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * Math.PI; // It's a semi-circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = (p: number) => {
    if (p < 40) return 'text-primary';
    if (p < 75) return 'text-yellow-500';
    return 'text-green-500';
  };

  const colorClass = getColor(percentage);

  return (
    <div className="relative flex flex-col items-center">
      <svg
        height="80"
        width="160"
        viewBox="0 0 124 74"
        className="transform"
      >
        {/* Background Arc */}
        <path
          d={`M 12 ${radius + 12} A ${radius} ${radius} 0 0 1 ${radius * 2 + 12} ${radius + 12}`}
          className="text-border"
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
        />
        {/* Foreground Arc */}
        <path
          d={`M 12 ${radius + 12} A ${radius} ${radius} 0 0 1 ${radius * 2 + 12} ${radius + 12}`}
          className={`${colorClass} transition-all duration-1000`}
          stroke="currentColor"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <div className="absolute bottom-0 text-center -mb-2">
        <span className={`text-2xl font-bold text-text-primary`}>
          {Math.round(percentage)}%
        </span>
        <p className="text-xs font-semibold text-text-secondary">{label}</p>
      </div>
    </div>
  );
};