import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeImg  from '../../img/laptop.png'
import Review from '../Review/Review';
const HomePage = () => {
    const [reviews] = useReviews()
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-5xl font-semibold text-rose-600">Keep Up With The Trend</h3>
                    <h3 className="text-7xl font-semibold text-lime-700">Your Next Step</h3>
                    <p className="mt-16">Razer comes up with a unique feature for laptops and one can explore the entire range of gaming laptops that will be suitable for work and play. The laptops come with best graphics on great display that has the newest technology comprised within the system.</p>
                </div>
                <div className="w-full mt-16">
                    <img src={HomeImg} alt="" />
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-6xl font-semibold">Customer Reviews</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    reviews.slice(0,3).map(review => <Review
                        review={review} 
                        key={review._id} 
                        ></Review>)
                }
                </div>
                
                <Link to={'/reviews'} className='bg-amber-500 rounded p-2'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default HomePage;