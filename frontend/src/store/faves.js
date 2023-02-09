import { csrfFetch } from "./csrf";

const GET_FAVES = "faves/GET_FAVES";
const ADD_FAVE = "faves/ADD_FAVE";
const GET_FAVES_BY_USER = "faves/GET_FAVES_BY_USER";
const REMOVE_FAVE = "faves/REMOVE_FAVE";

const get = (faves) => ({
    type: GET_FAVES,
    payload: faves
})

const add = (data) => ({
    type: ADD_FAVE,
    payload: data.tee
})

const getFavesByUser = (faves) => ({
    type: GET_FAVES_BY_USER,
    payload: faves
})

const remove = (fave) => ({
    type: REMOVE_FAVE,
    payload: fave
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
export const addFave = (teeId, userId) => async (dispatch) => {

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

//remove fave
export const removeFave = (teeId, userId) => async (dispatch) => {

    const response = await csrfFetch('/api/faves', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teeId,
            userId
        })
    });
    const data = await response.json();
    dispatch(remove(teeId));
    return response;
}


const initialState = {
    currentFaves: {}
};

const favesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_FAVES:
            newState = { currentFaves: {}};
            action.payload.Faves.forEach(fave => {
                newState[fave.id] = fave;
            });
            return newState;
        case GET_FAVES_BY_USER:
            newState = {...state, currentFaves: {...state.currentFaves}};
            newState.currentFaves = {};
            action.payload.Faves.forEach(fave => {
                newState.currentFaves[fave.id] = fave;
            });
            return newState;
        case ADD_FAVE:
            newState = {...state, currentFaves: {...state.currentFaves}};
            newState.currentFaves[action.payload.id] = action.payload;
            return newState;
        case REMOVE_FAVE:
            newState = {...state, currentFaves: {...state.currentFaves}};
            delete newState.currentFaves[action.payload];
            return newState;
        default:
            return state;
    }
}

export default favesReducer;
