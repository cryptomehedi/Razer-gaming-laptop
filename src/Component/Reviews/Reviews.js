import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div className="text-center container mx-auto">
            <h2 className="text-5xl font-semibold my-10">What Our Customer Say</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    reviews.map(review => <Review
                        review={review} 
                        key={review._id} 
                        ></Review>)
                }
                </div>

        </div>
    );
};

export default Reviews;