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

const Barchart = () => {
  const data = [
    {
      name: "JOY",
      fig: 25,
    },
    {
      name: "Page B",
      fig: 48,
    },
    {
      name: "Page C",
      fig: 96,
    },
    {
      name: "Page D",
      fig: 48,
    },
    {
      name: "Page E",
      fig: 33,
    },
    {
      name: "Page F",
      fig: 32,
    },
    {
      name: "Page G",
      fig: 4300,
    },
  ];

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis ticks={[0 , 1000]} />
      <Bar dataKey="fig" fill="#8884d8" />
    </BarChart>
  );
};

export default Barchart;
