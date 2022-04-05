import React from 'react';
import FirstDataChart from '../FirstDataChart/FirstDataChart';
import FourDataChart from '../FourDataChart/FourDataChart';
import SecondDataChart from '../SecondDataChart/SecondDataChart';
import ThirdChart from '../ThirdChart/ThirdChart';

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
                <div>
                    <ThirdChart></ThirdChart>
                </div>
                <div>
                    <FourDataChart></FourDataChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;