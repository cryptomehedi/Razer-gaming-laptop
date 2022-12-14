import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useDataChart from '../../hooks/useDataChart';

const FirstDataChart = () => {
    const [data] = useDataChart()
    // console.log(data);
    return (
        <div>
            <h4 className='text-2xl my-9 font-semibold text-emerald-400 text-center'>Month Wise Sell</h4>
            <ResponsiveContainer width={"100%"} aspect={1}>
            <LineChart width={500} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" padding={{ left: 0, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default FirstDataChart;