import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Form from "react-bootstrap/esm/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as reviewsActions from "../../store/reviews";

const EditModal = ({ review, show, setShow }) => {

    // console.log("review being passed" , review)

    const dispatch = useDispatch();
    const [reviewText, setReviewText] = useState(review.review);



    const handleEdit = (e) => {
        e.preventDefault();
        const data = {
            id: review.id,
            userId: review.userId,
            teeId: review.teeId,
            stars: review.stars,
            review: reviewText
        }
        dispatch(reviewsActions.updateReview(data));
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="ControlTextarea1">
                        <Form.Label>Edit your review</Form.Label>
                        <Form.Control as="textarea" rows={3} value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => {handleEdit(e) ; setShow(false)}}>
                        Submit Change
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>

    )
}

export default EditModal;
