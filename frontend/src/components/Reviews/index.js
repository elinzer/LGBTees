import * as reviewsActions from "../../store/reviews";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Reviews = ({ teeId }) => {

    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const reviewList = Object.values(reviews);
    const sessionUser = useSelector(state => state.session.user);
    console.log(reviewList)

    const [review, setReview] = useState("");

    useEffect(() => {
        dispatch(reviewsActions.getReviews(teeId));
    }, [dispatch, teeId]);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            userId: sessionUser.id,
            teeId: teeId,
            stars: 5,
            review
        }

        dispatch(reviewsActions.createReview(data));
        setReview("");
    }

    return (
        <div>
            <h2>Reviews</h2>
            {sessionUser && (<Form>
                <Form.Group controlId="ControlTextarea1">
                    <Form.Label>Write a review</Form.Label>
                    <Form.Control as="textarea" rows={3} value={review} onChange={(e) => setReview(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit Review
                </Button>
            </Form>)}
            <ul>
                {reviewList.map(review => (
                    <li key={review.id}>
                        <div>{review.review}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reviews;
