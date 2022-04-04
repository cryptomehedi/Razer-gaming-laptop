import React from 'react';

const Review = ({review}) => {
    const{author,text,rating} = review;
    return (
        <div className="my-4 p-4 bg-slate-300 rounded">
            <div className="my-4 p-4 hover:bg-amber-500 bg-white rounded">
                <div className="bg-gray-400 p-2 rounded text-left">
                    <h3><span className="font-semibold">Name :</span> {author}</h3>
                    <h4><span className="font-semibold">Review :</span> {text}</h4>
                    <h4><span className="font-semibold">Reating :</span> {rating}</h4>
                </div>
            </div>
        </div>
    );
};

export default Review;