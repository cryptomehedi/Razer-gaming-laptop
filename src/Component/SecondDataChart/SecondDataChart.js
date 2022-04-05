import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useDataChart from '../../hooks/useDataChart';

const SecondDataChart = () => {
    const [data] = useDataChart()
    
    return (
        <div>
            <h4 className='text-2xl my-9 font-semibold text-emerald-400 text-center'>Investment vs Revenue</h4>
            <ResponsiveContainer width={"100%"} aspect={1}>
            <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#95E22D " fill="#95E22D " />
        </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default SecondDataChart;