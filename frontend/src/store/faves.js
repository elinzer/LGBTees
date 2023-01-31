import { csrfFetch } from "./csrf";

const GET_FAVES = "faves/GET_FAVES";
const ADD_FAVE = "faves/ADD_FAVE";
const GET_FAVES_BY_USER = "faves/GET_FAVES_BY_USER";

const get = (faves) => ({
    type: GET_FAVES,
    payload: faves
})

const add = (fave) => ({
    type: ADD_FAVE,
    payload: fave
})

const getFavesByUser = (faves) => ({
    type: GET_FAVES_BY_USER,
    payload: faves
})

//get all faves
export const getAllFaves = () => async (dispatch) => {
    const response = await csrfFetch('/api/faves');
    const data = await response.json();
    dispatch(get(data));
    return response;
}

//get faves by current user
export const getFaves = (userId) => async (dispatch) => {

    const {id} = userId;

    const response = await csrfFetch(`/api/faves/${id}`);
    const data = await response.json();
    dispatch(getFavesByUser(data));
    return response;
}


//add fave
export const addFave = (info) => async (dispatch) => {

    const {teeId, userId} = info;

    const response = await csrfFetch('/api/faves', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teeId,
            userId
        })
    });
    const data = await response.json();
    dispatch(add(data));
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
        case GET_FAVES_BY_USER:
            newState = {...state, currentFaves: {}};
            action.payload.Faves.forEach(fave => {
                newState.currentFaves[fave.id] = fave;
            });
        default:
            return state;
    }
}

export default favesReducer;
