import * as reviewsActions from "../../store/reviews";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EditModal from "./EditModal";
import Stars from "../Stars/ViewStars";
import WriteStars from "../Stars/CreateStars";

const Reviews = ({ teeId }) => {

    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const reviewList = Object.values(reviews);
    const sessionUser = useSelector(state => state.session.user);

    const [review, setReview] = useState("");
    const [show, setShow] = useState(false);
    const [stars, setStars] = useState(0);
    const [reviewToEdit, setReviewToEdit] = useState({});

    console.log("review to edit", reviewToEdit)

    useEffect(() => {
        dispatch(reviewsActions.getReviews(teeId));
    }, [dispatch, teeId]);

    const handleShow = () => {
        setShow(!show);
    };

    const handleStars = (rate) => {
        setStars(rate);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            userId: sessionUser.id,
            teeId: teeId,
            stars: stars,
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
            {sessionUser && (
                <Form>
                    <Form.Group controlId="ControlTextarea1">
                        <Form.Label>Write a review</Form.Label>
                        <WriteStars handleStars={handleStars} />
                        <Form.Control as="textarea" rows={3} value={review} onChange={(e) => setReview(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Submit Review
                    </Button>
                </Form>)}
            {show && (<EditModal review={reviewToEdit} show={show} setShow={setShow} />)}
            <ul>
                {reviewList.map(review => (
                    <li key={review.id}>
                        <div>
                            <Stars review={review} />
                            {review.review}
                            {sessionUser && review.userId == sessionUser.id && (
                                <>
                                    <Button variant="outline-primary" onClick={
                                        () => {
                                            setReviewToEdit(review);
                                            handleShow();
                                        }
                                    }><i className="fa-regular fa-pen-to-square"></i></Button>
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
