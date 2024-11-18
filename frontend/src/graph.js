
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Project 1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Project 2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Project 3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Project 4",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Project 5",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Project 6",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Project 7",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Graph() {
  return (
    <LineChart width={700} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="black" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
