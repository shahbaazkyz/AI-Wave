import React from "react";

import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
  Sector,
} from "recharts";

import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";

const mainChartData = getMainChartData();

const Linechart = () => {
  return (
    <Grid item xs={12}>
      <ResponsiveContainer width="100%" minWidth={500} height={350}>
        <ComposedChart
          margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
          data={mainChartData}
        >
          <YAxis
            ticks={[0, 20, 40, 60, 80, 100]}
            tick={{ fill: "aqua" + "80", fontSize: 14 }}
            stroke={"purple" + "80"}
            tickLine={false}
          />
          <XAxis
            tick={{ fill: "yellow" + "80", fontSize: 14 }}
            stroke={"pink" + "80"}
            tickLine={false}
          />

          <Line
            type="natural"
            dataKey="worry"
            stroke="rgb(110, 89, 242)"
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Line
            type="natural"
            dataKey="joy"
            stroke="rgb(6, 200, 130)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="natural"
            dataKey="angry"
            stroke="rgb(241, 109, 36)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="natural"
            dataKey="sad"
            stroke="rgb(40, 195, 228)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="natural"
            dataKey="neutral"
            stroke="rgb(255, 208, 93)"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default Linechart;

function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var joy = getRandomData(10, 20, 60, 80, 100);
  var angry = getRandomData(10, 20, 60, 80, 100);
  var worry = getRandomData(10, 20, 60, 80, 100);
  var sad = getRandomData(10, 20, 60, 80, 100);
  var neutral = getRandomData(10, 20, 60, 80, 100);

  for (let i = 0; i < joy.length; i++) {
    resultArray.push({
      joy: joy[i].value,
      angry: angry[i].value,
      worry: worry[i].value,
      sad: sad[i].value,
      neutral: neutral[i].value,
    });
  }

  return resultArray;
}
