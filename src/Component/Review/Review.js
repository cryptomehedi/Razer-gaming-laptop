import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const Review = ({review}) => {
    const{author,text, rating, img} = review;
    return (
        <div className="my-4 p-4 bg-purple-300 rounded">
            <div className="my-4 p-4 bg-white rounded">
                <div className="bg-indigo-200 p-2 rounded text-left">
                    <div className="flex justify-center"><img className="rounded-full" src={img} alt="" /></div>
                    <div className="flex justify-center"><Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                        readonly
                    ></Rating></div>
                    <h3><span className="font-semibold">Name :</span> {author}</h3>
                    <h4><span className="font-semibold">Review :</span> {text}</h4>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;