import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeImg  from '../../img/laptop.png'
import Review from '../Review/Review';
const HomePage = () => {
    const [reviews] = useReviews()
    return (
        <div className="">
            <div className="md:flex md:flex-row-reverse justify-between items-center">
                
                <div className="md:w-auto mt-16">
                    <img src={HomeImg} alt="" />
                </div>
                <div className="mt-8 md:mt-0">
                    <h3 className="text-3xl font-semibold text-indigo-400">Keep Up With The Trend</h3>
                    <h3 className="text-3xl font-semibold text-purple-500">Your Next Step</h3>
                    <p className="mt-3">Razer comes up with a unique feature for laptops and one can explore the entire range of gaming laptops that will be suitable for work and play. The laptops come with best graphics on great display that has the newest technology comprised within the system.</p>
                    <div className="mt-3"><Link to={'/'} className='hover:bg-indigo-400 bg-purple-400 font-semibold hover:text-white rounded p-2'>See More  <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></Link></div>
                </div>
            </div>
            <div className="text-center my-16 md:my-4">
                <h3 className="text-3xl font-medium font-serif">Customer Reviews</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    reviews.slice(0,3).map(review => <Review
                        review={review} 
                        key={review._id} 
                        ></Review>)
                }
                </div>
                
                <Link to={'/reviews'} className='hover:bg-indigo-400 bg-purple-400 font-semibold hover:text-white rounded p-2'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default HomePage;