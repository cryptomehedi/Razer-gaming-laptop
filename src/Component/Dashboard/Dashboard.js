import React from 'react';
import FirstDataChart from '../FirstDataChart/FirstDataChart';
import SecondDataChart from '../SecondDataChart/SecondDataChart';

const Dashboard = () => {
    return (
        <div>
            <h3>this is a dashboard</h3>
            <div>
                <FirstDataChart></FirstDataChart>
            </div>
            <div>
                <SecondDataChart></SecondDataChart>
            </div>
        </div>
    );
};

export default Dashboard;