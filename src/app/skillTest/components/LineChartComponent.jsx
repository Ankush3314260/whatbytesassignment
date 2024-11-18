"use client"
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const PercentileLineChart = ({ percentile }) => {
  // Percentile data for the chart
  const [currentUserPercentile, setcurrentUserPercentile] = useState([
    { percentile: 0, students: 0 },
    { percentile: 10, students: 5 },
    { percentile: 20, students: 20 },
    { percentile: 30, students: 50 },
    { percentile: 40, students: 80 },
    { percentile: 50, students: 120 },
    { percentile: 60, students: 200 },
    { percentile: 70, students: 150 },
    { percentile: 80, students: 90 },
    { percentile: 90, students: 40 },
    { percentile: 100, students: 5 },
    
  ]);

  return (
    <div className="w-4/5 max-mob:w-full m-auto h-[300px] max-md:h-[300px] max-sm:h-[200px] max-md:text-[0.35em] md:text-[0.25em] p-2 ">
      <ResponsiveContainer>
        <LineChart
          data={currentUserPercentile}
          margin={{ top: 30, bottom: 30, left: 10, right: 12 }}
        >
          {/* X-Axis for percentiles */}
          <XAxis
            dataKey="percentile"
            type="number"
            domain={[0,100]}
            label={{
              value: "Percentile",
              position: "insideBottom",
              offset: -10,
            }}
          />
          {/* Y-Axis for student count */}
          <YAxis
            label={{
              value: "Number of Students",
              angle: -90,
              position: "insideLeft",
              dx: -5,
              dy: 50,
              fill: "#808080",
              fontSize: "1em",
            }}
          />

          {/* Tooltip to display data on hover */}
          <Tooltip />

          {/* Smooth line for percentile distribution */}
          <Line
            type="monotone"
            dataKey="students"
            stroke="#8884d8"
            strokeWidth={1.5}
            dot={{ fill: "#8884d8", r: 2 }}
          />

          {/* Reference line for the current user's percentile */}
          <ReferenceLine
            x={Number(percentile)} // Use the exact percentile
            stroke="#808080"
            strokeDasharray="3 3"
            label={{
              value: "Your Percentile",
              position: "top",
              fill: "#808080",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentileLineChart;