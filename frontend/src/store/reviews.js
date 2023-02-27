import { csrfFetch } from "./csrf";

const GET_REVIEWS_BY_TEE = "reviews/GET_REVIEWS";

const getReviewsByTee = (reviews) => ({
    type: GET_REVIEWS_BY_TEE,
    payload: reviews
})

export const getReviews = (teeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${teeId}`);
    const data = await response.json();
    
    dispatch(getReviewsByTee(data));
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
        default:
            return state;
    }
}

export default reviewsReducer;
