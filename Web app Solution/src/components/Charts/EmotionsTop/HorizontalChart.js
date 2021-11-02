import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jhonaton",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Shahbaz",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Ana",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Kevin",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
 
];

export default function HorizontalChart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}
