import React from 'react';
import FirstDataChart from '../FirstDataChart/FirstDataChart';
import SecondDataChart from '../SecondDataChart/SecondDataChart';

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-9'>
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