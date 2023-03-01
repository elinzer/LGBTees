import { csrfFetch } from "./csrf";

const GET_REVIEWS_BY_TEE = "reviews/GET_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const EDIT_REVIEW = "reviews/EDIT_REVIEW";
const DELETE_REVIEW = "reviews/DELETE_REVIEW";

const getReviewsByTee = (reviews) => ({
    type: GET_REVIEWS_BY_TEE,
    payload: reviews
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review
})

const editReview = (review) => ({
    type: EDIT_REVIEW,
    payload: review
})

const deleteReview = (review) => ({
    type: DELETE_REVIEW,
    payload: review
})


export const getReviews = (teeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${teeId}`);
    const data = await response.json();

    dispatch(getReviewsByTee(data));
    return response;
}

export const createReview = (data) => async (dispatch) => {

    const { userId, teeId, rating, review } = data;
    const response = await csrfFetch(`/api/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            teeId,
            rating,
            review
        })
    });

    const newReview = await response.json();
    dispatch(addReview(newReview));
    return response;
}

export const updateReview = (data) => async (dispatch) => {

    const { userId, teeId, rating, review } = data;
    const response = await csrfFetch(`/api/reviews/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            teeId,
            rating,
            review
        })
    });

    const updatedReview = await response.json();
    dispatch(editReview(updatedReview));
    return response;
}

export const removeReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    });

    const deletedReview = await response.json();
    dispatch(deleteReview(deletedReview));
    return response;
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_REVIEWS_BY_TEE:
            newState = {...state};
            action.payload.Reviews.forEach(review => {
                newState[review.id] = review;
            });
            return newState;
        case ADD_REVIEW:
            newState = {...state};
            newState[action.payload.Review.id] = action.payload.Review;
            return newState;
        case EDIT_REVIEW:
            newState = {...state};
            newState[action.payload.Review.id] = action.payload.Review;
            return newState;
        case DELETE_REVIEW:
            newState = {...state};
            delete newState[action.payload.Review.id];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;
