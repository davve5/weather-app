import React from "react";

const Sun: React.FC = () => {
  return (
    <div className="">
      <svg viewBox="0 0 320 320" width="500">
        <defs>
          <linearGradient id="0" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffd824" />
          </linearGradient>
        </defs>

        <clipPath id="sun">
          <rect width={95} height={100} fill="url(#0)" />
        </clipPath>
        <path
          id="sun-road"
          strokeWidth="2"
          stroke="#FFD824"
          strokeDasharray="8"
          d="M 0 100 A 100 100 0 0 1 200 100"
        />
        <circle cx={0} cy={100} r={5} fill="#FFD824" />
        <circle cx={200} cy={100} r={5} fill="#FFD824" />
        <use clipPath="url(#sun)" href="#sun-road" fill="url(#sun)" />
      </svg>
    </div>
  );
};

export default Sun;
