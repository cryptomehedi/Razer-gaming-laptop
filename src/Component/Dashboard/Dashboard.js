import React from 'react';
import FirstDataChart from '../FirstDataChart/FirstDataChart';
import SecondDataChart from '../SecondDataChart/SecondDataChart';

const Dashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16'>
                <div>
                    <FirstDataChart></FirstDataChart>
                </div>
                <div>
                    <SecondDataChart></SecondDataChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;