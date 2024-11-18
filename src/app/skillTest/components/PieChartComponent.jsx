"use client";
import React, { useEffect, useState } from "react";
import { PieChart, ResponsiveContainer, Pie, Cell, Label } from "recharts";

const PieChartComponent = ({ totalQuestions, score=12 }) => {
  const [pieData, setPieData] = useState([
    { name: "Scored", value: score },
    { name: "Remaining", value: totalQuestions - score },
  ]);

  useEffect(() => {
    // Update pieData whenever score or totalQuestions changes
    
    
    setPieData([
      { name: "Scored", value: score },
      { name: "Remaining", value: totalQuestions - score },
    ]);
  }, [score, totalQuestions]);

  const COLORS = ["#4285f4", "#b7d1fb"]; // Colors for the chart

  return (
    <div className="w-full h-56 flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          
            <Pie
              data={[
                { name: "Scored", value: Number(pieData[0].value) },
                { name: "Remaining", value: Number(pieData[1].value) },
              ]}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#b7d1fb"
              stroke="none"
              paddingAngle={0}
              dataKey="value"
            >
              {/* Render the cells dynamically */}
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              {/* Display marks scored in the center */}
              <Label
                value={`${score}/${totalQuestions}`}
                position="center"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fill: "#333",
                }}
              />
            </Pie>
         
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
