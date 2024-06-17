import React from 'react';
import CustomTootip from './CustomTooltip';
import { useInView } from 'react-intersection-observer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2020, porcentagem: 20 },
  { year: 2021, porcentagem: 22 },
  { year: 2022, porcentagem: 25 },
  { year: 2023, porcentagem: 27 },
  { year: 2024, porcentagem: 30 },
];

const Chart = () => {

  const [ref, inview] = useInView({
    threshold: .2
  })

  return (
    <ResponsiveContainer ref={ref} width={600} height={400}>
     {inview && <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke='grey'/>
        <XAxis dataKey="year" />
        <YAxis tickFormatter={(tick) => `${tick}%`}/>
        <Tooltip content={<CustomTootip/>}/>
        <Line type="monotone" dataKey="porcentagem" stroke="#8a2be2" activeDot={{ r: 8 }} />
      </LineChart>}
    </ResponsiveContainer>
  );
}

export default Chart;