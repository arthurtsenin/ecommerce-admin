"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface OverviewProps {
  data: any[];
}

export const Overview: React.FC<OverviewProps> = ({ data }) => {
  return (
    <div></div>
    // <ResponsiveContainer width="100%" height={150}>
    //   <BarChart data={data}>
    //     <XAxis
    //       dataKey="name"
    //       stroke="#88888"
    //       fontSize={12}
    //       tickLine={false}
    //       axisLine={false}
    //     />

    //     <YAxis
    //       dataKey="name"
    //       stroke="#88888"
    //       fontSize={12}
    //       tickLine={false}
    //       axisLine={false}
    //       tickFormatter={(value) => `$${value}`}
    //     />
    //     <Bar dataKey='total' fill='#3498db' radius={[4,4,0,0]}></Bar>
    //   </BarChart>
    // </ResponsiveContainer>
  );
};
