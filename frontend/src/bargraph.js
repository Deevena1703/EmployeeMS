
import React from "react";
import {
  BarChart,
  Bar,
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
    name: "project 3",
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
  }
];

export default function Bargraph() {
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#4c7766" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
