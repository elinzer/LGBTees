import { csrfFetch } from "./csrf";

const GET_FAVES = "faves/GET_FAVES";

const get = (faves) => ({
    type: GET_FAVES,
    payload: faves
})

export const getAllFaves = () => async (dispatch) => {
    console.log("did u get here?")
    const response = await csrfFetch('/api/faves');
    const data = await response.json();
    console.log('data??', data)
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
