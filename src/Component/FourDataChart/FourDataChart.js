import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import useDataChart from '../../hooks/useDataChart';

const FourDataChart = () => {
    const [data] = useDataChart()
    return (
        <div>
            <ResponsiveContainer width={"100%"} aspect={1}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FourDataChart;