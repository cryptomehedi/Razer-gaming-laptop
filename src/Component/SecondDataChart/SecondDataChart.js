import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useDataChart from '../../hooks/useDataChart';

const SecondDataChart = () => {
    const [data] = useDataChart()
    
    return (
        <div>
            <h4 className='text-2xl my-9 font font-semibold text-emerald-400 text-center'>Investment vs Revenue</h4>
            <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 10,
                right: 0,
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
        </div>
    );
};

export default SecondDataChart;