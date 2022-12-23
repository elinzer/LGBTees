import { csrfFetch } from "./csrf";

const GET_FAVES = "faves/GET_FAVES";

const get = (faves) => ({
    type: GET_FAVES,
    payload: faves
})

export const getAllFaves = (id) => async (dispatch) => {

    const { userId } = id;

    const response = await csrfFetch('/api/faves',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId
            })
        }
    );
    const data = await response.json();
    dispatch(get(data));
    return response;
}

const initialState = {};

const favesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_FAVES:
            newState = {};
            action.payload.Faves.forEach(fave => {
                newState[fave.id] = fave;
            });
            return newState;
        default:
            return state;
    }
}

export default favesReducer;
