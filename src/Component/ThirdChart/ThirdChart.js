import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useDataChart from '../../hooks/useDataChart';

const ThirdChart = () => {
    const [data] = useDataChart()
    return (
        <div>
            <ResponsiveContainer width={"100%"} aspect={1}>
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
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar name="Investment" dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar name="Revenue" dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width={"100%"} aspect={1}>
                <PieChart width={400} height={400}>
                    <Pie data={data} name="Revenue" dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} name="Investment" dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ThirdChart;