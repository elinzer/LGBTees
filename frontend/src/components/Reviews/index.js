import * as reviewsActions from "../../store/reviews";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import EditModal from "../Modals/EditReviewModal";
import Stars from "../Stars/ViewStars";
import WriteStars from "../Stars/CreateStars";
import "./Reviews.css";

const Reviews = ({ teeId }) => {

    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const reviewList = Object.values(reviews);
    const sessionUser = useSelector(state => state.session.user);

    const [review, setReview] = useState("");
    const [show, setShow] = useState(false);
    const [stars, setStars] = useState(0);
    const [reviewToEdit, setReviewToEdit] = useState({});
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const userHasReview = reviewList.some(review => review.userId === sessionUser?.id);


    useEffect(() => {
        dispatch(reviewsActions.getReviews(teeId));
    }, [dispatch, teeId]);

    useEffect(() => {
        let errs = [];

        if (stars === 0) errs.push("Please select a star rating");
        if (review.length < 10) errs.push("Please write a review that is at least 10 characters long");
        if (review.length > 500) errs.push("Please write a review that is less than 500 characters long");

        if (errs.length > 0) {
            setErrors(errs);
        } else {
            setErrors([]);
        }

    }, [review, stars]);

    const handleShow = () => {
        setShow(!show);
    };

    const handleStars = (rate) => {
        setStars(rate);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (errors.length) {
            return;
        } else {

            const data = {
                userId: sessionUser.id,
                teeId: teeId,
                stars: stars,
                review
            }

            dispatch(reviewsActions.createReview(data));
            setReview("");
            setErrors([]);
            setHasSubmitted(false);
        }
    }

    const handleDelete = (e, reviewId) => {
        e.preventDefault();
        dispatch(reviewsActions.removeReview(reviewId));
    }

    return (
        <div className="review-container">
            {/* <h2>Reviews</h2> */}

            {sessionUser && userHasReview !== true && (
                <Form className="review-form">
                    {errors.length > 0 && hasSubmitted && (
                        <div className="errors">
                            {errors.map((error, idx) =>
                                <li key={idx}>{error}</li>)}
                        </div>
                    )}
                    <Form.Group controlId="ControlTextarea1">
                        <Form.Label style={{ fontStyle: "italic" }}>Own and love this shirt? Write a review!</Form.Label>
                        <WriteStars handleStars={handleStars} />
                        <Form.Control className="review-textarea" as="textarea" rows={3} value={review} onChange={(e) => setReview(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Submit Review
                    </Button>
                </Form>
            )}
            {show && (<EditModal review={reviewToEdit} show={show} setShow={setShow} />)}
            <ul>
                {reviewList.map(review => (
                    <li key={review.id} className='single-review' >
                        <Card>
                            <Card.Header>
                                <Stars stars={review.stars} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {review.review}
                                </Card.Text>
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
                            </Card.Body>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reviews;
