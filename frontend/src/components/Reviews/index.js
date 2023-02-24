import * as reviewsActions from "../../store/reviews";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Reviews = ({ teeId }) => {

    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const reviewList = Object.values(reviews);

    useEffect(() => {
        dispatch(reviewsActions.getReviews(teeId));
    }, [dispatch, teeId]);

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviewList.map(review => (
                    <li key={review.id}>
                        <div>{review.review}</div>
                        <div>{review.rating}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reviews;
