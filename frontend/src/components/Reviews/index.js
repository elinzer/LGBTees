import * as reviewsActions from "../../store/reviews";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EditModal from "./EditModal";

const Reviews = ({ teeId }) => {

    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const reviewList = Object.values(reviews);
    const sessionUser = useSelector(state => state.session.user);

    const [review, setReview] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(reviewsActions.getReviews(teeId));
    }, [dispatch, teeId]);

    const handleShow = () => setShow(!show);

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

    const handleDelete = (e, reviewId) => {
        e.preventDefault();
        dispatch(reviewsActions.removeReview(reviewId));
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
                        <div>
                            {review.review}
                            {sessionUser && review.userId == sessionUser.id && (
                            <>
                            <EditModal review={review} show={show} setShow={setShow}/>
                            <Button variant="outline-primary" onClick={handleShow}><i className="fa-regular fa-pen-to-square"></i></Button>
                            <Button variant="outline-danger" onClick={(e) => handleDelete(e, review.id)}><i className="fa-solid fa-trash"></i></Button>
                            </>
                            )}
                            </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reviews;
